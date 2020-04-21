import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import AccordionSingle from './accordion/AccordionSingle';
import NoItems from './application/NoItems';

class Constitution extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: [],
            bylaws: []
        }
    }

    componentDidMount() {
        const articlesUrl = 'http://localhost:3001/api/v1/constitution_articles/active';
        const bylawsUrl = 'http://localhost:3001/api/v1/constitution_by_laws/active';
    
        axios.get(articlesUrl)
        .then((response) => {
          console.log(response)
          this.setState({
            articles: response.data
          })
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        });

        axios.get(bylawsUrl)
        .then((response) => {
          console.log(response)
          this.setState({
            bylaws: response.data
          })
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        });
    }

    render() { 
        return ( 
            <div>
                <Helmet>
                    <title>BOTSC | Constitution</title>
                </Helmet>
                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1 className="page-heading__title">BOTSC Constitution -<span className="highlight"> 2018</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-content">
                    <div className="container">
                        <div className="row">
                            <div className="content col-lg-6">
                                <h2>Articles</h2>
                                {this.state.articles.length ?
                                    <div class="accordion accordion--space-between" id="articles">
                                        {this.state.articles.map( article => (
                                            <AccordionSingle
                                                type="Article"
                                                item={article}
                                            />
                                        ))}
                                    </div>
                                :
                                    <NoItems
                                        item="Articles"
                                    />
                                }
                            </div>

                            <div className="content col-lg-6">
                                <h2>By-Laws</h2>
                                {this.state.bylaws.length ?
                                    <div class="accordion accordion--space-between" id="by-laws">
                                        {this.state.bylaws.map( bylaw => (
                                            <AccordionSingle
                                                type="By-Law"
                                                item={bylaw}
                                            />
                                        ))}
                                    </div>
                                :
                                    <NoItems
                                        item="By-Laws"
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Constitution;