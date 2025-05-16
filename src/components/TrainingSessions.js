import React from 'react';
import './TrainingSessions.css';

const TrainingSessions = ({ selectedTab }) => {
  // Sample data for training sessions
  const trainingSessions = [
    {
      sessionId: 'TS001',
      coachId: 'C001',
      date: '2025-06-15',
      duration: 60,
      playernames: ['John Doe', 'Jane Smith', 'Emily Davis'],
    },
    {
      sessionId: 'TS002',
      coachId: 'C002',
      date: '2025-06-16',
      duration: 45,
      playernames: ['Mark Black', 'Sara White'],
    },
  ];

  // if (selectedTab !== 'training') {
  //   return null; // Don't render if 'training' tab is not selected
  // }

  return (
    <div className="training-section">
      <div className="section-header">
        <div className="header-content">
          <h2>
            <i className="fas fa-dumbbell"></i> Training Sessions
          </h2>
          <p className="section-subtitle">View all your scheduled and completed training sessions</p>
        </div>
      </div>

      <div className="training-content">
        {trainingSessions && trainingSessions.length > 0 ? (
          <div className="training-grid">
            {trainingSessions.map((session, index) => (
              <div key={index} className="training-card">
                <div className="card-header">
                  <div className="session-badge">
                    <i className="fas fa-clipboard-list"></i>
                    <span>Session #{session.sessionId || 'N/A'}</span>
                  </div>
                  <div className="coach-badge">
                    <i className="fas fa-user-tie"></i>
                    <span>Coach #{session.coachId || 'N/A'}</span>
                  </div>
                </div>

                <div className="card-body">
                  <div className="session-detail">
                    <i className="fas fa-calendar"></i>
                    <div className="detail-content">
                      <label>Date</label>
                      <span>{session.date || 'N/A'}</span>
                    </div>
                  </div>

                  <div className="session-detail">
                    <i className="fas fa-clock"></i>
                    <div className="detail-content">
                      <label>Duration</label>
                      <span>{session.duration || 'N/A'} minutes</span>
                    </div>
                  </div>

                  <div className="session-detail players-section">
                    <i className="fas fa-users"></i>
                    <div className="detail-content">
                      <label>Participants</label>
                      <div className="players-chips">
                        {session.playernames && session.playernames.length > 0 ? (
                          session.playernames.map((player, idx) => (
                            <div key={idx} className="player-chip">
                              {player}
                            </div>
                          ))
                        ) : (
                          <div className="no-players">No players assigned</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-content">
              <i className="fas fa-dumbbell"></i>
              <h3>No Training Sessions</h3>
              <p>There are no training sessions recorded yet.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingSessions;
