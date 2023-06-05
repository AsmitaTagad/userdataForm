import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState(' ');
  const [number, setNumber] = useState('');

  const [getData, setgetdata] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
  );

  console.log(getData);
  function handleFname(e) {
    setFname(e.target.value);
  }
  function handleLname(e) {
    setLname(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = {
      fname,
      lname,
      email,
      number,
    };
    localStorage.setItem('user', JSON.stringify([...getData, newData]));
  }

  return (
    <div className="container">
      <div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label>First name</label>
              <br />
              <input
                type="text"
                placeholder="Enter first name"
                onChange={handleFname}
              />
            </div>
            <div className="input">
              <label>Last name</label>
              <br />
              <input
                type="text"
                placeholder="Enter Last Name"
                onChange={handleLname}
              />
            </div>
            <div className="input">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter email address"
                onChange={handleEmail}
              />
            </div>
            <div className="input">
              <label>Number</label>
              <br />
              <input
                type="number"
                placeholder="Enter phone number"
                onChange={handleNumber}
              />
            </div>

            <div className="btn">
              <button type="onSubmit">Submit</button>
            </div>
          </form>
        </div>
        <div className="table">
          <table className="head">
            <th>Name</th>
            <th>Email</th>
            <th>Mob.Number</th>
            {getData.map((item) => {
              return (
                <tr className="data">
                  <td>
                    {item.fname} {item.lname}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
