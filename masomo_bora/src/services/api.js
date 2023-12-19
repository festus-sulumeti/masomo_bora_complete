//Masomo_bora/src/services/api.js

const API_URL =  "http://127.0.0.1:8000/api"; 
const api = {
  async createTeam(name) {
    const response = await fetch(`${API_URL}/teams/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      throw new Error("Error creating team");
    }

    return response.json();
  },

  async createTeamMember(teamId, name, position) {
    const response = await fetch(`${API_URL}/team-members/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ team_id: teamId, name, position }),
    });

    if (!response.ok) {
      throw new Error("Error creating team member");
    }

    return response.json();
  },
};

export default api;