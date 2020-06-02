import React, { useState, useEffect } from 'react';
import { navigate } from "@reach/router";
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const New = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/fields';
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    useEffect(() => {

    });

    async function onSubmit(field) {
        setIsError(false);
        setIsSubmitting(true);
        try {               
            const token = await getTokenSilently();
        
            await axios.post(
                url, {field},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Constitution Article Created!', {
                progress: undefined
            });
            setIsSubmitting(false);
            navigate(`/admin/fields`);

        } catch (error) {
            setErrorMessage(error.response.data);
            setIsError(true);
            setIsSubmitting(false);
        }
    }

    return ( 
        <div className="container">
            <form className="col-lg-12 justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                {isError ? 
                    Object.keys(errorMessage).map( (item, index) => (
                        <div key={index} className="alert alert-danger col-12">
                            <strong>Error: {item} - </strong>{errorMessage[item]}
                        </div>
                    ))
                : null }
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
                        <span id="nameError" style={{ display: errors.name ? "block" : "none" }}>
                            {errors.name && <p>{errors.name.message}</p>}
                        </span>
                    </section>

                    <section className={ errors.google_maps_url ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                        <label
                            className="control-label"
                            htmlFor="GoogleMapsUrl">
                            Google Maps URL
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="google_maps_url"
                            placeholder="url"
                            aria-invalid={errors.google_maps_url ? "true" : "false"}
                            aria-describedby="googleMapsUrlError"
                            ref={register({ 
                                required: 'This is required' })}
                        />
                        <span id="googleMapsUrlError" style={{ display: errors.google_maps_url ? "block" : "none" }}>
                            {errors.google_maps_url && <p>{errors.google_maps_url.message}</p>}
                        </span>
                    </section>

                    <section className={ errors.active ? "form-group col-md-12 has-error text-right" : "form-group col-md-12 text-right" }>
                        <label class="checkbox checkbox-inline mr-2">
                            <input 
                                type="checkbox"
                                value="true"
                                name="active"
                                aria-invalid={errors.active ? "true" : "false"}
                                aria-describedby="activeError"
                                ref={register({ 
                                    required: 'This is required' })}
                            /> Active <span class="checkbox-indicator"></span>
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
        </div>
    );
}
 
export default New;