import React, { Component } from 'react';

class FieldLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div key={this.props.field.id} className="widget card widget--sidebar widget-banner col-md-6 p-0">
                <div className="widget__title card__header">
                    <h4>{this.props.field.name}</h4>
                </div>
                <div className="widget__content card__content">
                    <iframe title="Field Map" src={this.props.field.google_maps_url} width="100%" height="480px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        );
    }
}
 
export default FieldLocation;