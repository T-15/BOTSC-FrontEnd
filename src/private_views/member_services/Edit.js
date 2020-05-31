import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Edit = (props) => {
    const [member_service, setMemberService] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [file, setFile] = useState();
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/member_services/' + props.memberServiceId;
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
                    name: responseData.name,
                    contact_name: responseData.contact_name,
                    description: responseData.description,
                    website_url: responseData.website_url,
                    twitter_url: responseData.twitter_url,
                    facebook_url: responseData.facebook_url,
                    instagram_url: responseData.instagram_url,
                    email: responseData.email,
                    phone: responseData.phone,
                    active: responseData.active
                });
                setIsLoading(false);
                setMemberService(responseData);

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

    async function onSubmit(member_service) {
        setIsErrorMessage(false);
        setIsSubmitting(true);

        const data = new FormData()

        // eslint-disable-next-line
        Object.entries(member_service).map(([key, value]) => {
            if(key === 'image')
                data.append('member_service[image]', file)
            else
                data.append('member_service[' + key + ']', value)
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

            toast.success('Member Service Updated!', {
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
                        member_service ?
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
                                                    Name of Service
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
                                                <span id="nameError" style={{ display: errors.name ? "block" : "none" }}>
                                                    {errors.name && <p>{errors.name.message}</p>}
                                                </span>
                                            </section>

                                            <section className={ errors.contact_name ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="ContactName">
                                                    Contact Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="contact_name"
                                                    placeholder="First Last"
                                                    aria-invalid={errors.contact_name ? "true" : "false"}
                                                    aria-describedby="contactNameError"
                                                    ref={register({ 
                                                        required: 'This is required',
                                                        maxLength: {value: 100, message: "Maximum 100 characters"} })}
                                                />
                                                <span id="contactNameError" style={{ display: errors.contact_name ? "block" : "none" }}>
                                                    {errors.contact_name && <p>{errors.contact_name.message}</p>}
                                                </span>
                                            </section>

                                            <section className={ errors.description ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="Description">
                                                    Description
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="description"
                                                    placeholder="Description"
                                                    aria-invalid={errors.description ? "true" : "false"}
                                                    aria-describedby="descriptionError"
                                                    ref={register({ 
                                                        required: 'This is required',
                                                        maxLength: {value: 100, message: "Maximum 100 characters"} })}
                                                />
                                                <span id="descriptionError" style={{ display: errors.description ? "block" : "none" }}>
                                                    {errors.description && <p>{errors.description.message}</p>}
                                                </span>
                                            </section>

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

                                            <section className={ errors.facebook_url ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="Facebook">
                                                    Facebook Url (include `https://`)
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="url"
                                                    name="facebook_url"
                                                    placeholder="www.website.com"
                                                    aria-invalid={errors.facebook_url ? "true" : "false"}
                                                    aria-describedby="FacebookError"
                                                    ref={register()}
                                                />
                                                <span id="FacebookError" style={{ display: errors.facebook_url ? "block" : "none" }}>
                                                    {errors.facebook_url && <p>{errors.facebook_url.message}</p>}
                                                </span>
                                            </section>

                                            <section className={ errors.twitter_url ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="Twitter">
                                                    Twitter Url (include `https://`)
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="url"
                                                    name="twitter_url"
                                                    placeholder="www.website.com"
                                                    aria-invalid={errors.twitter_url ? "true" : "false"}
                                                    aria-describedby="TwitterError"
                                                    ref={register()}
                                                />
                                                <span id="TwitterError" style={{ display: errors.twitter_url ? "block" : "none" }}>
                                                    {errors.twitter_url && <p>{errors.twitter_url.message}</p>}
                                                </span>
                                            </section>

                                            <section className={ errors.instagram_url ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="InstagramUrl">
                                                    Instagram Url (include `https://`)
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="url"
                                                    name="instagram_url"
                                                    placeholder="www.website.com"
                                                    aria-invalid={errors.instagram_url ? "true" : "false"}
                                                    aria-describedby="InstagramUrlError"
                                                    ref={register()}
                                                />
                                                <span id="InstagramUrlError" style={{ display: errors.instagram_url ? "block" : "none" }}>
                                                    {errors.instagram_url && <p>{errors.instagram_url.message}</p>}
                                                </span>
                                            </section>

                                            <section className={ errors.email ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="Email">
                                                    Email
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    aria-invalid={errors.email ? "true" : "false"}
                                                    aria-describedby="emailError"
                                                    ref={register({
                                                        pattern: {value: /^\S+@\S+$/i, message: "invalid email"}})}
                                                />
                                                <span id="emailError" style={{ display: errors.email ? "block" : "none" }}>
                                                    {errors.email && <p>{errors.email.message}</p>}
                                                </span>
                                            </section>

                                            <section className={ errors.phone ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="Phone">
                                                    Phone
                                                </label>
                                                <input 
                                                    className="form-control" 
                                                    type="tel" 
                                                    id="phone"
                                                    placeholder="9999999999" 
                                                    name="phone" 
                                                    ref={register({
                                                        pattern: {value: /[0-9]{3}[0-9]{3}[0-9]{4}/, message: "Invalid Phone number, Must be 1234567890"}})} 
                                                />
                                                <span id="phoneError" style={{ display: errors.phone ? "block" : "none" }}>
                                                    {errors.phone && <p>{errors.phone.message}</p>}
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