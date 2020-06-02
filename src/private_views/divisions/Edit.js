import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Edit = (props) => {
    const [division, setDivision] = useState();
    const [seasons, setSeasons] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/divisions/' + props.divisionId;
    const urlS = process.env.REACT_APP_API_URL + 'private/seasons/';
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

                const resultS = await axios(
                    urlS,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
            
                const responseData = await result.data;
                const responseDataS = await resultS.data;
                setIsLoading(false);
                setSeasons(responseDataS)
                setDivision(responseData);
                reset({
                    name: responseData.name,
                    season_id: responseData.season_id,
                    active: responseData.active,
                });

            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [url, urlS, getTokenSilently, reset]);

    async function onSubmit(division) {
        setIsErrorMessage(false);
        setIsSubmitting(true);
        
        try {               
            const token = await getTokenSilently();
        
            await axios.patch(
                url, division,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Division Updated!', {
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
                        division ?
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
                                            <section className={ errors.website_url ? "form-group col-md-6 has-error" : "form-group col-md-6" }>
                                                <label
                                                    className="control-label"
                                                    htmlFor="Name">
                                                    Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    placeholder="1st Season"
                                                    aria-invalid={errors.name ? "true" : "false"}
                                                    aria-describedby="nameError"
                                                    ref={register()}
                                                />
                                                <span id="nameError" style={{ display: errors.name ? "block" : "none" }}>
                                                    {errors.name && <p>{errors.name.message}</p>}
                                                </span>
                                            </section>

                                            { seasons ?
                                                <section className={ errors.season_id ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                                                    <label
                                                        className="control-label"
                                                        htmlFor="SeasonId">
                                                        Season
                                                    </label>
                                                    <section className="form-group col-md-12">
                                                        <select name="season_id" className="form-control" ref={register({ required: true })}>
                                                            {seasons.map( season => (
                                                                <option key={season.id} value={season.id}>{season.name}</option>
                                                            ))}
                                                        </select>
                                                    </section>
                                                    <span id="seasonIdError" style={{ display: errors.season_id ? "block" : "none" }}>
                                                        {errors.season_id && <p>Must select one</p>}
                                                    </span>
                                                </section>
                                            : null }

                                            <section className={ errors.active ? "form-group col-md-12 has-error text-right" : "form-group col-md-12 text-right" }>
                                                <label class="checkbox checkbox-inline mr-2">
                                                    <input 
                                                        type="checkbox"
                                                        value="true"
                                                        name="active"
                                                        aria-invalid={errors.active ? "true" : "false"}
                                                        aria-describedby="activeError"
                                                        ref={register()}
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