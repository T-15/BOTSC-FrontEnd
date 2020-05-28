import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import JoditEditor from "jodit-react";

const Edit = (props) => {
    const [constitution_article, setConstitutionArticle] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/constitution_articles/' + props.constitutionArticleId;
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
                    position: responseData.position,
                    title: responseData.title,
                    content: responseData.content,
                    active: responseData.active
                });
                setIsLoading(false);
                setConstitutionArticle(responseData);

            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [url, getTokenSilently, reset]);

    async function onSubmit(constitution_article) {
        setIsErrorMessage(false);
        setIsSubmitting(true);
        try {               
            const token = await getTokenSilently();
        
            await axios.patch(
                url, {constitution_article},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Constitution Article Updated!', {
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
                        constitution_article ?
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
                            </>
                        : null
                    )}
                </>
            )}
        </div>
    );
}
 
export default Edit;