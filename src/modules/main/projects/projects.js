import React, { useEffect, useState } from 'react';
import './projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Replace 'your-github-username' with your GitHub username
    fetch('https://api.github.com/users/Nagaraj-Sunagar/repos')
      .then(response => response.json())
      .then(data => {
        // Sort the repos by 'updated_at' (most recently updated first)
        const sortedRepos = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sortedRepos);
      })
      .catch(error => console.error('Error fetching repositories:', error));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-header">Projects I Worked On!!</h2>
      <div className="projects-list">
        {repos.map(repo => (
          <div key={repo.id} className="project-tile">
            <h3>{repo.name}</h3>
            <p>{repo.description ? repo.description : "A cool project without a description."}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
              View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
