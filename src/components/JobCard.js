import React from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
  const handleShare = async (jobData) => {
    const shareData = {
      title: jobData.title,
      text: `Check out this ${jobData.title} position at AugmntX`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`);
        alert('Job link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`);
        alert('Job link copied to clipboard!');
      } catch (clipboardError) {
        console.log('Clipboard not available');
      }
    }
  };
  return (
    <div className="job-card">
      <div className="job-card-header">
        <button className="share-btn" onClick={() => handleShare(job)}>
          <img src="/share-icon.webp" alt="Share" width="16" height="16" />
        </button>
      </div>

      <div className="job-content">
        <h3 className="job-title">{job.title}</h3>
        <p className="job-experience">{job.experience}</p>
        
        <div className="job-technologies">
          {job.technologies.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>

        <div className="skill-match">
          <div className="skill-match-bar">
            <div 
              className="skill-match-progress" 
              style={{ width: 0 }}
            ></div>
          </div>
          <p className="skill-match-text">
            <a href="#login" className="login-link">Login</a> or <a href="#signup" className="signup-link">sign up</a> to know your profile Match %
          </p>
        </div>

        <div className="job-details">
          <div className="job-detail">
            <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 0C3.6 0 0 3.6 0 8C0 14 8 16 8 16S16 14 16 8C16 3.6 12.4 0 8 0ZM8 10C6.3 10 5 8.7 5 7S6.3 4 8 4S11 5.3 11 7S9.7 10 8 10Z" fill="currentColor"/>
            </svg>
            <span className="text-gray-600">{job.location}</span>
          </div>
          
          <div className="job-detail">
            <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 4H12V2C12 0.9 11.1 0 10 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V6C16 4.9 15.1 4 14 4ZM6 2H10V4H6V2ZM14 14H2V6H14V14Z" fill="currentColor"/>
            </svg>
            <span className="text-gray-600">{job.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
