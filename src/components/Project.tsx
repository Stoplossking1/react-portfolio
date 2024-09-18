import React from "react";
import imageTP2 from '../assets/images/imageTP2.png';
import imageBarbershop from '../assets/images/imageBarberShop.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Stoplossking1/Barbershop-project" target="_blank" rel="noreferrer"><img src={imageBarbershop} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Stoplossking1/Barbershop-project" target="_blank" rel="noreferrer"><h2>Barber Shop Search Website</h2></a>
                <p>Designed and Developed a HTML/CSS/JS website to reunite Barbershops and clients on a website to facilitate buisnesses promoting their shops </p>
            </div>
            <div className="project">
                <a href="https://e2289648.azurewebsites.net/" target="_blank" rel="noreferrer"><img src={imageTP2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Stoplossking1/Crunchyroll-Alternative---Anime-Streaming-App-" target="_blank" rel="noreferrer"><h2>React Anime Streaming website</h2></a>
                <p>Designed, developed, and launched a React anime streaming app with functionalities such as authentification, history, viewing episodes and searches </p>
            </div>
        </div>
    </div>
    );
}

export default Project;