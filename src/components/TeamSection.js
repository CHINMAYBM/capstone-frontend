import React from 'react';
import './TeamSection.css';

const TeamSection = ({ selectedTab }) => {
  // Placeholder data for team members
  const teamMembers = [
    { name: 'John Doe', sport: 'Football', age: 25, weight: 75, height: 180 },
    { name: 'Jane Smith', sport: 'Basketball', age: 28, weight: 65, height: 170 },
    { name: 'Emily Davis', sport: 'Tennis', age: 22, weight: 60, height: 165 },
  ];

  return (
    <div className="team-section">
      <div className="team-header">
        <div className="team-cover"></div>
        <div className="team-info">
          <div className="team-avatar">
            <i className="fas fa-users"></i>
          </div>
          <h2 className="team-title">My Team</h2>
          {/* <p className="team-subtitle">Team #{player?.teamId}</p> */}
        </div>
      </div>

      <div className="team-content">
        <div className="team-card">
          <h3 className="card-title">Team Members</h3>

          {/* Display team members */}
          {teamMembers.length > 0 ? (
            <div className="team-members-list">
              {teamMembers.map((member, index) => (
                <div key={index} className="member-card">
                  <div className="member-number">#{index + 1}</div>
                  <div className="member-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="member-info">
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-sport">{member.sport}</p>
                    <div className="member-details">
                      <div className="detail-item">
                        <i className="fas fa-calendar-alt"></i>
                        <span>{member.age} years</span>
                      </div>
                      <div className="detail-item">
                        <i className="fas fa-weight"></i>
                        <span>{member.weight} kg</span>
                      </div>
                      <div className="detail-item">
                        <i className="fas fa-ruler-vertical"></i>
                        <span>{member.height} cm</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-data">
              <i className="fas fa-users-slash"></i>
              <p>No team members found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
