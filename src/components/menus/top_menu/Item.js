import React, { Component } from 'react';
import { Link } from '@reach/router';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: false
        }
    }

    render() { 
        return ( 
            <li className={this.state.active ? "content-filter__item content-filter__item--active" : "content-filter__item"} >
                <Link to={this.props.item} className="content-filter__link">
                    {this.props.item}
                </Link>
            </li> 
        );
    }
}
 
export default Item;