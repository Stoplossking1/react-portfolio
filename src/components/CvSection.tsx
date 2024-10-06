import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const CvSection: React.FC = () => {
  // Use a responsive default scale based on screen width
  const getResponsiveScale = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1200) return 1.5; // Larger screens get a higher scale
    if (screenWidth > 768) return 1.25; // Medium screens get a moderate scale
    return 1.0; // Smaller screens or mobile default to 1.0 scale
  };

  return (
    <section id="cv" style={sectionStyle}>
      <h2>My CV</h2>
      <p>Télécharger mon CV ici ou visionner le directement:</p>
      <a href="/react-portfolio/cvfrancais.pdf" download>Télécharger CV</a>

      <div style={pdfViewerContainerStyle}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer 
            fileUrl="/react-portfolio/cvfrancais.pdf"
            defaultScale={getResponsiveScale()}  // Dynamically set the scale based on screen size
          />
        </Worker>
      </div>
    </section>
  );
};

// Style objects
const sectionStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '20px',
};

const pdfViewerContainerStyle = {
  width: '90%',   // Make sure the container takes up most of the screen width
  maxWidth: '900px', // Set a max width so it doesn’t overflow on larger screens
  height: '80vh',  // Control the height to fit most of the viewport
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'auto',  // Allow scrolling for smaller screens
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',  // Optional shadow for aesthetics
};

export default CvSection;
