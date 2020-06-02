import React from 'react';
import Item from './top_menu/Item';

const SideMenu = (props) => {
    return ( 
        <aside className="widget card widget--sidebar widget_categories">
            <div className="widget__title card__header">
                <h4>Admin Menu</h4>
            </div>
            <div className="widget__content card__content">
                <ul className="widget__list">
                    {props.items.map( (item, index) => (
                            <Item key={index} index={index} item={item}/>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
 
export default SideMenu;