import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import './css/Custom.scss';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    audience={config.audience}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);
