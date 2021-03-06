import React, { useState, useEffect } from 'react';
import { navigate } from "@reach/router";
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import JoditEditor from "jodit-react";

const New = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/constitution_articles';
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    useEffect(() => {

    });

    async function onSubmit(constitution_article) {
        setIsError(false);
        setIsSubmitting(true);
        try {               
            const token = await getTokenSilently();
        
            await axios.post(
                url, {constitution_article},
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
            navigate(`/admin/constitution_articles`);

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
                        <section className={ errors.year ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                            <label
                                className="control-label"
                                htmlFor="Position">
                                Position
                            </label>
                            <input
                                className="form-control"
                                type="integer"
                                name="position"
                                placeholder="1"
                                aria-invalid={errors.position ? "true" : "false"}
                                aria-describedby="positionError"
                                ref={register({ 
                                    required: 'This is required',
                                    pattern: {value: /[0-9]?[1-9]/, message: "Must be a number between 0-99"},
                                    maxLength: {value: 2, message: "Maximum 2 digits"},
                                    minLength: {value: 1, message: "Minimum 1 digit"} })}
                            />
                            <span id="positionError" style={{ display: errors.position ? "block" : "none" }}>
                                {errors.position && <p>{errors.position.message}</p>}
                            </span>
                        </section>
                        <section className={ errors.title ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                            <label
                                className="control-label"
                                htmlFor="Title">
                                Title
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="title"
                                placeholder="Title"
                                aria-invalid={errors.title ? "true" : "false"}
                                aria-describedby="titleError"
                                ref={register({ 
                                    required: 'This is required',
                                    maxLength: {value: 100, message: "Maximum 100 characters"} })}
                            />
                            <span id="titleError" style={{ display: errors.title ? "block" : "none" }}>
                                {errors.title && <p>{errors.title.message}</p>}
                            </span>
                        </section>

                        <section className={ errors.content ? "form-group col-md-12 has-error" : "form-group col-md-12" }>
                            <label
                                className="control-label"
                                htmlFor="Content">
                                Content
                            </label>
                            <JoditEditor
                                name="content"
                                tabIndex={1} // tabIndex of textarea
                                aria-invalid={errors.content ? "true" : "false"}
                                aria-describedby="contentError"
                                ref={register({ 
                                    required: 'This is required' })}
                            />
                            <span id="contentError" style={{ display: errors.content ? "block" : "none" }}>
                                {errors.content && <p>{errors.content.message}</p>}
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