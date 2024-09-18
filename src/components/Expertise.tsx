import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons'; // Corrected import for React icon
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons'; // Keep these as is
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const frontendStack = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Postman",
    "Vue.js"
];

const backendStack = [
    "NodeJS",
    "Swagger-UI",
    "ExpressJS",
    "Trello",
    "SCRUM",
    "AGILE"
];

const dataScienceStack = [
    "SQL",
    "mongoDB",
    "Scala",
    "Firebase",
    "Hadoop",
    "Hive",
    "MariaDB",
    "Hbase",
    "Spark"

];

const programmingLanguages = [
    "Python",
    "Java",
    "JavaScript",
    "Bash",
    "Kotlin",
    "C++",
    "SSH",
    "PowerShell",
    " Mocha", 
    "jQuery", 
    "XML",
    "JSON"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    {/* Full Stack Development Section */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Development</h3>
                        <p>Specializing in full-stack web development, I build dynamic, responsive web applications with proficiency in both frontend and backend technologies.</p>
                        
                        <h4>Frontend Development</h4>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {frontendStack.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>

                        <h4>Backend Development</h4>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {backendStack.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Data Science Section */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Data Science</h3>
                        <p>I possess strong skills in data science, utilizing SQL, NoSQL databases, and big data frameworks to process, analyze, and interpret large datasets for actionable insights.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {dataScienceStack.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Programming Languages Section */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <h3>Programming Languages</h3>
                        <p>Proficient in multiple programming languages, I use them across various domains, from web development, to system programming and even Android development.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Languages:</span>
                            {programmingLanguages.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
