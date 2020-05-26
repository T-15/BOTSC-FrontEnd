import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import TableWithHeader from "../../components/tables/TableWithHeader";

function Index(props) {
    const [member_services, setMemberServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/member_services';
    const tableTitle = "Member Services";

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
                setMemberServices(responseData);
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
                        <div>
                            <TableWithHeader 
                                title={tableTitle}
                                items={member_services}
                            />
                        </div>
                    )}
                </>
            )}    
            {props.children}
        </div>
    );
}
 
export default Index;