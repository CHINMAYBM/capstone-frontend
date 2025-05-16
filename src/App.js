import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerDetails from './components/PlayerDetails';
import CoachDetails from './components/CoachDetails';
import TeamSection from './components/TeamSection';
import TrainingSessions from './components/TrainingSessions';
import PerformanceReports from './components/PerformanceReports';
import PlayerGoals from './components/PlayerGoals';
import EventsSection from './components/EventsSection';
import DashboardWrapper from './components/DashboardWrapper';
import CoachBoard from './components/CoachBoard';
import CoachProfile from './components/CoachProfile';
import Teams from './components/Teams';
import TrainingSession from './components/Trainingsession';
import GoalManagement from './components/GoalManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayerDetails />} />
        <Route path="/CoachDetails" element={<CoachDetails />} />
        <Route path='/TeamSection' element={<TeamSection />} />
        <Route path='/TrainingSessions' element={<TrainingSessions />} />
        <Route path='/PerformanceReports' element={<PerformanceReports />} />
        <Route path='/PlayerGoals' element={<PlayerGoals/>} />
        <Route path='/EventSection' element={<EventsSection/>} />
        <Route path='/DashboardWrapper' element={<DashboardWrapper/>} />
        <Route path='/CoachBoard' element={<CoachBoard/>} />
        <Route path='/CoachProfile' element={<CoachProfile/>} />
        <Route path='/Teams' element={<Teams />} />
        <Route path='/TrainingSession' element={<TrainingSession />} />
        <Route path='/GoalManagement' element={<GoalManagement />} />
        <Route path='/PerformanceReports' element={<PerformanceReports />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React, { useState } from 'react';
// import PerformanceReports from './components/PerformanceReports';

// const App = () => {
//   const [selectedTab, setSelectedTab] = useState('performance'); // Set tab to 'performance' to show the section

//   // Sample performance reports data
//   const performanceReports = [
//     {
//       performanceReport: {
//         recordDate: '2025-06-15',
//         playerName: 'John Doe',
//         playerAge: 25,
//         playerHeight: 180,
//         weight: 75,
//         hrv: 'High',
//         topSpeed: 30,
//         caloriesBurned: 500,
//         passingAccuracy: 85,
//         dribblingSuccessRate: 80,
//         shootingAccuracy: 90,
//         tacklingSuccessRate: 75,
//         crossingAccuracy: 70
//       },
//       remarks: {
//         'Heart Rate Variability': 'Excellent',
//         'Top Speed': 'Good',
//         'Calories Burned': 'Average',
//         'Passing Accuracy': 'Excellent',
//         'Dribbling Success Rate': 'Good',
//         'Shooting Accuracy': 'Excellent',
//         'Tackling Success Rate': 'Average',
//         'Crossing Accuracy': 'Below Average'
//       }
//     },
//     {
//       performanceReport: {
//         recordDate: '2025-06-16',
//         playerName: 'Jane Smith',
//         playerAge: 28,
//         playerHeight: 170,
//         weight: 65,
//         hrv: 'Medium',
//         topSpeed: 28,
//         caloriesBurned: 480,
//         passingAccuracy: 90,
//         dribblingSuccessRate: 85,
//         shootingAccuracy: 92,
//         tacklingSuccessRate: 80,
//         crossingAccuracy: 75
//       },
//       remarks: {
//         'Heart Rate Variability': 'Good',
//         'Top Speed': 'Good',
//         'Calories Burned': 'Good',
//         'Passing Accuracy': 'Excellent',
//         'Dribbling Success Rate': 'Excellent',
//         'Shooting Accuracy': 'Excellent',
//         'Tackling Success Rate': 'Good',
//         'Crossing Accuracy': 'Good'
//       }
//     }
//   ];

//   return (
//     <div>
//       <button onClick={() => setSelectedTab('performance')}>Performance</button>
//       <button onClick={() => setSelectedTab('other')}>Other</button>

//       <PerformanceReports selectedTab={selectedTab} performanceReports={performanceReports} />
//     </div>
//   );
// };

// export default App;
