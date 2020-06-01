import React, { useState, useEffect } from 'react';
import { navigate } from "@reach/router";
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const New = () => {
    const [seasons, setSeasons] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/divisions';
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    useEffect(() => {
        async function fetchData() {
            const urlS = process.env.REACT_APP_API_URL + 'private/seasons';
            setIsError(false);
            setIsLoading(true);
            try {               
                const token = await getTokenSilently();
            
                const result = await axios(
                    urlS,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
            
                const responseData = await result.data;
                setSeasons(responseData)
                setIsLoading(false);

            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [getTokenSilently]);

    async function onSubmit(division) {
        setIsError(false);
        setIsSubmitting(true);

        try {
            const token = await getTokenSilently();
        
            await axios.post(
                url, division,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Division Created!', {
                progress: undefined
            });
            setIsSubmitting(false);
            navigate(`/admin/divisions`);

        } catch (error) {
            setErrorMessage(error.response.data);
            setIsError(true);
            setIsSubmitting(false);
        }
    }

    return (
        <>
        {isLoading ? (
            <div>Loading ...</div>
        ) : (
            <div className="container">
                <form id="form" className="col-lg-12 justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    {isError ? 
                        Object.keys(errorMessage).map( (item, index) => (
                            <div key={index} className="alert alert-danger col-12">
                                <strong>Error: {item} - </strong>{errorMessage[item]}
                            </div>
                        ))
                    : null }
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
            </div>
        )}
        </>
    );
}
 
export default New;