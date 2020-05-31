import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Show = (props) => {
    const [member_service, setMemberService] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/member_services/' + props.memberServiceId;

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
                setMemberService(responseData);

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
                        member_service ?
                            <div className="card bg-light">
                                <div className="card-body row">
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Name</label>
                                        <p>{member_service.name}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Contact Name</label>
                                        <p>{member_service.contact_name}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Description</label>
                                        <p>{member_service.description}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Image</label>
                                            <img src={member_service.image.url} width="400px" alt=""/>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Website Url</label>
                                        <p>{member_service.website_url}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Facebook Url</label>
                                        <p>{member_service.facebook_url}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Twitter Url</label>
                                        <p>{member_service.twitter_url}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Instagram Url</label>
                                        <p>{member_service.instagram_url}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Email</label>
                                        <p>{member_service.email}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Phone</label>
                                        <p>{member_service.phone}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Active</label>
                                        <p>
                                            {member_service.active === true ?
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