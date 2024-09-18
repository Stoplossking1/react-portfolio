import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Added graduation cap icon
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Collège de Maisonneuve</h3>
            <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
            <p>
              Studying Full-stack Web Development, databases, and programming languages.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--project"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">First Collaborative Project</h3>
            <h4 className="vertical-timeline-element-subtitle">Team Project</h4>
            <p>
              Built a Fully functionning drone from scratch, including the software and hardware with multiple functionalities.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--future"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2025 (planned)"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">First Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Upcoming</h4>
            <p>
              Planning to join my first internship to gain practical industry experience.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2025 - TBD"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Concordia University</h3>
            <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
            <p>
              Planning to study Software Engineering and pursue a master's in AI.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
