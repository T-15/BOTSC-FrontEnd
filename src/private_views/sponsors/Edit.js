import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Edit = (props) => {
    const [sponsor, setSponsor] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [file, setFile] = useState();
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/sponsors/' + props.sponsorId;
    const { register, handleSubmit, reset, errors } = useForm({
        mode: "onBlur"
    });

    useEffect(() => {
        async function fetchData() {
            setIsError(false);
            setIsLoading(true);
            try {               
                const token = await getTokenSilently();
            
                const result = await axios(
                    url,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
            
                const responseData = await result.data;
                reset({
                    website_url: responseData.website_url,
                    active: responseData.active
                });
                setIsLoading(false);
                setSponsor(responseData);

            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [url, getTokenSilently, reset]);

    function onFileChangeHandler(event){
        setFile(event.target.files[0])
    }

    async function onSubmit(sponsor) {
        setIsErrorMessage(false);
        setIsSubmitting(true);

        const data = new FormData()

        // eslint-disable-next-line
        Object.entries(sponsor).map(([key, value]) => {
            if(key === 'image')
                data.append('sponsor[image]', file)
            else
                data.append('sponsor[' + key + ']', value)
        })
        
        try {               
            const token = await getTokenSilently();
        
            await axios.patch(
                url, data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Sponsor Updated!', {
                progress: undefined
            });
            setIsSubmitting(false);

        } catch (error) {
            setErrorMessage(error.response.data);
            setIsErrorMessage(true);
            setIsSubmitting(false);
        }
    }

    return ( 
        <div className="container">
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <>
                    {isError ? (
                        <div>Something went wrong ...</div>
                    ) : (
                        sponsor ?
                            <>
                                {isErrorMessage ? 
                                    Object.keys(errorMessage).map( (item, index) => (
                                        <div key={index} className="alert alert-danger col-12">
                                            <strong>Error: {item} - </strong>{errorMessage[item]}
                                        </div>
                                    ))
                                : null}
                                <form className="col-lg-12 justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card bg-light">
                                        <div className="card-body row">
                                            <section className={ errors.image ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="Image">
                                                    Image
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="file"
                                                    name="image"
                                                    accept="image/*"
                                                    aria-invalid={errors.image ? "true" : "false"}
                                                    aria-describedby="imageError"
                                                    onChange={onFileChangeHandler}
                                                    ref={register({ 
                                                        required: 'This is required' })}
                                                />
                                                <span id="imageError" style={{ display: errors.image ? "block" : "none" }}>
                                                    {errors.image && <p>{errors.image.message}</p>}
                                                </span>
                                            </section>

                                            <section className={ errors.website_url ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="WebsiteUrl">
                                                    Website Url (include `https://`)
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="url"
                                                    name="website_url"
                                                    placeholder="www.website.com"
                                                    aria-invalid={errors.website_url ? "true" : "false"}
                                                    aria-describedby="websiteUrlError"
                                                    ref={register()}
                                                />
                                                <span id="websiteUrlError" style={{ display: errors.website_url ? "block" : "none" }}>
                                                    {errors.website_url && <p>{errors.website_url.message}</p>}
                                                </span>
                                            </section>

                                            <section className={ errors.active ? "form-group col-md-12 has-error text-right" : "form-group col-md-12 text-right" }>
                                                <label className="checkbox checkbox-inline mr-2">
                                                    <input 
                                                        type="checkbox"
                                                        value="true"
                                                        name="active"
                                                        aria-invalid={errors.active ? "true" : "false"}
                                                        aria-describedby="activeError"
                                                        ref={register()}
                                                    /> Active <span className="checkbox-indicator"></span>
                                                </label>
                                                <span id="activeError" style={{ display: errors.active ? "block" : "none" }}>
                                                    {errors.active && <p>{errors.active.message}</p>}
                                                </span>
                                            </section>
                                            
                                            <div className="form-group col-md-12 text-right mb-0">
                                                <button className="btn btn-primary" disabled={isSubmitting} type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </>
                        : null
                    )}
                </>
            )}
        </div>
    );
}
 
export default Edit;