import React from 'react';
import './EventsSection.css';

const EventsSection = ({ selectedTab }) => {
//   if (selectedTab !== 'events') {
//     return null; // Don't render if 'events' tab is not selected
//   }

  return (
    <div className="events-section">
      <div className="section-header">
        <h2><i className="fas fa-calendar-alt"></i> Upcoming Events</h2>
        <p className="section-subtitle">Stay tuned for exciting tournaments and training camps</p>
      </div>

      <div className="events-container">
        {/* Main Featured Event */}
        <div className="event-card featured">
          <div className="event-header">
            <span className="event-badge">Featured Event</span>
            <h3>Summer Soccer Championship 2024</h3>
            <div className="event-meta">
              <div className="meta-item">
                <i className="fas fa-calendar-alt"></i>
                <span>July 15-30, 2024</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-clock"></i>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>National Sports Complex, Main Stadium</span>
              </div>
            </div>
          </div>
          <div className="event-contact">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>athleteedge@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Upcoming Events Grid */}
        <div className="upcoming-events">
          <h3 className="upcoming-title">Other Upcoming Events</h3>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-header">
                <span className="event-badge">Regional</span>
                <h4>Youth Soccer League</h4>
                <div className="event-meta">
                  <div className="meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>August 10-24, 2024</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <span>4:00 PM - 8:00 PM</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Regional Sports Center</span>
                  </div>
                </div>
              </div>
              <div className="event-contact">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>athleteedge@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="event-card">
              <div className="event-header">
                <span className="event-badge">Training</span>
                <h4>Elite Training Camp</h4>
                <div className="event-meta">
                  <div className="meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>September 5-10, 2024</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <span>7:00 AM - 2:00 PM</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Elite Training Facility</span>
                  </div>
                </div>
              </div>
              <div className="event-contact">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>athleteedge@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
