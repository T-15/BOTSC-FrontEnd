import React from 'react';
import { Link } from '@reach/router';
import Ghost from '../../images/defaults/icon-ghost.svg';

const Lost = () => {
    return ( 
        <div className="site-content">
            <div className="container">
                <div class="error-404">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <figure class="error-404__figure">
                                <img src={Ghost} alt=""/>
                            </figure>

                            <header class="error__header">
                                <h2 class="error__title">OOOOPS! Page not Found</h2>
                                <h3 class="error__subtitle">Seems that we have a problem!</h3>
                            </header>

                            <div class="error__description">
                                The page you are looking for has been moved or doesn’t exist anymore, if you like you can return to our homepage. If the problem persists, please send us an email to <a href="mailto:info@alchemists.com">info@alchemists.com</a>
                            </div>
                            
                            <footer class="error__cta">
                                <Link to="/" className="btn btn-primary">Return To Home</Link>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Lost;