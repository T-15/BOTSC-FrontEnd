import React from 'react';
import NumberFormat from 'react-number-format';
import DefaultImg from '../../images/defaults/_soccer_widget-featured-player.png';

const PlayerSmall = (props) => {
    return ( 
        <div className="widget card widget--sidebar widget-player widget-player--soccer">
            <div className="widget__content card__content">
                <figure className="widget-player__photo">
                    {props.player.image.url ?
                        <img src={props.player.image.url} style={{'max-width': "150px"}} alt=""/>
                    :
                        <img src={DefaultImg} alt=""/>
                    }
                </figure>
                <header className="widget-player__header clearfix">
                <div className="widget-player__number"></div>
                    <h4 className="widget-player__name">
                        <span className="widget-player__first-name">{props.player.first_name}</span>
                        <span className="widget-player__last-name">{props.player.last_name}</span>
                    </h4>
                </header>
                {props.convenor ?
                    <div className="widget-player__content">
                        <div className="widget-player__content-inner">
                            <p><b>Team Convenor</b></p>
                            <a href={"tel:" + props.player.phone} className="btn btn-sm btn-block btn-primary-inverse" tabIndex="0">
                                Call: <NumberFormat value={props.player.phone} type="tel" displayType="text" format="(###)-###-####"/>
                            </a>
                        </div>
                    </div>
                : null }
            </div>
        </div>
    );
}
 
export default PlayerSmall