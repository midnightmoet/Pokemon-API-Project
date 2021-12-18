// import {useContext } from 'react';
// import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            Pokemon API  
            <div className="navbarLogin">
                <button className="navbarLoginBtn">Login</button>
                <button className="navbarRegisterBtn">Register</button>
            </div>          
        </div>
        
    );
}