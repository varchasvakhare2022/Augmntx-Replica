# AugmntX Remote Jobs - React Replica

A professional replica of the AugmntX remote jobs webpage built with React. This project demonstrates modern React development practices with a clean, responsive design.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Advanced Filtering**: Filter jobs by technology, experience level, date posted, and location
- **Search Functionality**: Search jobs by keywords and technologies
- **Sorting Options**: Sort jobs by skill match percentage
- **Professional UI**: Clean, modern design matching the original website
- **Interactive Elements**: Hover effects, smooth transitions, and intuitive user interface

## Technologies Used

- React 18
- CSS3 with modern features
- Responsive Grid Layout
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header component
│   ├── Header.css
│   ├── Sidebar.js         # Filter sidebar component
│   ├── Sidebar.css
│   ├── JobListings.js     # Main job listings component
│   ├── JobListings.css
│   ├── JobCard.js         # Individual job card component
│   └── JobCard.css
├── App.js                 # Main application component
├── App.css               # Main application styles
├── index.js              # Application entry point
└── index.css             # Global styles
```

## Features Implemented

### Header
- Responsive navigation with mobile menu
- Company logo and branding
- Navigation links with hover effects
- Mobile-friendly hamburger menu

### Sidebar Filters
- Date posted filter (Past 3 Days, Week, Month, All)
- Technology/Tools filter with search
- Years of experience range filter
- Location filter
- Expandable technology list

### Job Listings
- Grid layout with responsive design
- Search functionality
- Sorting by skill match percentage
- Real-time filtering
- Professional job cards with:
  - Job title and experience requirements
  - Technology tags
  - Skill match progress bar
  - Location and job type information
  - Share functionality

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface elements
- Optimized for all screen sizes

## Customization

The application is built with modular components and can be easily customized:

- **Colors**: Modify CSS custom properties in the stylesheets
- **Layout**: Adjust grid layouts and spacing in CSS files
- **Data**: Update job data in the JobListings component
- **Styling**: Modify component-specific CSS files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized React components with proper state management
- Efficient filtering and sorting algorithms
- Minimal re-renders with useMemo hooks
- Clean CSS with minimal specificity

## Future Enhancements

Potential improvements for future versions:
- Backend integration for real job data
- User authentication and profiles
- Advanced filtering options
- Job application functionality
- Dark mode support
- Accessibility improvements

## Contributing

This is a demonstration project. For any improvements or suggestions, please create an issue or pull request.

## License

This project is for educational and demonstration purposes.
