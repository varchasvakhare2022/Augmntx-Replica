import React, { useMemo, useState } from 'react';
import JobCard from './JobCard';
import './JobListings.css';

const JobListings = ({ filters, onFilterChange }) => {
  const [visibleJobs, setVisibleJobs] = useState(8); // Show 8 jobs initially
  const jobsPerPage = 8;

  // Comprehensive job data with 79 jobs based on the original website - memoized to prevent unnecessary re-renders
  const jobs = useMemo(() => [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      experience: '5+ Years',
      technologies: ['Node.js', 'Python', 'REST'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 95
    },
    {
      id: 2,
      title: 'NodeJS Engineer NestJS ExpressJ..',
      experience: '4+ Years',
      technologies: ['Nodejs', 'Next/Exp..', 'REST'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 88
    },
    {
      id: 3,
      title: 'NodeJS Engineer NestJS ExpressJ..',
      experience: '4+ Years',
      technologies: ['Nest.js', 'ExpressJ..', 'REST', 'GraphQL'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 92
    },
    {
      id: 4,
      title: 'Salesforce Revenue Cloud Develo..',
      experience: '5+ Years',
      technologies: ['Salesfor..', 'CPQ/ Rev..', 'OmniStud..'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 85
    },
    {
      id: 5,
      title: 'Java Spring Boot Developer',
      experience: '5+ Years',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '5 Days',
      skillMatch: 93
    },
    {
      id: 6,
      title: 'Python Developer',
      experience: '3+ Years',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '1 Week',
      skillMatch: 90
    },
    {
      id: 7,
      title: 'React Frontend Developer',
      experience: '4+ Years',
      technologies: ['React', 'TypeScript', 'Redux'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '2 Days',
      skillMatch: 87
    },
    {
      id: 8,
      title: 'DevOps Engineer',
      experience: '6+ Years',
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '1 Week',
      skillMatch: 89
    },
    // Additional jobs to reach 79 total
    {
      id: 9,
      title: 'Python Developer',
      experience: '3+ Years',
      technologies: ['Python', 'FastAPI', 'PostgreSQL'],
      location: 'India, Remote',
      type: 'Full-time',
      datePosted: '2 Days',
      skillMatch: 91
    },
    {
      id: 10,
      title: 'React Native Developer',
      experience: '4+ Years',
      technologies: ['React Native', 'JavaScript', 'iOS', 'Android'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '4 Days',
      skillMatch: 86
    },
    {
      id: 11,
      title: 'Java Spring Boot Developer',
      experience: '5+ Years',
      technologies: ['Java', 'Spring Boot', 'Microservices'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '1 Week',
      skillMatch: 94
    },
    {
      id: 12,
      title: 'Angular Developer',
      experience: '4+ Years',
      technologies: ['Angular', 'TypeScript', 'RxJS'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 88
    },
    {
      id: 13,
      title: 'AWS Cloud Engineer',
      experience: '5+ Years',
      technologies: ['AWS', 'Terraform', 'CloudFormation'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '5 Days',
      skillMatch: 92
    },
    {
      id: 14,
      title: 'Vue.js Developer',
      experience: '3+ Years',
      technologies: ['Vue.js', 'JavaScript', 'Vuex'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '2 Days',
      skillMatch: 85
    },
    {
      id: 15,
      title: 'C# .NET Developer',
      experience: '4+ Years',
      technologies: ['C#', '.NET', 'ASP.NET'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '1 Week',
      skillMatch: 90
    },
    {
      id: 16,
      title: 'PHP Laravel Developer',
      experience: '3+ Years',
      technologies: ['PHP', 'Laravel', 'MySQL'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 87
    },
    {
      id: 17,
      title: 'Blockchain Developer',
      experience: '4+ Years',
      technologies: ['Solidity', 'Ethereum', 'Smart Contracts'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '6 Days',
      skillMatch: 89
    },
    {
      id: 18,
      title: 'Machine Learning Engineer',
      experience: '5+ Years',
      technologies: ['Python', 'TensorFlow', 'PyTorch'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '4 Days',
      skillMatch: 93
    },
    {
      id: 19,
      title: 'iOS Developer',
      experience: '4+ Years',
      technologies: ['Swift', 'UIKit', 'iOS'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '2 Days',
      skillMatch: 88
    },
    {
      id: 20,
      title: 'Android Developer',
      experience: '4+ Years',
      technologies: ['Kotlin', 'Android', 'Java'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '5 Days',
      skillMatch: 86
    },
    {
      id: 21,
      title: 'Flutter Developer',
      experience: '3+ Years',
      technologies: ['Flutter', 'Dart', 'Mobile'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '3 Days',
      skillMatch: 84
    },
    {
      id: 22,
      title: 'Data Scientist',
      experience: '5+ Years',
      technologies: ['Python', 'R', 'Machine Learning'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '1 Week',
      skillMatch: 91
    },
    {
      id: 23,
      title: 'Data Engineer',
      experience: '4+ Years',
      technologies: ['Python', 'SQL', 'DataBricks'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '4 Days',
      skillMatch: 89
    },
    {
      id: 24,
      title: 'Salesforce Developer',
      experience: '5+ Years',
      technologies: ['Salesforce', 'Apex', 'LWC'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '2 Days',
      skillMatch: 92
    },
    {
      id: 25,
      title: 'Mulesoft Developer',
      experience: '4+ Years',
      technologies: ['Mulesoft', 'API', 'Integration'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '6 Days',
      skillMatch: 87
    },
    {
      id: 26,
      title: 'Oracle Developer',
      experience: '5+ Years',
      technologies: ['Oracle', 'PL/SQL', 'Database'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 90
    },
    {
      id: 27,
      title: 'MySQL Developer',
      experience: '3+ Years',
      technologies: ['MySQL', 'SQL', 'Database'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '5 Days',
      skillMatch: 85
    },
    {
      id: 28,
      title: 'MongoDB Developer',
      experience: '4+ Years',
      technologies: ['MongoDB', 'NoSQL', 'Database'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '2 Days',
      skillMatch: 88
    },
    {
      id: 29,
      title: 'PostgreSQL Developer',
      experience: '4+ Years',
      technologies: ['PostgreSQL', 'SQL', 'Database'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '4 Days',
      skillMatch: 86
    },
    {
      id: 30,
      title: 'GraphQL Developer',
      experience: '3+ Years',
      technologies: ['GraphQL', 'API', 'Node.js'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 84
    },
    {
      id: 31,
      title: 'REST API Developer',
      experience: '4+ Years',
      technologies: ['REST', 'API', 'Node.js'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '1 Week',
      skillMatch: 89
    },
    {
      id: 32,
      title: 'Microservices Developer',
      experience: '5+ Years',
      technologies: ['Microservices', 'Docker', 'Kubernetes'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '5 Days',
      skillMatch: 91
    },
    {
      id: 33,
      title: 'Agile Developer',
      experience: '4+ Years',
      technologies: ['Agile', 'Scrum', 'Development'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '2 Days',
      skillMatch: 87
    },
    {
      id: 34,
      title: 'CI/CD Engineer',
      experience: '4+ Years',
      technologies: ['CI/CD', 'Jenkins', 'GitLab'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '6 Days',
      skillMatch: 88
    },
    {
      id: 35,
      title: 'Git Developer',
      experience: '3+ Years',
      technologies: ['Git', 'GitHub', 'Version Control'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '3 Days',
      skillMatch: 85
    },
    {
      id: 36,
      title: 'Linux Developer',
      experience: '4+ Years',
      technologies: ['Linux', 'Unix', 'Shell Scripting'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '4 Days',
      skillMatch: 86
    },
    {
      id: 37,
      title: 'Windows Developer',
      experience: '4+ Years',
      technologies: ['Windows', 'C++', 'Visual Studio'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '1 Week',
      skillMatch: 84
    },
    {
      id: 38,
      title: 'Cloud Developer',
      experience: '5+ Years',
      technologies: ['Cloud', 'AWS', 'Azure'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '2 Days',
      skillMatch: 90
    },
    {
      id: 39,
      title: 'Azure Developer',
      experience: '4+ Years',
      technologies: ['Azure', 'Cloud', 'Microsoft'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '5 Days',
      skillMatch: 87
    },
    {
      id: 40,
      title: 'GCP Developer',
      experience: '4+ Years',
      technologies: ['GCP', 'Google Cloud', 'Cloud'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 88
    },
    {
      id: 41,
      title: 'Snowflake Developer',
      experience: '4+ Years',
      technologies: ['Snowflake', 'Data Warehouse', 'SQL'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '6 Days',
      skillMatch: 89
    },
    {
      id: 42,
      title: 'Tableau Developer',
      experience: '3+ Years',
      technologies: ['Tableau', 'Data Visualization', 'BI'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '2 Days',
      skillMatch: 85
    },
    {
      id: 43,
      title: 'Power BI Developer',
      experience: '3+ Years',
      technologies: ['Power BI', 'DAX', 'Data Visualization'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '4 Days',
      skillMatch: 86
    },
    {
      id: 44,
      title: 'Terraform Developer',
      experience: '4+ Years',
      technologies: ['Terraform', 'Infrastructure', 'IaC'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 88
    },
    {
      id: 45,
      title: 'DevSecOps Engineer',
      experience: '5+ Years',
      technologies: ['DevSecOps', 'Security', 'DevOps'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '1 Week',
      skillMatch: 91
    },
    {
      id: 46,
      title: 'API Developer',
      experience: '4+ Years',
      technologies: ['API', 'REST', 'GraphQL'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '5 Days',
      skillMatch: 87
    },
    {
      id: 47,
      title: 'Frontend Developer',
      experience: '3+ Years',
      technologies: ['Frontend', 'HTML', 'CSS'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '2 Days',
      skillMatch: 84
    },
    {
      id: 48,
      title: 'Backend Developer',
      experience: '4+ Years',
      technologies: ['Backend', 'API', 'Database'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '6 Days',
      skillMatch: 88
    },
    {
      id: 49,
      title: 'Full Stack Developer',
      experience: '5+ Years',
      technologies: ['Full Stack', 'React', 'Node.js'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '3 Days',
      skillMatch: 92
    },
    {
      id: 50,
      title: 'QA Engineer',
      experience: '3+ Years',
      technologies: ['QA', 'Testing', 'Automation'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '4 Days',
      skillMatch: 85
    },
    {
      id: 51,
      title: 'Test Automation Engineer',
      experience: '4+ Years',
      technologies: ['Testing', 'Selenium', 'Automation'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '2 Days',
      skillMatch: 86
    },
    {
      id: 52,
      title: 'Performance Engineer',
      experience: '4+ Years',
      technologies: ['Performance', 'Load Testing', 'Optimization'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '5 Days',
      skillMatch: 87
    },
    {
      id: 53,
      title: 'Security Engineer',
      experience: '5+ Years',
      technologies: ['Security', 'Cybersecurity', 'Penetration Testing'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '1 Week',
      skillMatch: 90
    },
    {
      id: 54,
      title: 'Cloud Security Engineer',
      experience: '4+ Years',
      technologies: ['Cloud Security', 'AWS', 'Azure'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 89
    },
    {
      id: 55,
      title: 'Network Engineer',
      experience: '4+ Years',
      technologies: ['Networking', 'TCP/IP', 'Routing'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '6 Days',
      skillMatch: 86
    },
    {
      id: 56,
      title: 'System Administrator',
      experience: '4+ Years',
      technologies: ['System Admin', 'Linux', 'Windows'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '2 Days',
      skillMatch: 85
    },
    {
      id: 57,
      title: 'Database Administrator',
      experience: '5+ Years',
      technologies: ['DBA', 'SQL Server', 'Oracle'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '4 Days',
      skillMatch: 88
    },
    {
      id: 58,
      title: 'Business Analyst',
      experience: '4+ Years',
      technologies: ['Business Analysis', 'Requirements', 'Documentation'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 84
    },
    {
      id: 59,
      title: 'Product Manager',
      experience: '5+ Years',
      technologies: ['Product Management', 'Agile', 'Scrum'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '5 Days',
      skillMatch: 87
    },
    {
      id: 60,
      title: 'Project Manager',
      experience: '5+ Years',
      technologies: ['Project Management', 'PMP', 'Agile'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '1 Week',
      skillMatch: 85
    },
    {
      id: 61,
      title: 'Scrum Master',
      experience: '4+ Years',
      technologies: ['Scrum', 'Agile', 'Project Management'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '2 Days',
      skillMatch: 86
    },
    {
      id: 62,
      title: 'Technical Writer',
      experience: '3+ Years',
      technologies: ['Technical Writing', 'Documentation', 'API Docs'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '6 Days',
      skillMatch: 83
    },
    {
      id: 63,
      title: 'UX Designer',
      experience: '4+ Years',
      technologies: ['UX Design', 'Figma', 'User Research'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '3 Days',
      skillMatch: 87
    },
    {
      id: 64,
      title: 'UI Designer',
      experience: '3+ Years',
      technologies: ['UI Design', 'Figma', 'Adobe XD'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '4 Days',
      skillMatch: 85
    },
    {
      id: 65,
      title: 'DevOps Architect',
      experience: '6+ Years',
      technologies: ['DevOps', 'Architecture', 'AWS'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '1 Week',
      skillMatch: 93
    },
    {
      id: 66,
      title: 'Solution Architect',
      experience: '6+ Years',
      technologies: ['Architecture', 'Design Patterns', 'Cloud'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '5 Days',
      skillMatch: 92
    },
    {
      id: 67,
      title: 'Enterprise Architect',
      experience: '7+ Years',
      technologies: ['Enterprise Architecture', 'TOGAF', 'Strategy'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '2 Days',
      skillMatch: 94
    },
    {
      id: 68,
      title: 'Data Architect',
      experience: '6+ Years',
      technologies: ['Data Architecture', 'Data Modeling', 'Big Data'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '6 Days',
      skillMatch: 91
    },
    {
      id: 69,
      title: 'Cloud Architect',
      experience: '6+ Years',
      technologies: ['Cloud Architecture', 'AWS', 'Azure'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '3 Days',
      skillMatch: 93
    },
    {
      id: 70,
      title: 'Software Architect',
      experience: '7+ Years',
      technologies: ['Software Architecture', 'Design Patterns', 'Microservices'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '1 Week',
      skillMatch: 95
    },
    {
      id: 71,
      title: 'Lead Developer',
      experience: '6+ Years',
      technologies: ['Leadership', 'Code Review', 'Mentoring'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '4 Days',
      skillMatch: 92
    },
    {
      id: 72,
      title: 'Senior Developer',
      experience: '5+ Years',
      technologies: ['Senior Development', 'Code Review', 'Best Practices'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '2 Days',
      skillMatch: 90
    },
    {
      id: 73,
      title: 'Principal Developer',
      experience: '8+ Years',
      technologies: ['Principal Development', 'Architecture', 'Leadership'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '5 Days',
      skillMatch: 96
    },
    {
      id: 74,
      title: 'Staff Developer',
      experience: '7+ Years',
      technologies: ['Staff Development', 'Technical Leadership', 'Innovation'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '3 Days',
      skillMatch: 94
    },
    {
      id: 75,
      title: 'Distinguished Engineer',
      experience: '10+ Years',
      technologies: ['Distinguished Engineering', 'Innovation', 'Research'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '1 Week',
      skillMatch: 98
    },
    {
      id: 76,
      title: 'Fellow Engineer',
      experience: '12+ Years',
      technologies: ['Fellow Engineering', 'Research', 'Innovation'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '6 Days',
      skillMatch: 99
    },
    {
      id: 77,
      title: 'VP Engineering',
      experience: '10+ Years',
      technologies: ['VP Engineering', 'Leadership', 'Strategy'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '2 Days',
      skillMatch: 97
    },
    {
      id: 78,
      title: 'CTO',
      experience: '15+ Years',
      technologies: ['CTO', 'Technology Strategy', 'Leadership'],
      location: 'World Wide, Remote',
      type: 'Contract',
      datePosted: '4 Days',
      skillMatch: 100
    },
    {
      id: 79,
      title: 'Chief Technology Officer',
      experience: '15+ Years',
      technologies: ['CTO', 'Technology Vision', 'Innovation'],
      location: 'World Wide, Remote',
      type: 'Full-time',
      datePosted: '1 Week',
      skillMatch: 100
    }
  ], []); // Empty dependency array since jobs data is static

  const filteredJobs = useMemo(() => {
    let filtered = jobs;

    // Filter by search keyword
    if (filters.searchKeyword) {
      const keyword = filters.searchKeyword.toLowerCase();
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(keyword) ||
        job.technologies.some(tech => tech.toLowerCase().includes(keyword))
      );
    }

    // Filter by technologies
    if (filters.technologies.length > 0) {
      filtered = filtered.filter(job =>
        filters.technologies.some(filterTech =>
          job.technologies.some(jobTech =>
            jobTech.toLowerCase().includes(filterTech.toLowerCase())
          )
        )
      );
    }

    // Filter by experience
    if (filters.minExperience || filters.maxExperience) {
      filtered = filtered.filter(job => {
        const jobExp = parseInt(job.experience);
        const minExp = parseInt(filters.minExperience) || 0;
        const maxExp = parseInt(filters.maxExperience) || 100;
        return jobExp >= minExp && jobExp <= maxExp;
      });
    }

    // Filter by date posted
    if (filters.datePosted !== 'all') {
      filtered = filtered.filter(job => {
        const daysAgo = parseInt(job.datePosted.split(' ')[0]);
        switch (filters.datePosted) {
          case '3days':
            return daysAgo <= 3;
          case 'week':
            return daysAgo <= 7;
          case 'month':
            return daysAgo <= 30;
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [jobs, filters]);

  const sortedJobs = useMemo(() => {
    const sorted = [...filteredJobs];
    // Default sort by skill match
    sorted.sort((a, b) => b.skillMatch - a.skillMatch);
    return sorted;
  }, [filteredJobs]);

  const displayedJobs = sortedJobs.slice(0, visibleJobs);
  const hasMoreJobs = visibleJobs < sortedJobs.length;

  const handleShowMore = () => {
    setVisibleJobs(prev => Math.min(prev + jobsPerPage, sortedJobs.length));
  };

  return (
    <div className="job-listings">
      <div className="job-listings-header">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search Keywords. Eg: (Python, Full Stack...)"
            value={filters.searchKeyword}
            onChange={(e) => onFilterChange('searchKeyword', e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="job-grid">
        {displayedJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {sortedJobs.length === 0 && (
        <div className="no-jobs">
          <p>No jobs found matching your criteria.</p>
        </div>
      )}

      {hasMoreJobs && (
        <div className="show-more-container">
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default JobListings;
