import React from 'react';

const CvSection: React.FC = () => {
  return (
    <section id="cv">
      <h2>My CV</h2>
      <p>Télécharger mon CV ici ou visionner le directement:</p>
      <a href="/cvfrancais.pdf" download>Download CV</a>
      <iframe src="cvfrancais.pdf" width="100%" height="600px" title="CV"></iframe>
    </section>
  );
};

export default CvSection;
