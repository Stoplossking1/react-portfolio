import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
      <a href="https://github.com/Stoplossking1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      <a href="https://www.linkedin.com/in/jordan-hodali-57a80a238/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      <p> Thanks Yuji!</p>
      </div>
    </footer>
  );
}

export default Footer;