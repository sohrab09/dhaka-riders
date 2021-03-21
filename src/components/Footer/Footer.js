import React from 'react';
import './Footer.css'

const getCurrentDate = () => {
    const year = new Date().getFullYear();
    return year;
}
const Footer = () => {
    return (
        <div className="container App footer mt-3 text-success">
            <p>© All rights reserved by Dhaka Riders. {getCurrentDate()}</p>
        </div>
    );
};

export default Footer;