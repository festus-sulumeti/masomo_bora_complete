// ManageTeam.js
import React, { useState } from 'react';
import '../../Style/Home/ManageTeam.css';

// Sample data for team members
const sampleTeamMembers = [
  { id: 1, name: 'John Doe', position: 'Manager' },
  { id: 2, name: 'Jane Smith', position: 'Developer' },
  { id: 3, name: 'Bob Johnson', position: 'Designer' },
];

const ManageTeam = () => {
  // State for team members
  const [teamMembers, setTeamMembers] = useState(sampleTeamMembers);
  // State for form inputs
  const [newMember, setNewMember] = useState({ name: '', position: '' });

  // Function to remove a team member
  const removeTeamMember = (id) => {
    setTeamMembers((prevMembers) => prevMembers.filter((member) => member.id !== id));
  };

  // Function to add a new team member
  const addTeamMember = () => {
    if (newMember.name && newMember.position) {
      setTeamMembers((prevMembers) => [
        ...prevMembers,
        { id: prevMembers.length + 1, ...newMember },
      ]);
      setNewMember({ name: '', position: '' }); // Clear the form inputs
    }
  };

  return (
    <div className="manage-team-container">
      <h1>Manage Team</h1>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            {member.name} - {member.position}
            <button onClick={() => removeTeamMember(member.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Add a form to add new team members */}
      <div>
        <h2>Add New Team Member</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />

        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          value={newMember.position}
          onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
        />

        <button onClick={addTeamMember}>Add Member</button>
      </div>
    </div>
  );
};

export default ManageTeam;
