import React from 'react';
import '../App.css';

function Students() {
  return (
    <div>
      <h1 id="studenttitle">Students</h1>

      <table>
        <tr>
          <th>ID NUMBER</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th> 
          <th>AGE</th>
          <th>USERNAME</th>
          <th>PASSWORD</th>
        </tr>
        <tr>
          <td>100005</td>
          <td>John</td>
          <td>Doe</td>
          <td>13</td>
          <td>username</td>
          <td>password</td>
        </tr>
        </table>
    </div>
  );
}

export default Students;