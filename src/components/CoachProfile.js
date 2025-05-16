// import React from 'react';
// import './Coachprofile.css'; // Optional styling file
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faUserTie,
//   faAward,
//   faEnvelope,
//   faBirthdayCake,
//   faUsers,
//   faBullseye,
//   faCalendarCheck,
//   faChartLine,
//   faUserFriends,
//   faPlus
// } from '@fortawesome/free-solid-svg-icons';

// const CoachProfile = ({
//   selectedTab,
//   coach,
//   teamCount,
//   goalCount,
//   sessionCount,
//   teams = [],
//   openCreateTeamModal
// }) => {
//   if (selectedTab !== 'profile') return null;

//   return (
//     <div className="main-content">
//       {/* Profile Section */}
//       <div className="profile-section">
//         {/* Profile Header */}
//         <div className="profile-header">
//           <div className="profile-avatar">
//             <div className="avatar-circle">
//               <FontAwesomeIcon icon={faUserTie} />
//             </div>
//           </div>
//           <div className="profile-info">
//             <h1>{coach?.name}</h1>
//             <div className="coach-meta">
//               <span className="designation">
//                 <FontAwesomeIcon icon={faAward} /> Head Coach - {coach?.sport}
//               </span>
//               <span className="email">
//                 <FontAwesomeIcon icon={faEnvelope} /> {coach?.email}
//               </span>
//               <span className="age">
//                 <FontAwesomeIcon icon={faBirthdayCake} /> {coach?.age} years old
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Stats Overview */}
//         <div className="stats-overview">
//           <div className="stat-card">
//             <div className="stat-icon">
//               <FontAwesomeIcon icon={faUsers} />
//             </div>
//             <div className="stat-details">
//               <span className="stat-value">{teamCount}</span>
//               <span className="stat-label">Active Teams</span>
//             </div>
//             <div className="stat-trend positive">
//               <FontAwesomeIcon icon={faChartLine} />
//             </div>
//           </div>

//           <div className="stat-card">
//             <div className="stat-icon">
//               <FontAwesomeIcon icon={faBullseye} />
//             </div>
//             <div className="stat-details">
//               <span className="stat-value">{goalCount}</span>
//               <span className="stat-label">Active Goals</span>
//             </div>
//             <div className="stat-trend positive">
//               <FontAwesomeIcon icon={faChartLine} />
//             </div>
//           </div>

//           <div className="stat-card">
//             <div className="stat-icon">
//               <FontAwesomeIcon icon={faCalendarCheck} />
//             </div>
//             <div className="stat-details">
//               <span className="stat-value">{sessionCount}</span>
//               <span className="stat-label">Training Sessions</span>
//             </div>
//             <div className="stat-trend positive">
//               <FontAwesomeIcon icon={faChartLine} />
//             </div>
//           </div>
//         </div>

//         {/* Teams Overview Section */}
//         <div className="teams-overview">
//           <div className="section-header">
//             <h2>My Teams</h2>
//           </div>

//           <div className="teams-grid">
//             {teams.map((team, index) => (
//               <div className="team-card" key={index}>
//                 <div className="team-header">
//                   <h3 className="team-name">
//                     <FontAwesomeIcon icon={faUsers} /> {team.name}
//                   </h3>
//                   <span className="sport-badge">{team.sportCategory}</span>
//                 </div>
//                 <div className="team-content">
//                   <div className="team-stat">
//                     <FontAwesomeIcon icon={faUserFriends} />
//                     <span>{team.playerIds?.length || 0} Players</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {teams.length === 0 && (
//             <div className="empty-state">
//               <FontAwesomeIcon icon={faUsers} />
//               <h3>No Teams Yet</h3>
//               <p>Create your first team to get started</p>
//               <button className="team-action-btn view-btn" onClick={openCreateTeamModal}>
//                 <FontAwesomeIcon icon={faPlus} /> Create Team
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoachProfile;


import React from 'react';
import './Coachprofile.css'; // Optional styling file

const CoachProfile = () => {
  return (
    <div className="main-content">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-circle">
              {/* Avatar or Empty */}
            </div>
          </div>
          <div className="profile-info">
            <h1>Coach Name (Static Example)</h1>
            <div className="coach-meta">
              <span className="designation">Head Coach - Sport (Static)</span>
              <span className="email">coach@example.com</span>
              <span className="age">Age: 40 (Static)</span>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="stats-overview">
          <div className="stat-card">
            <div className="stat-icon"></div>
            <div className="stat-details">
              <span className="stat-value">0</span>
              <span className="stat-label">Active Teams</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon"></div>
            <div className="stat-details">
              <span className="stat-value">0</span>
              <span className="stat-label">Active Goals</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon"></div>
            <div className="stat-details">
              <span className="stat-value">0</span>
              <span className="stat-label">Training Sessions</span>
            </div>
          </div>
        </div>

        {/* Teams Overview Section */}
        <div className="teams-overview">
          <div className="section-header">
            <h2>My Teams (Static)</h2>
          </div>

          <div className="teams-grid">
            {/* Empty Teams Grid */}
          </div>

          {/* Empty State if No Teams */}
          <div className="empty-state">
            <h3>No Teams Yet</h3>
            <p>Create your first team to get started</p>
            {/* Button to Create Team */}
            <button className="team-action-btn view-btn">Create Team</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
