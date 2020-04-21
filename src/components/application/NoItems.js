import React, { Component } from 'react';

class NoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card sponsor-card">
                <div className="card__content sponsor-card__content">
                    <div className="sponsor-card__excerpt">
                        <h3 className="mb-1">No {this.props.item} to display</h3>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default NoItems;