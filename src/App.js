import React from 'react';
import './css/App.css';
import Header from './components/application/header/Header';
import Footer from './components/application/footer/Footer';
import { useAuth0 } from "./react-auth0-spa";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <PublicRoutes />
        <Footer />
    </div>
  );
}
 
export default App;
