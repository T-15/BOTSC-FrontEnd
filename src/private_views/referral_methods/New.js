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
    const url = process.env.REACT_APP_API_URL + 'private/referral_methods';
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    useEffect(() => {

    });

    async function onSubmit(referral_method) {
        setIsError(false);
        setIsSubmitting(true);
        try {               
            const token = await getTokenSilently();
        
            await axios.post(
                url, {referral_method},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Referral Method Created!', {
                progress: undefined
            });
            setIsSubmitting(false);
            navigate(`/admin/referral_methods`);

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
        </div>
    );
}
 
export default New;