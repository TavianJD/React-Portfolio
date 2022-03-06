import React from 'react'; 
// import projects from src
import projects from '../../assets/projects/projects.json'

function ProjectCard() {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={projects.name} src={projects.image}/>
        </div>
        <div className="content">
          <ul>
            <li>
              <p className="project-title">{projects.name}</p>
            </li>
            <li>
            <p className="project-description">{projects.description}</p>
            </li>
            <li>
              <div className="project-icons">
              <a href={projects.github}><img src="https://img.icons8.com/ios/40/000000/github.png" alt="github-icon" id="port-icon"/></a> 
              <a href={projects.deployedapp}><img src="https://img.icons8.com/metro/35/000000/cursor.png" alt="app-icon" id="port-icon"/></a> 
              </div>
            </li>
            <li>
            {projects.skills}
            </li>
          </ul>
        </div>
      </div>
    );
}

export default ProjectCard;