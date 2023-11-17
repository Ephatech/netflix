import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }else
            handleShow(false);
        })

            // return () => {
            //     window.removeEventListener("scroll");
            // };
    },[]);


    return (
        <nav className={`nav ${show && "nav-black"}`}>
            <img 
            className='logo' 
            src='https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png'
            alt='Netflix'/>
           
        </nav>
    );
}

export default Header;
