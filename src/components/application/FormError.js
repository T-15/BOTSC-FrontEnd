import React, { Component } from 'react';

class FormError extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {theMessage} = this.props;

        return ( 
            <div class="col-md-12 alert alert-danger">
                <strong>Form Errors:</strong> {theMessage}
            </div>
        );
    }
}
 
export default FormError;