import React, { useState, useEffect } from "react";
import "./Teams.css";

// Sample Data (Replace these with actual data from API or state)
const teams = [
  { teamId: 1, name: "Team A" },
  { teamId: 2, name: "Team B" },
];

const players = [
  { playerId: 1, name: "Player 1" },
  { playerId: 2, name: "Player 2" },
];

const performanceReports = [
  {
    playerId: 1,
    playerName: "Player 1",
    recordDate: "2025-04-01",
    height: 180,
    weight: 75,
    age: 25,
    hrv: 70,
    topSpeed: 28,
    caloriesBurned: 500,
    passingAccuracy: 80,
    dribblingSuccessRate: 85,
    shootingAccuracy: 90,
    tacklingSuccessRate: 70,
    crossingAccuracy: 80,
    remarks: "Great performance overall",
  },
  {
    playerId: 2,
    playerName: "Player 2",
    recordDate: "2025-04-02",
    height: 175,
    weight: 72,
    age: 27,
    hrv: 65,
    topSpeed: 26,
    caloriesBurned: 450,
    passingAccuracy: 78,
    dribblingSuccessRate: 80,
    shootingAccuracy: 88,
    tacklingSuccessRate: 75,
    crossingAccuracy: 85,
    remarks: "Needs to improve in tackling",
  },
];

