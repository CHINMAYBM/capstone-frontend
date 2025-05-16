import React, { useState } from 'react';
import './Teams.css'; // Assuming you have a corresponding CSS file

const Teams = () => {
  const [selectedTab, setSelectedTab] = useState('teams');
  const [teams, setTeams] = useState([]);
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const [createTeamForm, setCreateTeamForm] = useState({
    teamName: '',
    sportCategory: '',
    playerIds: [],
  });
  const [unassignedPlayers, setUnassignedPlayers] = useState([
    { playerId: 1, name: 'Player 1' },
    { playerId: 2, name: 'Player 2' },
    { playerId: 3, name: 'Player 3' },
  ]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateTeamForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle players selection
  const handlePlayersChange = (e) => {
    const selectedPlayers = Array.from(e.target.selectedOptions, (option) => option.value);
    setCreateTeamForm((prevForm) => ({
      ...prevForm,
      playerIds: selectedPlayers,
    }));
  };

  // Open create team modal
  const openCreateTeamModal = () => {
    setShowCreateTeamModal(true);
  };

  // Close create team modal
  const cancelCreateTeam = () => {
    setShowCreateTeamModal(false);
    setCreateTeamForm({
      teamName: '',
      sportCategory: '',
      playerIds: [],
    });
  };

  // Submit create team form
  const createTeam = (e) => {
    e.preventDefault();
    // Logic to create a new team
    const newTeam = {
      teamId: teams.length + 1,
      name: createTeamForm.teamName,
      sportCategory: createTeamForm.sportCategory,
      playerIds: createTeamForm.playerIds,
    };
    setTeams((prevTeams) => [...prevTeams, newTeam]);
    cancelCreateTeam();
  };

  // View team details (for simplicity, we're just logging the team)
  const viewTeamDetails = (team) => {
    console.log('Viewing team:', team);
  };

  // Delete team
  const deleteTeam = (teamId) => {
    setTeams((prevTeams) => prevTeams.filter((team) => team.teamId !== teamId));
  };

  return (
    <div className="teams-management">
      {selectedTab === 'teams' && (
        <>
          <div className="teams-header">
            <div className="header-content">
              <h2><i className="fas fa-users"></i> Team Management</h2>
              <p className="header-subtitle">Manage your teams and players</p>
            </div>
            <button className="create-team-btn" onClick={openCreateTeamModal}>
              <i className="fas fa-plus-circle"></i> Create New Team
            </button>
          </div>

          {teams.length === 0 ? (
            <div className="no-teams">
              <i className="fas fa-users"></i>
              <h3>No Teams Available</h3>
              <p>Create a new team to get started</p>
              <button className="create-team-btn" onClick={openCreateTeamModal}>
                <i className="fas fa-plus"></i> Create Team
              </button>
            </div>
          ) : (
            <div className="teams-container">
              {teams.map((team) => (
                <div className="team-card" key={team.teamId}>
                  <div className="team-card-header">
                    <div className="team-info">
                      <h3><i className="fas fa-users"></i> {team.name}</h3>
                      <span className="sport-category">
                        <i className="fas fa-running"></i> {team.sportCategory}
                      </span>
                    </div>
                    <div className={`team-status ${team.playerIds.length > 0 ? 'active' : ''}`}>
                      {team.playerIds.length > 0 ? 'Active' : 'No Players'}
                    </div>
                  </div>

                  <div className="team-card-body">
                    <div className="team-metrics">
                      <div className="metric">
                        <i className="fas fa-user-friends"></i>
                        <div className="metric-info">
                          <span className="metric-value">{team.playerIds.length || 0}</span>
                          <span className="metric-label">Players</span>
                        </div>
                      </div>
                    </div>

                    <div className="team-actions">
                      <button className="action-btn view-btn" onClick={() => viewTeamDetails(team)}>
                        <i className="fas fa-eye"></i> View Players
                      </button>
                      <button className="action-btn delete-btn" onClick={() => deleteTeam(team.teamId)}>
                        <i className="fas fa-trash"></i> Delete Team
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Create Team Form Modal */}
          {showCreateTeamModal && (
            <div className="modal-overlay">
              <div className="create-team-modal">
                <div className="modal-header">
                  <h2>Create New Team</h2>
                  <button className="close-btn" onClick={cancelCreateTeam}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                <form onSubmit={createTeam}>
                  <div className="form-group">
                    <label htmlFor="teamName">Team Name</label>
                    <div className="input-wrapper">
                      <i className="fas fa-users"></i>
                      <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={createTeamForm.teamName}
                        onChange={handleInputChange}
                        placeholder="Enter team name"
                      />
                    </div>
                    {!createTeamForm.teamName && <span className="error-message">Team name is required</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="sportCategory">Sport Category</label>
                    <div className="input-wrapper">
                      <i className="fas fa-basketball-ball"></i>
                      <select
                        id="sportCategory"
                        name="sportCategory"
                        value={createTeamForm.sportCategory}
                        onChange={handleInputChange}
                      >
                        <option value="">Select sport category</option>
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Hockey">Hockey</option>
                      </select>
                    </div>
                    {!createTeamForm.sportCategory && <span className="error-message">Sport category is required</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="players">Select Players</label>
                    <div className="players-select-wrapper">
                      <div className="select-info">
                        <i className="fas fa-user-plus"></i>
                        <span>{createTeamForm.playerIds.length || 0} players selected</span>
                      </div>
                      <select
                        multiple
                        id="players"
                        name="playerIds"
                        value={createTeamForm.playerIds}
                        onChange={handlePlayersChange}
                        className="players-select"
                      >
                        {unassignedPlayers.map((player) => (
                          <option key={player.playerId} value={player.playerId}>
                            {player.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <span className="helper-text">Hold Ctrl/Cmd to select multiple players</span>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn btn-secondary" onClick={cancelCreateTeam}>
                      <i className="fas fa-times"></i> Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!createTeamForm.teamName || !createTeamForm.sportCategory || createTeamForm.playerIds.length === 0}
                    >
                      <i className="fas fa-check"></i> Create Team
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Teams;
