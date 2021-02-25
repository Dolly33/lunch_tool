import React from 'react'; 
import ReactDOM from 'react-dom';
import CanteenLogo from '../Images/CanteenLogo.png';

function OutNav(){
    return(
        <div>
        <nav>
        <img src={CanteenLogo}/>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Order</li>
                <li>Sign Out</li>
            </ul>
        </nav>
        </div>
    )
}

export default OutNav;