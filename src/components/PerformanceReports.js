import React from 'react';
import './PerformanceReports.css';

const PerformanceReports = ({ selectedTab, performanceReports = [] }) => { // Defaulting to an empty array
//   if (selectedTab !== 'performance') {
//     return null; // Don't render if 'performance' tab is not selected
//   }

  // Sorting reports by date
  const sortedReports = performanceReports.sort((a, b) => new Date(b.performanceReport.recordDate) - new Date(a.performanceReport.recordDate));

  return (
    <div className="performance-section">
      <div className="section-header">
        <h2>
          <i className="fas fa-chart-line"></i> Performance Reports
        </h2>
        <p className="section-subtitle">View your detailed performance metrics and feedback</p>
      </div>

      {/* Reports Container */}
      <div className="reports-container">
        {performanceReports.length > 0 ? (
          sortedReports.map((report, index) => (
            <div key={index} className="report-table-container">
              {/* Basic Details Section */}
              <div className="report-header">
                <div className="report-title">
                  <h3>Report - {new Date(report.performanceReport.recordDate).toLocaleDateString()}</h3>
                  <span className="player-name">{report.performanceReport.playerName}</span>
                </div>
              </div>

              <div className="player-basic-info">
                <h4 className="info-title">Player Information</h4>
                <div className="info-cards">
                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-user-alt"></i>
                    </div>
                    <div className="info-details">
                      <label>Age</label>
                      <span className="info-value">{report.performanceReport.playerAge} years</span>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-ruler-vertical"></i>
                    </div>
                    <div className="info-details">
                      <label>Height</label>
                      <span className="info-value">{report.performanceReport.playerHeight} cm</span>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-weight"></i>
                    </div>
                    <div className="info-details">
                      <label>Weight</label>
                      <span className="info-value">{report.performanceReport.weight} kg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics Table */}
              <div className="metrics-section">
                <h4 className="metrics-title">Performance Analysis</h4>
                <table className="metrics-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Value</th>
                      <th>Performance Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Physical Metrics */}
                    <tr>
                      <td>
                        <div className="metric-name">
                          <i className="fas fa-heartbeat"></i> Heart Rate Variability
                        </div>
                      </td>
                      <td>{report.performanceReport.hrv}</td>
                      <td>{report.remarks?.['Heart Rate Variability']}</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="metric-name">
                          <i className="fas fa-running"></i> Top Speed
                        </div>
                      </td>
                      <td>{report.performanceReport.topSpeed} km/h</td>
                      <td>{report.remarks?.['Top Speed']}</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="metric-name">
                          <i className="fas fa-fire"></i> Calories Burned
                        </div>
                      </td>
                      <td>{report.performanceReport.caloriesBurned} kcal</td>
                      <td>{report.remarks?.['Calories Burned']}</td>
                    </tr>

                    {/* Soccer Skills */}
                    <tr>
                      <td>
                        <div className="metric-name">
                          <i className="fas fa-futbol"></i> Passing Accuracy
                        </div>
                      </td>
                      <td>{report.performanceReport.passingAccuracy}%</td>
                      <td>{report.remarks?.['Passing Accuracy']}</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="metric-name">
                          <i className="fas fa-running"></i> Dribbling Success Rate
                        </div>
                      </td>
                      <td>{report.performanceReport.dribblingSuccessRate}%</td>
                      <td>{report.remarks?.['Dribbling Success Rate']}</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="metric-name">
                          <i className="fas fa-bullseye"></i> Shooting Accuracy
                        </div>
                      </td>
                      <td>{report.performanceReport.shootingAccuracy}%</td>
                      <td>{report.remarks?.['Shooting Accuracy']}</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="metric-name">
                          <i className="fas fa-shield-alt"></i> Tackling Success Rate
                        </div>
                      </td>
                      <td>{report.performanceReport.tacklingSuccessRate}%</td>
                      <td>{report.remarks?.['Tackling Success Rate']}</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="metric-name">
                          <i className="fas fa-crosshairs"></i> Crossing Accuracy
                        </div>
                      </td>
                      <td>{report.performanceReport.crossingAccuracy}%</td>
                      <td>{report.remarks?.['Crossing Accuracy']}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer Section */}
              <div className="report-footer">
                <div className="footer-buttons">
                  <button className="btn-suggestions">
                    <i className="fas fa-lightbulb"></i> Get Suggestions
                  </button>
                  <button className="btn-standards">
                    <i className="fas fa-chart-bar"></i> View Standards
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-state-content">
              <i className="fas fa-chart-area"></i>
              <h3>No Performance Reports</h3>
              <p>There are no performance reports available at this time.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceReports;
