import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import TableWithHeader from "../../components/tables/TableWithHeader";

function Index() {
    const [seasons, setSeasons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/seasons';
    const tableTitle = "Seasons";

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
                setSeasons(responseData);
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
                                <div>
                                    <TableWithHeader 
                                        title={tableTitle}
                                        items={seasons}
                                    />
                                </div>
                            )}
                        </>
                    )}    
            </div>
        </div>
    );
}
 
export default Index;