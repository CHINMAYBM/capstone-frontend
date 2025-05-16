// src/DashboardWrapper.js
import React, { useState } from "react";
import "./DashboardWrapper.css";
import MyDetails from "./PlayerDetails";
import MyCoach from "./CoachDetails";
import TeamDetails from "./TeamSection";
import TrainingSessions from "./TrainingSessions";
import PerformanceReports from "./PerformanceReports";
import PlayerGoals from "./PlayerGoals";
// import UpcomingEvents from "./UpcomingEvents";

const DashboardWrapper = () => {
  const [selectedTab, setSelectedTab] = useState("player");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "player":
        return <MyDetails />;
      case "coach":
        return <MyCoach />;
      case "team":
        return <TeamDetails />;
      case "training":
        return <TrainingSessions />;
      case "performance":
        return <PerformanceReports />;
      case "goals":
        return <PlayerGoals />;
      // case "events":
      //   return <UpcomingEvents />;
      default:
        return <MyDetails />;
    }
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <i className="fas fa-running"></i>
          <h4>AthL0</h4>
        </div>

        <ul className="sidebar-nav">
          <li
            className={`sidebar-nav-item ${selectedTab === "player" ? "active" : ""}`}
            onClick={() => handleTabClick("player")}
          >
            <i className="fas fa-user-circle"></i>
            <span>My Details</span>
          </li>
          <li
            className={`sidebar-nav-item ${selectedTab === "coach" ? "active" : ""}`}
            onClick={() => handleTabClick("coach")}
          >
            <i className="fas fa-chalkboard-teacher"></i>
            <span>My Coach</span>
          </li>
          <li
            className={`sidebar-nav-item ${selectedTab === "team" ? "active" : ""}`}
            onClick={() => handleTabClick("team")}
          >
            <i className="fas fa-users"></i>
            <span>Team Details</span>
          </li>
          <li
            className={`sidebar-nav-item ${selectedTab === "training" ? "active" : ""}`}
            onClick={() => handleTabClick("training")}
          >
            <i className="fas fa-dumbbell"></i>
            <span>Training Sessions</span>
          </li>
          <li
            className={`sidebar-nav-item ${selectedTab === "performance" ? "active" : ""}`}
            onClick={() => handleTabClick("performance")}
          >
            <i className="fas fa-chart-line"></i>
            <span>Performance Reports</span>
          </li>
          <li
            className={`sidebar-nav-item ${selectedTab === "goals" ? "active" : ""}`}
            onClick={() => handleTabClick("goals")}
          >
            <i className="fas fa-trophy"></i>
            <span>Player Goals</span>
          </li>
          <li
            className={`sidebar-nav-item ${selectedTab === "events" ? "active" : ""}`}
            onClick={() => handleTabClick("events")}
          >
            <i className="fas fa-calendar-alt"></i>
            <span>Upcoming Events</span>
          </li>
          <li className="sidebar-nav-item logout-item" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default DashboardWrapper;
