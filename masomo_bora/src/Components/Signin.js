import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Signin.css';

const Signin = () => {
  const navigate = useNavigate();

  // State to manage email and password inputs
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  // Handle login logic
  const handleSignin = () => {
    // Simulate checking if the entered credentials are correct
    if (credentials.email === 'admin' && credentials.password === '123') {
      // Redirect the user to the Dashboard after successful login
      navigate('/Home');
    } else {
      // Handle incorrect credentials (show an error message or perform other actions)
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="feature-item">
      <div className="container">
        <div className="form-box">
          <h1 id="title">Log In</h1>
          <p className='Sul'>Welcome to Masomo Bora! Log in the learning journey.</p>
          <form>
            <div className="input-group">
              <div className="input-field" id="nameField">
                <i className="uil uil-user"></i>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-field">
                <i className="uil uil-padlock"></i>
                <input
                  type="password"
                  placeholder="user password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="btn-field">
              <button type="button" id="SignupBtn" onClick={handleSignin}>
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
