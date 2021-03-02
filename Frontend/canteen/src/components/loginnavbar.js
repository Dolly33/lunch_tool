import React from 'react'; 
import ReactDOM from 'react-dom';
import CanteenLogo from '../Images/CanteenLogo.png';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <div>
        <nav id="navbar">
            <img src={CanteenLogo} classname="logo"/>
            <ul>
                <Link to="/admin">
                     <li>Home</li>
                </Link>
                <Link  to="/admin/students">
                    <li>Students</li>
                </Link>
                <Link  to="/admin/meals">
                    <li>Meals</li>
                </Link>
                <Link>
                <li>Sign Out</li>
                </Link>
            </ul>
        </nav>
        </div>
    )
}
export default Nav;