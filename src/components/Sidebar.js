import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ filters, onFilterChange }) => {
  const [showMoreTech, setShowMoreTech] = useState(false);

  const technologies = [
    { name: 'Python', count: 13 },
    { name: 'SQL', count: 12 },
    { name: 'Java', count: 9 },
    { name: 'Spring Boot', count: 7 },
    { name: 'REST', count: 6 },
    { name: 'TypeScript', count: 6 },
    { name: 'React', count: 5 },
    { name: '.NET', count: 5 },
    { name: 'Oracle', count: 4 },
    { name: 'JavaScript', count: 4 },
    { name: 'Angular', count: 4 },
    { name: 'C#', count: 4 },
    { name: 'Node.js', count: 4 },
    { name: 'RESTful API', count: 3 },
    { name: 'AWS', count: 3 },
    { name: 'FrontEnd', count: 3 },
    { name: 'Azure', count: 3 },
    { name: 'Full Stack Development', count: 3 },
    { name: 'Apex', count: 3 },
    { name: 'Agile', count: 2 },
    { name: 'FastAPI', count: 2 },
    { name: 'React.js', count: 2 },
    { name: 'HTML & CSS', count: 2 },
    { name: 'Rest API', count: 2 },
    { name: 'Snowflake', count: 2 },
    { name: 'GitHub', count: 2 },
    { name: 'API', count: 2 },
    { name: 'Blockchain', count: 2 },
    { name: 'Data Modeling', count: 2 },
    { name: 'React js', count: 2 },
    { name: 'Multi Threading', count: 2 },
    { name: 'Azure Cloud', count: 2 },
    { name: 'REST APIs', count: 2 },
    { name: 'Tableau', count: 2 },
    { name: 'POWER BI', count: 2 },
    { name: 'Terraform', count: 2 },
    { name: 'DevOps', count: 2 },
    { name: 'GraphQL', count: 2 },
    { name: 'Salesforce', count: 2 },
    { name: 'MySQL', count: 2 },
    { name: 'LLM', count: 2 }
  ];

  const visibleTechnologies = showMoreTech ? technologies : technologies.slice(0, 5);

  const handleTechnologyChange = (techName) => {
    const updatedTechs = filters.technologies.includes(techName)
      ? filters.technologies.filter(tech => tech !== techName)
      : [...filters.technologies, techName];
    
    onFilterChange('technologies', updatedTechs);
  };

  return (
    <aside className="sidebar">
      <div className="job-count">
        <span className="text-gray-600">79 jobs</span>
      </div>
      
      <h2 className="sidebar-title">Sort & Filter</h2>

      {/* Date Posted Filter */}
      <div className="filter-section">
        <h3 className="filter-title">
          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H12C13.1 14 14 13.1 14 12V4C14 2.9 13.1 2 12 2ZM12 12H4V6H12V12ZM12 4H4V4H12V4Z" fill="currentColor"/>
          </svg>
          Date Posted
        </h3>
        <div className="radio-group">
          {[
            { value: '3days', label: 'Past 3 Days' },
            { value: 'week', label: 'Past Week' },
            { value: 'month', label: 'Past Month' },
            { value: 'all', label: 'All' }
          ].map(option => (
            <label key={option.value} className="radio-label">
              <input
                type="radio"
                name="datePosted"
                value={option.value}
                checked={filters.datePosted === option.value}
                onChange={(e) => onFilterChange('datePosted', e.target.value)}
                className="radio-input"
              />
              <span className="radio-text">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Technology Filter */}
      <div className="filter-section">
        <h3 className="filter-title">
          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 3H14V5H2V3ZM2 7H14V9H2V7ZM2 11H14V13H2V11Z" fill="currentColor"/>
          </svg>
          Technology / Tools
        </h3>
        <input
          type="text"
          placeholder="Search technologies..."
          className="input tech-search"
        />
        <div className="checkbox-group">
          {visibleTechnologies.map(tech => (
            <label key={tech.name} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.technologies.includes(tech.name)}
                onChange={() => handleTechnologyChange(tech.name)}
                className="checkbox-input"
              />
              <span className="checkbox-text">
                {tech.name} ({tech.count})
              </span>
            </label>
          ))}
        </div>
        {!showMoreTech && (
          <span 
            className="show-more-link"
            onClick={() => setShowMoreTech(true)}
          >
            Show more
          </span>
        )}
      </div>

      {/* Years of Experience Filter */}
      <div className="filter-section">
        <h3 className="filter-title">
          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L10 6H14L11 9L13 13L8 10L3 13L5 9L2 6H6L8 2Z" fill="currentColor"/>
          </svg>
          Years of Experience
        </h3>
        <div className="experience-range">
          <div className="range-input-group">
            <label className="range-label">Min</label>
            <input
              type="number"
              placeholder="0"
              value={filters.minExperience}
              onChange={(e) => onFilterChange('minExperience', e.target.value)}
              className="input range-input"
            />
          </div>
          <div className="range-input-group">
            <label className="range-label">Max</label>
            <input
              type="number"
              placeholder="10+"
              value={filters.maxExperience}
              onChange={(e) => onFilterChange('maxExperience', e.target.value)}
              className="input range-input"
            />
          </div>
        </div>
      </div>

      {/* Locations Filter */}
      <div className="filter-section">
        <h3 className="filter-title">
          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0C3.6 0 0 3.6 0 8C0 14 8 16 8 16S16 14 16 8C16 3.6 12.4 0 8 0ZM8 10C6.3 10 5 8.7 5 7S6.3 4 8 4S11 5.3 11 7S9.7 10 8 10Z" fill="currentColor"/>
          </svg>
          Locations
        </h3>
        <div className="checkbox-group">
          {[
            { name: 'Worldwide', count: 34 },
            { name: 'World Wide', count: 33 },
            { name: 'India', count: 6 },
            { name: 'world wide', count: 4 },
            { name: 'worldwide', count: 2 }
          ].map(location => (
            <label key={location.name} className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
              />
              <span className="checkbox-text">
                {location.name} ({location.count})
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
