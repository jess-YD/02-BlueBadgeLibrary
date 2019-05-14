import React from 'react';

import './Navbar.css';
import piePic from '../../assets/download.jpeg'; //name of the pic under your assets folder
import Logout from './Logout/Logout';


const Navbar = (props) => {
    return(
        <nav>
            <img src={piePic} alt="pie"/>
            <Logout logout={props.logout}/>
        </nav>
    )
}

export default Navbar;