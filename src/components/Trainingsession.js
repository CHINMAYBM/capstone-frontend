import React, { useState, useEffect } from 'react';
import './Teams.css';

const TrainingSession = () => {
  const [selectedTab, setSelectedTab] = useState('training');
  const [trainingSessions, setTrainingSessions] = useState([]);
  const [players, setPlayers] = useState([]);
  const [sessionPlayers, setSessionPlayers] = useState([]);
  const [showCreateSessionModal, setShowCreateSessionModal] = useState(false);
  const [showSessionPlayersModal, setShowSessionPlayersModal] = useState(false);
  const [showWeatherCheckModal, setShowWeatherCheckModal] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [createSessionForm, setCreateSessionForm] = useState({
    date: '',
    duration: '',
    playerIds: [],
    trainingFocus: '',
  });

  const getSessionStatus = (session) => {
    // Return status logic based on session data
    return 'Active';
  };

  const getPlayerCount = (playerIds) => {
    return playerIds.length;
  };

  const getTeamName = (teamId) => {
    return 'Team Name'; // Example, replace with actual logic
  };

  const openCreateSessionModal = () => {
    setShowCreateSessionModal(true);
  };

  const closeCreateSessionModal = () => {
    setShowCreateSessionModal(false);
  };

  const closeSessionPlayers = () => {
    setShowSessionPlayersModal(false);
  };

  const closeWeatherCheckModal = () => {
    setShowWeatherCheckModal(false);
  };

  const createSession = () => {
    // Logic to create a session
    console.log(createSessionForm);
    setShowCreateSessionModal(false);
  };

  const checkWeather = () => {
    // Logic to check weather
    console.log('Checking weather...');
    setWeatherData({ data: [{ temp: 20, weather: { description: 'Clear Sky' }, rh: 60, wind_spd: 5 }] });
  };

  const openWeatherCheckModal = (date) => {
    setShowWeatherCheckModal(true);
  };

  useEffect(() => {
    // Fetch initial training sessions and players
    setTrainingSessions([
      { date: '2025-05-14T10:00:00', duration: '60', playerIds: [1, 2], trainingFocus: 'Technical Skills', sessionId: 1 },
    ]);
    setPlayers([
      { playerId: 1, name: 'John Doe' },
      { playerId: 2, name: 'Jane Smith' },
    ]);
  }, []);

  return (
    <div className="training-section">
      {selectedTab === 'training' && (
        <>
          <div className="sessions-header">
            <h2>
              <i className="fas fa-dumbbell"></i> Training Sessions
            </h2>
            <button className="add-session-btn" onClick={openCreateSessionModal}>
              <i className="fas fa-plus"></i> Create Session
            </button>
          </div>

          {trainingSessions.length > 0 ? (
            trainingSessions.map((session) => (
              <div className="session-card" key={session.sessionId}>
                <div className="session-header">
                  <div className="session-title">
                    <div className="session-date">
                      <i className="fas fa-calendar-alt"></i>
                      {new Date(session.date).toLocaleDateString()}
                    </div>
                    <span className={`session-status status-${getSessionStatus(session)}`}>
                      {getSessionStatus(session)}
                    </span>
                  </div>
                  <div className="session-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      {session.duration} min
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-users"></i>
                      {getPlayerCount(session.playerIds)} Players
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-shield-alt"></i>
                      {getTeamName(session.teamId)}
                    </div>
                  </div>
                </div>

                <div className="session-body">
                  <div className="session-focus">
                    <div className="focus-title">
                      <i className="fas fa-bullseye"></i>
                      Training Focus
                    </div>
                    <p>{session.trainingFocus}</p>
                  </div>

                  <div className="session-actions">
                    <button className="action-button view-button">
                      <i className="fas fa-eye"></i> View Details
                    </button>
                    <button className="action-button delete-button">
                      <i className="fas fa-trash-alt"></i> Delete Session
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <i className="fas fa-calendar-times fa-3x"></i>
              <h3>No Training Sessions</h3>
              <p>Create your first training session to get started</p>
            </div>
          )}
        </>
      )}

      {/* Session Players Modal */}
      {showSessionPlayersModal && (
        <div className="modal-overlay">
          <div className="session-players-modal">
            <div className="modal-header">
              <h2>Session Players</h2>
              <button className="close-btn" onClick={closeSessionPlayers}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="players-list">
              {sessionPlayers.length > 0 ? (
                sessionPlayers.map((player) => (
                  <div className="player-item" key={player.playerId}>
                    <i className="fas fa-user"></i>
                    <span>{player.name}</span>
                  </div>
                ))
              ) : (
                <div className="no-players">
                  <i className="fas fa-users fa-3x"></i>
                  <h3>No Players Assigned</h3>
                  <p>Add players to this training session</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Create Session Modal */}
      {showCreateSessionModal && (
        <div className="modal-overlay">
          <div className="create-session-modal">
            <div className="modal-header">
              <h2>Create New Training Session</h2>
              <button className="close-btn" onClick={closeCreateSessionModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <form onSubmit={createSession}>
              <div className="form-group">
                <label htmlFor="date">Session Date</label>
                <div className="weather-check-wrapper">
                  <div className="input-wrapper">
                    <i className="far fa-calendar"></i>
                    <input
                      type="datetime-local"
                      id="date"
                      value={createSessionForm.date}
                      onChange={(e) =>
                        setCreateSessionForm({
                          ...createSessionForm,
                          date: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="weather-check-trigger"
                    onClick={() => openWeatherCheckModal(createSessionForm.date)}
                  >
                    <i className="fas fa-cloud"></i> Check Weather
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Duration (minutes)</label>
                <div className="input-wrapper">
                  <i className="fas fa-clock"></i>
                  <input
                    type="number"
                    value={createSessionForm.duration}
                    onChange={(e) =>
                      setCreateSessionForm({
                        ...createSessionForm,
                        duration: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Select Players</label>
                <div className="players-select-wrapper">
                  <div className="select-info">
                    <i className="fas fa-users"></i>
                    <span>Choose players for this session</span>
                  </div>
                  <select
                    multiple
                    value={createSessionForm.playerIds}
                    onChange={(e) =>
                      setCreateSessionForm({
                        ...createSessionForm,
                        playerIds: Array.from(e.target.selectedOptions, (option) => option.value),
                      })
                    }
                  >
                    {players.map((player) => (
                      <option key={player.playerId} value={player.playerId}>
                        {player.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Training Focus</label>
                <div className="input-wrapper">
                  <i className="fas fa-bullseye"></i>
                  <select
                    value={createSessionForm.trainingFocus}
                    onChange={(e) =>
                      setCreateSessionForm({
                        ...createSessionForm,
                        trainingFocus: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Training Focus</option>
                    <option value="Technical Skills">Technical Skills</option>
                    <option value="Tactical Training">Tactical Training</option>
                    <option value="Physical Conditioning">Physical Conditioning</option>
                    <option value="Match Practice">Match Practice</option>
                    <option value="Recovery">Recovery</option>
                  </select>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={closeCreateSessionModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={!createSessionForm.date || !createSessionForm.duration || !createSessionForm.playerIds.length}>
                  Create Session
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Weather Check Modal */}
      {showWeatherCheckModal && (
        <div className="modal-overlay">
          <div className="weather-check-modal">
            <div className="modal-header">
              <h2>Check Weather</h2>
              <button className="close-btn" onClick={closeWeatherCheckModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <form onSubmit={checkWeather} className="weather-form">
              <div className="weather-input-group">
                <label>Date</label>
                <input
                  type="date"
                  value={createSessionForm.date}
                  readOnly
                  className="weather-input"
                />
              </div>

              <div className="weather-input-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="weather-input"
                />
              </div>

              <button type="submit" className="check-weather-btn">
                <i className="fas fa-search"></i> Check
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Weather Results Modal */}
      {weatherData && (
        <div className="modal-overlay">
          <div className="weather-results-modal">
            <div className="modal-header">
              <h2>Weather Forecast</h2>
              <button className="close-btn" onClick={() => setWeatherData(null)}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="weather-results">
              {weatherData.data && weatherData.data.length > 0 ? (
                <>
                  <p>
                    <strong>Temperature:</strong> {weatherData.data[0].temp}°C
                  </p>
                  <p>
                    <strong>Description:</strong> {weatherData.data[0].weather?.description || 'N/A'}
                  </p>
                  <p>
                    <strong>Humidity:</strong> {weatherData.data[0].rh}%
                  </p>
                  <p>
                    <strong>Wind Speed:</strong> {weatherData.data[0].wind_spd} m/s
                  </p>
                </>
              ) : (
                <p>No weather data available for the selected date and location.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingSession;
