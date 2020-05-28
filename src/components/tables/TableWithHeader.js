import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const TableWithHeader = (props) => {
    const first = props.items[0];

    return ( 
        <div className="card card--has-table">
            <div className="card__header">
                <h4>{props.title}</h4>
                <Link to='new' className="btn btn-primary-inverse btn-xs">New</Link>
            </div>
            <div className="card__content">
                <div className="table-responsive">
                    {first !== undefined ?
                        <table className="table table-hover team-schedule">
                            <thead>
                                <tr>
                                    {Object.keys(first).map((k, i) => (
                                        <th key={"header-" + i} className="text-left">{k}</th>
                                    ))}
                                    <th className="text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.items.map ((item, index) => (
                                    <tr key={"row-" + index}>
                                        {Object.keys(item).map((k, i) => (
                                            <td key={"detail-" + i} className="text-left">
                                                { item[k] === null ?
                                                    "N/A"
                                                : item[k].hasOwnProperty('url') ?
                                                    <figure className="team-meta__logo">
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
                                            <Link to={item.id + "/edit"} className="btn btn-primary btn-xs m-1">Edit</Link>
                                            <Link to={item.id.toString()} className="btn btn-primary btn-xs m-1">Show</Link>
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