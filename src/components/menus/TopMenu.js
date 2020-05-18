import React, { Component } from 'react';
import Item from './top_menu/Item';

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeKey: null,
            items: ["seasons", "teams"]
        }
    }

    handleClick(i) {
        this.setState({
            activeKey: i
        })
    }

    render() { 
        return ( 
            <nav className="content-filter">
                <div className="container">
                    {/* eslint-disable-next-line*/}
                    <a href="#" className="content-filter__toggle"></a>
                    <ul className="content-filter__list">
                        {this.state.items.map( (item, index) => (
                            <Item key={index} index={index} item={item}/>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default TopMenu;