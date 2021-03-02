import React from 'react';
import '../App.css';
import Nav from './loginnavbar';

function Dashboard() {
  return (
    <div>
      <Nav />
      <h1 id="foodtitle">Ordered Food</h1>

      <table className="admintable">
        <tr>
          <th>DAYS</th>
          <th>MEAL 1</th> 
          <th>MEAL 2</th>
          <th>MEAL 3</th>
          <th>TOTAL ORDERED</th>
        </tr>
        <tr>
          <td>Monday</td>
          <td>50</td>
          <td>60</td>
          <td>70</td>
          <td>180</td>
        </tr>
        <tr>
        <td>Tuesday</td>
          <td>50</td>
          <td>60</td>
          <td>70</td>
          <td>180</td>
        </tr>
      </table>

    <h1 id="studenttitle">Students</h1>

      <table className="admintable">
        <tr>
          <th>ID NUMBER</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th> 
          <th>FOOD ORDERED</th>
          <th>Comments</th>
        </tr>
        <tr>
          <td>100005</td>
          <td>John</td>
          <td>Doe</td>
          <td>Waakye</td>
          <td>No Comments</td>
        </tr>
        </table>

    </div>
  );
}

export default Dashboard;
