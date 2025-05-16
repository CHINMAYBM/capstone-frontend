import React from 'react';
import './PlayerDetails.css';

function PlayerDetails({ player, selectedTab }) {
//   if (selectedTab !== 'player' || !player) {
//     return null; // Similar to *ngIf in Angular
//   }

  return (
    <div>
      <div className="main-content">
        {/* Player Details Section */}
        <div className="profile-section">
          <div className="profile-header">
            <div className="profile-cover"></div>
            <div className="profile-info">
              <div className="profile-avatar">
                <i className="fas fa-user-circle"></i>
              </div>
              <h2 className="profile-name">{player?.name}</h2>
              <p className="profile-sport">{player?.sport} Player</p>
            </div>
          </div>

          <div className="profile-content">
            <div className="profile-card">
              <h3 className="card-title">Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div className="info-details">
                    <label>Email</label>
                    {/* <p>{player.email}</p> */}
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-calendar-alt"></i>
                  <div className="info-details">
                    <label>Age</label>
                    {/* <p>{player.age} years</p> */}
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-weight"></i>
                  <div className="info-details">
                    <label>Weight</label>
                    {/* <p>{player.weight} kg</p> */}
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-ruler-vertical"></i>
                  <div className="info-details">
                    <label>Height</label>
                    {/* <p>{player.height} cm</p> */}
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-users"></i>
                  <div className="info-details">
                    <label>Team ID</label>
                    {/* <p>#{player.teamId}</p> */}
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-running"></i>
                  <div className="info-details">
                    <label>Sport</label>
                    {/* <p>{player.sport}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;
