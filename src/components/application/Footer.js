import React from 'react';

function Footer (props) {
    return ( 
        <footer className="container d-flex py-2 border-top">
            <p>
                Burlington Old Timers Soccer Club &copy; 1985-{(new Date().getFullYear())} | 
                Created and Managed by: <a href="http://t15digitalmedia.ca/" target="_blank" rel="noopener noreferrer"> T15 Digital Media</a>
            </p>
            <div className="ml-auto">
                <a className="d-block" href="#">Terms of use</a>
                <a className="d-block" href="#">Privacy policy</a>
            </div>
        </footer>
    );
}
 
export default Footer;