import React from 'react';
import '../App.css';
import Nav from './loginnavbar';

function Food() {
  return (
    <div>
      <Nav/>
      <h1 id="foodtitle">Meals</h1>

      <table className="admintable">
        <tr>
          <th>DAYS</th>
          <th>MEAL 1</th> 
          <th>MEAL 2</th>
          <th>MEAL 3</th>
        </tr>
        <tr>
          <td>Monday</td>
          <td>Waakye</td>
          <td>Fufu</td>
          <td>Yam</td>
        </tr>
        <tr>
        <td>Tuesday</td>
          <td>Waakye</td>
          <td>Fufu</td>
          <td>Yam</td>
        </tr>
      </table>
    </div>
  );
}

export default Food;