import React from 'react';
import Item from './top_menu/Item';

const SideMenu = (props) => {
    return ( 
        <aside class="widget card widget--sidebar widget_categories">
            <div class="widget__title card__header">
                <h4>Categories</h4>
            </div>
            <div class="widget__content card__content">
                <ul class="widget__list">
                    {props.items.map( (item, index) => (
                            <Item key={index} index={index} item={item}/>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
 
export default SideMenu;