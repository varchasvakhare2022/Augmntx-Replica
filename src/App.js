import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import JobListings from './components/JobListings';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    datePosted: 'all',
    technologies: [],
    locations: [],
    minExperience: '',
    maxExperience: '',
    searchKeyword: ''
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="content-wrapper">
          <Sidebar 
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          <JobListings 
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
