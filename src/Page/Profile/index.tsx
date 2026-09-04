import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <>
     <div className="profile-container">
      <div className="profile-card">
        {/* Profile Header */}
        <div className="profile-header">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile Avatar" 
            className="profile-avatar"
          />
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-title">Full Stack Developer</p>
          <p className="profile-bio">
            Passionate about building amazing web applications and learning new technologies.
          </p>
        </div>

        {/* Profile Stats */}
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-value">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-value">10+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="profile-actions">
          <button className="btn btn-primary">Contact Me</button>
          <button className="btn btn-secondary">View Resume</button>
        </div>
      </div>
      
    </div>
     <div className="profile-container">
      <div className="profile-card">
        {/* Profile Header */}
        <div className="profile-header">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile Avatar" 
            className="profile-avatar"
          />
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-title">Full Stack Developer</p>
          <p className="profile-bio">
            Passionate about building amazing web applications and learning new technologies.
          </p>
        </div>

        {/* Profile Stats */}
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-value">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-value">10+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="profile-actions">
          <button className="btn btn-primary">Contact Me</button>
          <button className="btn btn-secondary">View Resume</button>
        </div>
      </div>
      
    </div>
     <div className="profile-container">
      <div className="profile-card">
        {/* Profile Header */}
        <div className="profile-header">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile Avatar" 
            className="profile-avatar"
          />
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-title">Full Stack Developer</p>
          <p className="profile-bio">
            Passionate about building amazing web applications and learning new technologies.
          </p>
        </div>

        {/* Profile Stats */}
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-value">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-value">10+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="profile-actions">
          <button className="btn btn-primary">Contact Me</button>
          <button className="btn btn-secondary">View Resume</button>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Profile;