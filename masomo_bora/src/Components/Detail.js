// Detail.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Detail.css';

const Detail = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <h2>Welcome to Masomo Bora</h2>
        <p >Embark on a transformative learning experience with Masomo Bora!</p>
        <div className="actions">
          <Link to="/Signin" className="link login-link">Login</Link>
          {/* <Link to="/Signup" className="link signup-link">Create account</Link> */}
        </div>
        <br />
       
        <br />
        
        <p className="Sul">from Sulumeti</p>
      </div>
    </div>
  );
}

export default Detail;
