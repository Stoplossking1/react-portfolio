import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/107491459?s=400&u=4be440a43ad1b21ae1d277f9310d1edcf49ffeb8&v=4" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Stoplossking1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jordan-hodali-57a80a238/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jordan Hodali</h1>
          <p>Full Stack Technician</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/stoplossKing1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jordan-hodali-57a80a238/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;