import React, { useState } from 'react';
import './Teams.css';

const GoalManagement = () => {
  const [goals, setGoals] = useState([]); // This would ideally be fetched from an API
  const [showCreateGoalModal, setShowCreateGoalModal] = useState(false);
  const [showEditGoalModal, setShowEditGoalModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [goalForm, setGoalForm] = useState({
    playerId: '',
    goalType: '',
    goalDescription: '',
    targetValue: '',
    deadline: '',
    achievedValue: '',
    status: 'In Progress',
    feedbackRemarks: '',
  });

  const players = [
    { playerId: 1, name: 'Player 1' },
    { playerId: 2, name: 'Player 2' },
  ]; // Example player data

  const getProgressPercentage = (goal) => {
    return (goal.achievedValue / goal.targetValue) * 100;
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      case 'Need Attention':
        return 'status-at-risk';
      default:
        return '';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return 'fa-check-circle';
      case 'In Progress':
        return 'fa-clock';
      case 'Need Attention':
        return 'fa-exclamation-circle';
      default:
        return '';
    }
  };

  const openCreateGoalModal = () => {
    setShowCreateGoalModal(true);
  };

  const closeCreateGoalModal = () => {
    setShowCreateGoalModal(false);
  };

  const openEditGoalModal = (goal) => {
    setSelectedGoal(goal);
    setGoalForm({
      ...goal,
    });
    setShowEditGoalModal(true);
  };

  const closeEditGoalModal = () => {
    setShowEditGoalModal(false);
  };

  const handleGoalFormChange = (e) => {
    const { name, value } = e.target;
    setGoalForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCreateGoal = (e) => {
    e.preventDefault();
    // Logic to create goal
    setGoals([...goals, goalForm]);
    closeCreateGoalModal();
  };

  const handleUpdateGoal = (e) => {
    e.preventDefault();
    const updatedGoals = goals.map((goal) =>
      goal.goalId === selectedGoal.goalId ? goalForm : goal
    );
    setGoals(updatedGoals);
    closeEditGoalModal();
  };

  const handleDeleteGoal = (goalId) => {
    setGoals(goals.filter((goal) => goal.goalId !== goalId));
  };

  return (
    <div className="goals-section">
      <div className="goals-header">
        <div className="goals-header-content">
          <div className="header-left">
            <h2>
              <i className="fas fa-bullseye"></i> Goals Management
            </h2>
            <p className="header-subtitle">Track and manage player performance goals</p>
          </div>
          <button className="create-goal-btn" onClick={openCreateGoalModal}>
            <div className="btn-content">
              <i className="fas fa-plus-circle"></i>
              <span>Create New Goal</span>
            </div>
            <div className="btn-hover-effect"></div>
          </button>
        </div>

        <div className="goals-stats">
          <div className="goal-stat-item">
            <i className="fas fa-check-circle goal-stat-icon"></i>
            <div className="goal-stat-info">
              <span className="goal-stat-value">{goals.filter(goal => goal.status === 'Completed').length}</span>
              <span className="goal-stat-label">Completed Goals</span>
            </div>
          </div>

          <div className="goal-stat-item">
            <i className="fas fa-clock goal-stat-icon"></i>
            <div className="goal-stat-info">
              <span className="goal-stat-value">{goals.filter(goal => goal.status === 'In Progress').length}</span>
              <span className="goal-stat-label">In Progress</span>
            </div>
          </div>

          <div className="goal-stat-item">
            <i className="fas fa-exclamation-circle goal-stat-icon"></i>
            <div className="goal-stat-info">
              <span className="goal-stat-value">{goals.filter(goal => goal.status === 'Need Attention').length}</span>
              <span className="goal-stat-label">At Risk</span>
            </div>
          </div>
        </div>
      </div>

      <div className="goals-grid">
        {goals.map((goal) => (
          <div key={goal.goalId} className="goal-card">
            <div className={`goal-header ${getStatusClass(goal.status)}`}>
              <h3 className="goal-title">
                <i className="fas fa-target"></i>
                {goal.goalType}
              </h3>
              <div className="goal-meta">
                <span className="goal-meta-item">
                  <i className="fas fa-user"></i>
                  {goal.playerId} {/* Replace with player name */}
                </span>
                <span className="goal-meta-item">
                  <i className="fas fa-calendar"></i>
                  {goal.deadline}
                </span>
              </div>
            </div>

            <div className="goal-body">
              <p className="goal-description">{goal.goalDescription}</p>

              <div className="goal-progress">
                <div className="progress-info">
                  <span className="progress-percentage">
                    {getProgressPercentage(goal)}%
                  </span>
                  <span className="progress-values">
                    {goal.achievedValue} / {goal.targetValue}
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${getProgressPercentage(goal)}%` }}
                  ></div>
                </div>
              </div>

              <div className={`goal-status ${getStatusClass(goal.status)}`}>
                <i className={`fas ${getStatusIcon(goal.status)}`}></i>
                {goal.status}
              </div>
            </div>

            <div className="goal-actions">
              <button className="goal-btn edit-btn" onClick={() => openEditGoalModal(goal)}>
                <i className="fas fa-edit"></i>
                Edit Goal
              </button>
              <button className="goal-btn delete-btn" onClick={() => handleDeleteGoal(goal.goalId)}>
                <i className="fas fa-trash"></i>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Goal Modal */}
      {showCreateGoalModal && (
        <div className="modal-overlay">
          <div className="create-goal-modal">
            <div className="modal-header">
              <h2>
                <i className="fas fa-bullseye"></i> Create New Goal
              </h2>
              <button className="close-btn" onClick={closeCreateGoalModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="modal-content">
              <form onSubmit={handleCreateGoal} className="goal-form">
                <div className="form-group">
                  <label>
                    <i className="fas fa-user"></i> Select Player
                  </label>
                  <select
                    name="playerId"
                    value={goalForm.playerId}
                    onChange={handleGoalFormChange}
                    className="form-control"
                  >
                    <option value="">Choose a player</option>
                    {players.map((player) => (
                      <option key={player.playerId} value={player.playerId}>
                        {player.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    <i className="fas fa-flag"></i> Goal Type
                  </label>
                  <select
                    name="goalType"
                    value={goalForm.goalType}
                    onChange={handleGoalFormChange}
                    className="form-control"
                  >
                    <option value="">Select goal type</option>
                    <option value="Performance">Performance</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Skill">Skill</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    <i className="fas fa-align-left"></i> Description
                  </label>
                  <textarea
                    name="goalDescription"
                    value={goalForm.goalDescription}
                    onChange={handleGoalFormChange}
                    className="form-control"
                    placeholder="Describe the goal objective..."
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>
                    <i className="fas fa-bullseye"></i> Target Value
                  </label>
                  <input
                    type="number"
                    name="targetValue"
                    value={goalForm.targetValue}
                    onChange={handleGoalFormChange}
                    className="form-control"
                    placeholder="Enter target value"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <i className="fas fa-calendar-alt"></i> Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    value={goalForm.deadline}
                    onChange={handleGoalFormChange}
                    className="form-control"
                  />
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={closeCreateGoalModal}>
                    <i className="fas fa-times"></i> Cancel
                  </button>
                  <button type="submit" className="btn-primary" disabled={!goalForm.playerId || !goalForm.goalType || !goalForm.goalDescription || !goalForm.targetValue || !goalForm.deadline}>
                    <i className="fas fa-check"></i> Create Goal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Goal Modal */}
      {showEditGoalModal && (
        <div className="modal-overlay">
          <div className="create-goal-modal">
            <div className="modal-header">
              <h2>Update Goal</h2>
              <button className="close-btn" onClick={closeEditGoalModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <form onSubmit={handleUpdateGoal}>
              <div className="form-group">
                <label htmlFor="achievedValue">Achieved Value</label>
                <input
                  type="number"
                  id="achievedValue"
                  name="achievedValue"
                  value={goalForm.achievedValue}
                  onChange={handleGoalFormChange}
                  className="form-control"
                  placeholder="Enter achieved value"
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={goalForm.status}
                  onChange={handleGoalFormChange}
                  className="form-control"
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Need Attention">Need Attention</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="feedbackRemarks">Feedback/Remarks</label>
                <textarea
                  id="feedbackRemarks"
                  name="feedbackRemarks"
                  value={goalForm.feedbackRemarks}
                  onChange={handleGoalFormChange}
                  className="form-control"
                  placeholder="Enter feedback or remarks"
                />
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={closeEditGoalModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={!goalForm.achievedValue || !goalForm.status}>
                  Update Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalManagement;
