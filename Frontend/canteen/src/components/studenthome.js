import React from 'react';
import '../App.css';
import CanteenLogo2 from '../Images/CanteenLogo2.png';

function Studenthome() {
    return (
      <div>
        <header>
              <img src={CanteenLogo2} classname="logo" alt="logo"/>
              <h1 id="headertext">Lunch Order System</h1>
              <h1 id="subtext">Kindly Order Your Meals Before 10am Today</h1>
        </header>
        <div id="foodtable">
          <div id="foodorder">
            <h2>Order Your Next Lunch</h2>

            <form id="studentorder">
                <label for="fname">ID Number</label>
                <input type="text" className="meallist"/>

                <label for="fname">FirstName</label>
                <input type="text" className="meallist"/>

                <label for="lname">LastName</label>
                <input type="text" className="meallist"/>
                
                <label for="meal">Day</label>
                <select className="daymeal">
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Friday</option>
                  <option value="friday">Friday</option>
                </select>

                <label for="meal">Meal</label>
                <select className="daymeal">
                  <option value="meal1">Fufu</option>
                  <option value="meal2">Waakye</option>
                  <option value="meal3">Yam</option>
                </select>

                <label for="comments">Comments</label>
                <input type="text" className="meallist"/>

                <button type="submit" >Submit</button>
            </form>

          </div>
          <div id="foodlist">
          <h2>Your Recent Orders</h2>

          <table  className="studenttable">
        <tr>
          <th>ID NUMBER</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>DAY</th> 
          <th>FOOD ORDERED</th>
          <th>COMMENTS</th>
        </tr>
        <tr>
          <td>100005</td>
          <td>John</td>
          <td>Doe</td>
          <td>Monday</td>
          <td>Waakye</td>
          <td>No Comments</td>
        </tr>
        </table>
          </div>
        </div>
      </div>
    )
}
export default Studenthome;