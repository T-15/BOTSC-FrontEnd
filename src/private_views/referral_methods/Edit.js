import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Edit = (props) => {
    const [referral_method, setReferralMethod] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/referral_methods/' + props.referralMethodId;
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
                    year: responseData.year,
                    name: responseData.name,
                });
                setIsLoading(false);
                setReferralMethod(responseData);

            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [url, getTokenSilently, reset]);

    async function onSubmit(referral_method) {
        setIsErrorMessage(false);
        setIsSubmitting(true);
        try {               
            const token = await getTokenSilently();
        
            await axios.patch(
                url, {referral_method},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Referral Method Updated!', {
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
                        referral_method ?
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
                                            <section className={ errors.name ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="Name">
                                                    Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    aria-invalid={errors.name ? "true" : "false"}
                                                    aria-describedby="nameError"
                                                    ref={register({ 
                                                        required: 'This is required',
                                                        maxLength: {value: 100, message: "Maximum 100 characters"} })}
                                                />
                                                <span id="yearError" style={{ display: errors.year ? "block" : "none" }}>
                                                    {errors.name && <p>{errors.name.message}</p>}
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