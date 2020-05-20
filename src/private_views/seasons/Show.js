import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';

const Show = (props) => {
    const [season, setSeason] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/seasons/' + props.seasonId;

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
                setSeason(responseData);

            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [url, getTokenSilently]);

    return ( 
        <div className="site-content">
            <div className="container">
                {isLoading ? (
                    <div>Loading ...</div>
                ) : (
                    <>
                        {isError ? (
                            <div>Something went wrong ...</div>
                        ) : (
                            season ?
                                <div className="card bg-light">
                                    <div className="card-body row">
                                        <section className="form-group col-md-6">
                                            <label className="control-label">Year</label>
                                            <p>{season.year}</p>
                                        </section>
                                        <section className="form-group col-md-6">
                                            <label className="control-label">Name</label>
                                            <p>{season.name}</p>
                                        </section>
                                    </div>
                                </div>
                            : null
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
 
export default Show;