const PerformanceReport = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showCreateGoalModal, setShowCreateGoalModal] = useState(false);

  const onTeamSelect = (event) => {
    const teamId = event.target.value;
    setSelectedTeam(teams.find((team) => team.teamId === parseInt(teamId)));
  };

  const onPlayerSelect = (event) => {
    const playerName = event.target.value;
    setSelectedPlayer(players.find((player) => player.name === playerName));
  };

  const openCreateGoalModal = () => {
    setShowCreateGoalModal(true);
  };

  const closeCreateGoalModal = () => {
    setShowCreateGoalModal(false);
  };

  const evaluateMetric = (metricName, value) => {
    if (metricName === "HRV" && value > 70) return "Good";
    if (metricName === "Top Speed" && value > 25) return "Excellent";
    return "Average";
  };

  const extractRemark = (remarks, metricName) => {
    return remarks.includes(metricName) ? "Remark available" : null;
  };

  return (
    <div className="analytics-section">
      <div className="analytics-header">
        <div className="header-actions">
          <h2>Performance Reports</h2>
          <button className="standards-btn">
            <i className="fas fa-chart-bar"></i>
            View Metric Standards
          </button>
        </div>

        {/* Filters Section */}
        <div className="filters-row">
          <div className="filter-group">
            <label htmlFor="teamSelect">
              <i className="fas fa-users"></i> Select Team
            </label>
            <select id="teamSelect" className="filter-select" onChange={onTeamSelect}>
              <option value="">All Teams</option>
              {teams.map((team) => (
                <option key={team.teamId} value={team.teamId}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="playerSelect">
              <i className="fas fa-user"></i> Select Player
            </label>
            <select
              id="playerSelect"
              className="filter-select"
              onChange={onPlayerSelect}
            >
              <option value="">Choose Player</option>
              {selectedTeam?.teamId
                ? selectedTeam?.teamId &&
                  players
                    .filter((player) => player.teamId === selectedTeam.teamId)
                    .map((player) => (
                      <option key={player.playerId} value={player.name}>
                        {player.name}
                      </option>
                    ))
                : players.map((player) => (
                    <option key={player.playerId} value={player.name}>
                      {player.name}
                    </option>
                  ))}
            </select>
          </div>
        </div>
      </div>

      {/* Reports Display Section */}
      <div className="reports-container">
        {performanceReports.length > 0 ? (
          performanceReports.map((report) => (
            <div key={report.playerId} className="report-card">
              <div className="report-header">
                <div className="report-title">
                  <div className="title-main">
                    <h3>
                      <i className="fas fa-chart-line"></i>
                      Performance Analysis
                    </h3>
                    <div className="player-meta">
                      <span className="player-name">
                        <i className="fas fa-user"></i> {report.playerName}
                      </span>
                      <span className="report-date">
                        <i className="far fa-calendar-alt"></i> {report.recordDate}
                      </span>
                    </div>
                  </div>
                  <div className="report-actions">
                    <button
                      className="action-btn"
                      onClick={() => openCreateGoalModal(report.playerId)}
                    >
                      <i className="fas fa-plus"></i> Add Training
                    </button>
                    <button className="action-btn">
                      <i className="fas fa-bullseye"></i> Add Goal
                    </button>
                  </div>
                </div>

                <div className="physical-stats-grid">
                  <div className="stat-card">
                    <i className="fas fa-ruler-vertical"></i>
                    <div className="stat-info">
                      <span className="stat-value">{report.height}</span>
                      <span className="stat-label">Height (cm)</span>
                    </div>
                  </div>
                  <div className="stat-card">
                    <i className="fas fa-weight"></i>
                    <div className="stat-info">
                      <span className="stat-value">{report.weight}</span>
                      <span className="stat-label">Weight (kg)</span>
                    </div>
                  </div>
                  <div className="stat-card">
                    <i className="fas fa-user"></i>
                    <div className="stat-info">
                      <span className="stat-value">{report.age}</span>
                      <span className="stat-label">Age</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="report-content">
                <div className="metrics-group">
                  <div className="metrics-grid">
                    {/* Physical Performance Metrics */}
                    <div className="metric-category">
                      <h4>
                        <i className="fas fa-running"></i> Physical Performance
                      </h4>
                      <div className="metrics-subgrid">
                        {[
                          { name: "HRV", value: report.hrv, icon: "fa-heartbeat" },
                          { name: "Top Speed", value: report.topSpeed, icon: "fa-tachometer-alt" },
                          { name: "Calories Burned", value: report.caloriesBurned, icon: "fa-fire" },
                        ].map((metric) => (
                          <div className="metric-item" key={metric.name}>
                            <div className="metric-header">
                              <i className={`fas ${metric.icon}`}></i>
                              <span className="metric-label">{metric.name}</span>
                            </div>
                            <div className="metric-value">{metric.value}</div>
                            <div
                              className={`metric-status status-${evaluateMetric(
                                metric.name,
                                metric.value
                              ).toLowerCase()}`}
                            >
                              {evaluateMetric(metric.name, metric.value)}
                            </div>
                            <div
                              className="metric-remark"
                              style={{
                                display: extractRemark(report.remarks, metric.name) ? "block" : "none",
                              }}
                            >
                              <i className="fas fa-comment"></i>
                              {extractRemark(report.remarks, metric.name)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Skills Metrics */}
                    <div className="metric-category">
                      <h4>
                        <i className="fas fa-futbol"></i> Technical Skills
                      </h4>
                      <div className="metrics-subgrid">
                        {[
                          { name: "Passing Accuracy", value: report.passingAccuracy, icon: "fa-bullseye" },
                          { name: "Dribbling Success Rate", value: report.dribblingSuccessRate, icon: "fa-running" },
                          { name: "Shooting Accuracy", value: report.shootingAccuracy, icon: "fa-crosshairs" },
                          { name: "Tackling Success Rate", value: report.tacklingSuccessRate, icon: "fa-shield-alt" },
                          { name: "Crossing Accuracy", value: report.crossingAccuracy, icon: "fa-crosshairs" },
                        ].map((metric) => (
                          <div className="metric-item" key={metric.name}>
                            <div className="metric-header">
                              <i className={`fas ${metric.icon}`}></i>
                              <span className="metric-label">{metric.name}</span>
                            </div>
                            <div className="metric-value">{metric.value}</div>
                            <div
                              className={`metric-status status-${evaluateMetric(
                                metric.name,
                                metric.value
                              ).toLowerCase()}`}
                            >
                              {evaluateMetric(metric.name, metric.value)}
                            </div>
                            <div
                              className="metric-remark"
                              style={{
                                display: extractRemark(report.remarks, metric.name) ? "block" : "none",
                              }}
                            >
                              <i className="fas fa-comment"></i>
                              {extractRemark(report.remarks, metric.name)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-reports">
            <i className="fas fa-chart-line fa-3x"></i>
            <h3>No Performance Reports Available</h3>
            <p>Select a player to view their performance analytics</p>
          </div>
        )}
      </div>

      {/* Modal for Creating Goal */}
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

            {/* Goal Form */}
            <div className="modal-content">
              <form className="goal-form">
                <div className="form-group">
                  <label htmlFor="playerId">
                    <i className="fas fa-user"></i> Select Player
                  </label>
                  <select id="playerId" className="form-control">
                    <option value="">Choose a player</option>
                    {players.map((player) => (
                      <option key={player.playerId} value={player.playerId}>
                        {player.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="goalType">
                    <i className="fas fa-flag"></i> Goal Type
                  </label>
                  <select id="goalType" className="form-control">
                    <option value="">Select goal type</option>
                    <option value="Performance">Performance</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Skill">Skill</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="goalDescription">
                    <i className="fas fa-align-left"></i> Description
                  </label>
                  <textarea
                    id="goalDescription"
                    className="form-control"
                    placeholder="Describe the goal objective..."
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="targetValue">
                    <i className="fas fa-bullseye"></i> Target Value
                  </label>
                  <input
                    type="number"
                    id="targetValue"
                    className="form-control"
                    placeholder="Enter target value"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="deadline">
                    <i className="fas fa-calendar-alt"></i> Deadline
                  </label>
                  <input type="date" id="deadline" className="form-control" />
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={closeCreateGoalModal}>
                    <i className="fas fa-times"></i> Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    <i className="fas fa-check"></i> Create Goal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceReport;
