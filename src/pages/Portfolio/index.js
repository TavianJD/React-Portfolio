import React from 'react'; 
// import projects from src
import projects from '../../projects.json'

function ProjectCard() {
    return (
        <div className="projects">
          <ul className="projectlist">
           {projects.map((project) => (
            <li className="project" key={project.id}>
                <img src={project.image} className="projectimg" alt={project.alt} />
             <h3>{project.name}</h3>
                <p>{project.description}</p>
              <a href={project.deployedapp}>
                <button>Check it out here!</button>
              </a>
              <a href={project.github}>
                <button>GitHub Repo</button>
              </a>
            </li>
           ))}
          </ul>
        </div>
       );
}

export default ProjectCard;