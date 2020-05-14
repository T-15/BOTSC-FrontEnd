import React from 'react';
import './css/App.css';
import Header from './components/application/header/Header';
import Footer from './components/application/footer/Footer';
import { useAuth0 } from "./react-auth0-spa";
import PublicRoutes from './Routes';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return ( 
    <div className="site-wrapper clearfix">
      <div className="site-overlay"></div>
        <Header />
        <PublicRoutes />
        <Footer />
    </div>
  );
}
 
export default App;
