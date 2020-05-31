import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';

const Show = (props) => {
    const [referral_method, ReferralMethod] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/referral_methods/' + props.referralMethodId;

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
                ReferralMethod(responseData);

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
                        referral_method ?
                            <div className="card bg-light">
                                <div className="card-body row">
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Year</label>
                                        <p>{referral_method.name}</p>
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