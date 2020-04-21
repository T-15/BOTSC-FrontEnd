import React from 'react';

const AccordionSingle = (props) => {
    return ( 
        <div class="card">
            <div class="card__header" id={props.type + "heading-" + props.item.id}>
                <h5 class="mb-0">
                    <button class="btn btn-link accordion__header-link collapsed" type="button" data-toggle="collapse" data-target={"#"+ props.type + "collapse-" + props.item.id} aria-expanded="false" aria-controls={props.type + "collapse-" + props.item.id}>
                        {props.type} {props.item.position}: {props.item.title} <span class="accordion__header-link-icon"></span>
                    </button>
                </h5>
            </div>
            <div id={props.type + "collapse-" + props.item.id} class="collapse" aria-labelledby={props.type + "heading-" + props.item.id} data-parent={"#" + props.type.toLowerCase() + "s"}>
                <div class="card__content" dangerouslySetInnerHTML={{__html: props.item.content}}>

                </div>
            </div>
        </div>
    );
}
 
export default AccordionSingle;