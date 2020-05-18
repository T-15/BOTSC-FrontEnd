import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const TableWithHeader = (props) => {
    const first = props.items[0];

    return ( 
        <div class="card card--has-table">
            <div class="card__header">
                <h4>{props.title}</h4>
            </div>
            <div class="card__content">
                <div class="table-responsive">
                    {first !== undefined ?
                        <table class="table table-hover team-schedule">
                            <thead>
                                <tr>
                                    {Object.keys(first).map(k => (
                                        <th className="text-left">{k}</th>
                                    ))}
                                    <th className="text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.items.map (item => (
                                    <tr>
                                        {Object.keys(item).map(k => (
                                            <td className="text-left">
                                                {console.log(item[k])}
                                                {item[k].hasOwnProperty('url') ? 
                                                   <figure class="team-meta__logo">
                                                       <img src={item[k]["url"]} alt=""/>
                                                    </figure> 
                                                : item[k] === true ?
                                                    <FontAwesomeIcon icon={faCheckCircle} size="2x" className="fa text-success" />
                                                : item[k] === false ?
                                                    <FontAwesomeIcon icon={faTimesCircle} size="2x" className="fa text-danger" />
                                                : item[k] }
                                            </td>
                                        ))}
                                        <td className="text-left">
                                            <Link to={"/admin/seasons/" + item.id + "/edit"} className="btn btn-warning btn-xs m-1">Edit</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    : null }
                </div>
            </div>
        </div>
    );
}
 
export default TableWithHeader;