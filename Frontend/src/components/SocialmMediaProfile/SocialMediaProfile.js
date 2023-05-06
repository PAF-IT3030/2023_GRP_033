import React from 'react';
import './SocialMediaProfile.css';

function SocialMediaProfile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>John Doe</h2>
        <p>Web Developer</p>
      </div>
      <div className="profile-body">
        <img src="https://via.placeholder.com/150" alt="Profile Avatar" />
        <div className="profile-info">
          <p><strong>Location:</strong> New York, USA</p>
          <p><strong>Interests:</strong> Web Development, Programming, Gaming</p>
          <p><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius justo et tortor facilisis, in ultrices ex malesuada.</p>
        </div>
      </div>
      <div className="profile-footer">
        <button>Follow</button>
        <button>Message</button>
      </div>
    </div>
  );
}

export default SocialMediaProfile;
