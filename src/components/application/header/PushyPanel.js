import React, { Component } from 'react';
import { Link } from '@reach/router';
import crest from '../../../images/crest-500-trans.png';

class PushyPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <aside className="pushy-panel pushy-panel--dark">
                <div className="pushy-panel__inner">
                    <header className="pushy-panel__header">
                        <div className="pushy-panel__logo">
                            <Link to="/">
                                <img src={crest} srcSet={crest} width="148" alt="Alchemists" className="header-logo__img"/>
                            </Link>
                        </div>
                    </header>
                    <div className="pushy-panel__content">

                    </div>
                    <a href="#" className="pushy-panel__back-btn"></a>
                </div>
            </aside>
        );
    }
}
 
export default PushyPanel;