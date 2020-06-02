import React, { useState, useEffect } from 'react';
import { navigate } from "@reach/router";
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const New = () => {
    const [members, setMembers] = useState();
    const [divisions, setDivisions] = useState();
    const [sponsors, setSponsors] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/teams';
    const [jersey_file, setJerseyFile] = useState();
    const [team_file, setTeamFile] = useState();
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    function onJerseyFileChangeHandler(event){
        setJerseyFile(event.target.files[0])
    }

    function onTeamFileChangeHandler(event){
        setTeamFile(event.target.files[0])
    }

    useEffect(() => {
        async function fetchData() {
            const urlM = process.env.REACT_APP_API_URL + 'private/members';
            const urlD = process.env.REACT_APP_API_URL + 'private/divisions';
            const urlS = process.env.REACT_APP_API_URL + 'private/sponsors';
            setIsError(false);
            setIsLoading(true);
            try {               
                const token = await getTokenSilently();
            
                const resultM = await axios(
                    urlM,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const resultD = await axios(
                    urlD,
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
            
                const responseDataM = await resultM.data;
                const responseDataD = await resultD.data;
                const responseDataS = await resultS.data;
                setMembers(responseDataM)
                setDivisions(responseDataD)
                setSponsors(responseDataS)
                setIsLoading(false);

            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [getTokenSilently]);

    async function onSubmit(team) {
        setIsError(false);
        setIsSubmitting(true);

        const data = new FormData()

        // eslint-disable-next-line
        Object.entries(team).map(([key, value]) => {
            if(key === 'jersey_image')
                data.append('team[jersey_image]', jersey_file)
            else if (key === 'team_image')
                data.append('team[team_image]', team_file)
            else
                data.append('team[' + key + ']', value)
        })

        try {
            const token = await getTokenSilently();
        
            await axios.post(
                url, data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Team Created!', {
                progress: undefined
            });
            setIsSubmitting(false);
            navigate(`/admin/teams`);

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
                            { members ?
                                <section className={ errors.convenor_id ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                                    <label
                                        className="control-label"
                                        htmlFor="ConvenorId">
                                        Convenor
                                    </label>
                                    <section className="form-group col-md-12">
                                        <select name="convenor_id" className="form-control" ref={register({ required: true })}>
                                            {members.map( convenor => (
                                                <option key={convenor.id} value={convenor.id}>{convenor.first_name + " " + convenor.last_name}</option>
                                            ))}
                                        </select>
                                    </section>
                                    <span id="convenorIdError" style={{ display: errors.convenor_id ? "block" : "none" }}>
                                        {errors.convenor_id && <p>Must select one</p>}
                                    </span>
                                </section>
                            : null }

                            { divisions ?
                                <section className={ errors.division_id ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                                    <label
                                        className="control-label"
                                        htmlFor="DivisionId">
                                        Division
                                    </label>
                                    <section className="form-group col-md-12">
                                        <select name="division_id" className="form-control" ref={register({ required: true })}>
                                            {divisions.map( division => (
                                                <option key={division.id} value={division.id}>{division.name}</option>
                                            ))}
                                        </select>
                                    </section>
                                    <span id="divisionIdError" style={{ display: errors.division_id ? "block" : "none" }}>
                                        {errors.division_id && <p>Must select one</p>}
                                    </span>
                                </section>
                            : null }

                            { sponsors ?
                                <section className={ errors.sponsor_id ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                                    <label
                                        className="control-label"
                                        htmlFor="sponsorId">
                                        Sponsor
                                    </label>
                                    <section className="form-group col-md-12">
                                        <select name="sponsor_id" className="form-control" ref={register({ required: true })}>
                                            {sponsors.map( sponsor => (
                                                <option key={sponsor.id} value={sponsor.id}>{sponsor.website_url}</option>
                                            ))}
                                        </select>
                                    </section>
                                    <span id="sponsorIdError" style={{ display: errors.sponsor_id ? "block" : "none" }}>
                                        {errors.sponsor_id && <p>Must select one</p>}
                                    </span>
                                </section>
                            : null }

                            <section className={ errors.name ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
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

                            <section className={ errors.jersey_image ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                                <label
                                    className="control-label"
                                    htmlFor="JerseyImage">
                                    Jersey Image
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    name="jersey_image"
                                    accept="image/*"
                                    aria-invalid={errors.jersey_image ? "true" : "false"}
                                    aria-describedby="jerseyImageError"
                                    onChange={onJerseyFileChangeHandler}
                                    ref={register()}
                                />
                                <span id="jerseyImageError" style={{ display: errors.jersey_image ? "block" : "none" }}>
                                    {errors.jersey_image && <p>{errors.jersey_image.message}</p>}
                                </span>
                            </section>

                            <section className={ errors.team_image ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                                <label
                                    className="control-label"
                                    htmlFor="TeamImage">
                                    Team Image
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    name="team_image"
                                    accept="image/*"
                                    aria-invalid={errors.team_image ? "true" : "false"}
                                    aria-describedby="teamImageError"
                                    onChange={onTeamFileChangeHandler}
                                    ref={register()}
                                />
                                <span id="teamImageError" style={{ display: errors.team_image ? "block" : "none" }}>
                                    {errors.team_image && <p>{errors.team_image.message}</p>}
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