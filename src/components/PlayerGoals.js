import React from 'react';
import './PlayerGoals.css';

const PlayerGoals = ({ selectedTab, playerGoals = [] }) => {
//   if (selectedTab !== 'goals') {
//     return null; // Don't render if 'goals' tab is not selected
//   }

  return (
    <div className="goals-section">
      <div className="section-header">
        <div className="header-content">
          <h2><i className="fas fa-trophy"></i> Player Goals</h2>
        </div>
      </div>

      <div className="goals-content">
        {playerGoals.length > 0 ? (
          <div className="goals-grid">
            {playerGoals.map((goal, index) => (
              <div
                key={index}
                className={`goal-card ${goal.status === 'Achieved' ? 'achieved' : ''}`}
              >
                <div className={`goal-status-badge ${goal.status === 'Achieved' ? 'achieved' : ''}`}>
                  <i className={`fas ${goal.status === 'Achieved' ? 'fa-check' : 'fa-hourglass-half'}`} />
                  {goal.status}
                </div>

                <div className="goal-type">
                  <i className="fas fa-bullseye"></i>
                  <h3>{goal.goalType}</h3>
                </div>

                <div className="goal-description">
                  <p>{goal.goalDescription}</p>
                </div>

                <div className="goal-progress">
                  <div className="progress-info">
                    <span>Progress</span>
                    <span>{goal.achievedValue} / {goal.targetValue}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${(goal.achievedValue / goal.targetValue) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="goal-footer">
                  <div className="deadline">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Deadline: {new Date(goal.deadline).toLocaleDateString()}</span>
                  </div>
                  {goal.feedbackRemarks && (
                    <div className="feedback">
                      <i className="fas fa-comment-alt"></i>
                      <span>{goal.feedbackRemarks}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-data">
            <i className="fas fa-trophy"></i>
            <p>No goals set yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerGoals;
