import React, { useState, useEffect } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Show = (props) => {
    const [constitution_article, setConstitutionArticle] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { getTokenSilently } = useAuth0();
    const url = process.env.REACT_APP_API_URL + 'private/constitution_articles/' + props.constitutionArticleId;

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
                setConstitutionArticle(responseData);

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
                        constitution_article ?
                            <div className="card bg-light">
                                <div className="card-body row">
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Position</label>
                                        <p>{constitution_article.position}</p>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Title</label>
                                        <p>{constitution_article.title}</p>
                                    </section>
                                    <section className="form-group col-md-12">
                                        <label className="control-label">Content</label>
                                        <p dangerouslySetInnerHTML={{__html: constitution_article.content}}/>
                                    </section>
                                    <section className="form-group col-md-6">
                                        <label className="control-label">Active</label>
                                        <p>
                                            {constitution_article.active === true ?
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