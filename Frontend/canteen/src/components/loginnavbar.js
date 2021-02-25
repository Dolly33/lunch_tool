import React from 'react'; 
import ReactDOM from 'react-dom';
import CanteenLogo from '../Images/CanteenLogo.png';

function Nav(){
    return(
        <div>
        <nav>
            <img src={CanteenLogo}/>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Sign Out</li>
            </ul>
        </nav>
        </div>
    )
}
export default Nav;