// import React from 'react';
// import './CoachDetails.css';

// function CoachDetails({ coach, loading }) {
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section>
//       {coach && (
//         <div className="coach-details-container">
//           <div className="coach-avatar-section">
//             <div className="coach-avatar">
//               <i className="fas fa-user-tie"></i>
//             </div>
//             <h3 className="coach-name">{coach.name}</h3>
//             <span className="coach-designation">{coach.sport} Coach</span>
//           </div>

//           <div className="coach-info-grid">
//             <div className="info-card">
//               <div className="info-icon">
//                 <i className="fas fa-envelope"></i>
//               </div>
//               <div className="info-content">
//                 <label>Email</label>
//                 <span>{coach.email}</span>
//               </div>
//             </div>

//             <div className="info-card">
//               <div className="info-icon">
//                 <i className="fas fa-running"></i>
//               </div>
//               <div className="info-content">
//                 <label>Sport</label>
//                 <span>{coach.sport}</span>
//               </div>
//             </div>

//             <div className="info-card">
//               <div className="info-icon">
//                 <i className="fas fa-calendar-alt"></i>
//               </div>
//               <div className="info-content">
//                 <label>Age</label>
//                 <span>{coach.age} years</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default CoachDetails;

import React from 'react';
import './CoachDetails.css';

function CoachDetails({ loading }) {
  // Sample data for demonstration
  const coach = {
    name: 'John Doe',
    sport: 'Football',
    email: 'john.doe@example.com',
    age: 40,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      {coach && (
        <div className="coach-details-container">
          <div className="coach-avatar-section">
            <div className="coach-avatar">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3 className="coach-name">{coach.name}</h3>
            <span className="coach-designation">{coach.sport} Coach</span>
          </div>

          <div className="coach-info-grid">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <label>Email</label>
                <span>{coach.email}</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-running"></i>
              </div>
              <div className="info-content">
                <label>Sport</label>
                <span>{coach.sport}</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="info-content">
                <label>Age</label>
                <span>{coach.age} years</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CoachDetails;
