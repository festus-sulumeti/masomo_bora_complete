// General.js
import React from 'react';
import { Link } from 'react-router-dom';
// Uncomment the line below if you want to use StudentDetails
// import StudentDetails from './StudentDetails';

const General = () => {
  // Simulated data, replace it with actual data fetching logic
  const childPerformanceData = {
    subjects: [
      { name: 'Mathematics', grade: 'A' },
      { name: 'English', grade: 'B' },
      { name: 'Kiswahili', grade: 'A-' },
    ],
    attendance: '95%',
    behavior: 'Excellent',
  };

  return (
    <div className="general-container">
      <h1>General</h1>
      {/* Uncomment the line below if you want to use StudentDetails */}
      {/* <StudentDetails studentData={childPerformanceData} /> */}
        <ul>
          {childPerformanceData.subjects.map((subject, index) => (
            <li key={index}>
              <strong>{subject.name}:</strong> {subject.grade}
            </li>
          ))}
        </ul>
      {/* Additional Content */}
      <div className="additional-content">
        <p>This is some additional information about the student or anything else you want to include.</p>
        {/* Add more elements as needed */}
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default General;
