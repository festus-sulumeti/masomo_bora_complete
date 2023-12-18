// ContactsInformation.js
import React from 'react';
import '../../Style/Home/ContactsInformation.css';

const ContactsInformation = () => {
  return (
    <div className="contacts-info-container">
      <h1>Contact Information</h1>
      <div className="contact-list">
        <div className="contact-item">
          <h2 className="contact-name">John Doe</h2>
          <p className="contact-email">john.doe@example.com</p>
          <p className="contact-phone">+1 (123) 456-7890</p>
        </div>
        <div className="contact-item">
          <h2 className="contact-name">Jane Smith</h2>
          <p className="contact-email">jane.smith@example.com</p>
          <p className="contact-phone">+1 (987) 654-3210</p>
        </div>
        {/* Add more contact items as needed */}
      </div>
    </div>
  );
};

export default ContactsInformation;
