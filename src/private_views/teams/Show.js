import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Show = (props) => {
    const [team, setTeam] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/teams/' + props.teamId;

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
                setIsLoading(false);
                setTeam(responseData);

            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [url, getTokenSilently]);

    return ( 
        <div className="container">
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <>
                    {isError ? (
                        <div>Something went wrong ...</div>
                    ) : (
                        team ?
                            <div className="card bg-light">
                                <div className="card-body row">
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Convenor Id</label>
                                        <p>{team.convenor_id}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Division Id</label>
                                        <p>{team.division_id}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Sponsor Id</label>
                                        <p>{team.sponsor_id}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Name</label>
                                        <p>{team.name}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Jersey Image</label>
                                            <img src={team.jersey_image.url} width="400px" alt=""/>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Team Image</label>
                                            <img src={team.team_image.url} width="400px" alt=""/>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Draft Position</label>
                                        <p>{team.draft_position}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Active</label>
                                        <p>
                                            {team.active === true ?
                                                <FontAwesomeIcon icon={faCheckCircle} size="2x" className="fa text-success" />
                                            : 
                                                <FontAwesomeIcon icon={faTimesCircle} size="2x" className="fa text-danger" />
                                            }
                                        </p>
                                    </section>
                                </div>
                            </div>
                        : null
                    )}
                </>
            )}
        </div>
    );
}
 
export default Show;