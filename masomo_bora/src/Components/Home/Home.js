// Home.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet
import '../../Style/Home/Home.css';

const Home = () => {

  return (
    <div className="feature-item">
      <div className="containering">
        <div className="sidebar">
          <ul>
            <li><Link to="/Home/General">General</Link></li>
            <li><Link to="/Home/ManageTeam">Manage Team</Link></li>
            <li><Link to="/Home/ContactsInformation">Contacts Information</Link></li>
            <li><Link to="/Home/InvoicesBalances">Invoices Balances</Link></li>
            <li><Link to="/Home/StudentForm">StudentForm</Link></li>
            <li><Link to="/Home/Logout">Logout</Link></li>
          </ul>
        </div>
        <div className="dashboard-box">
          <div className="main-content">
            <h1 id="title">Admin dashboard</h1>
            <div className="performance-summary">
              <h2>s Performance Summary</h2>
             
            </div>

            {/* Outlet to render nested routes */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;