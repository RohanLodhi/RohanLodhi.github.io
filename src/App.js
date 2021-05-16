import React, { useState } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';
import projectsData from './data';

const App = () => {
  const [projects, setProjects] = useState(projectsData);
  const [searchfield, setSearchfield] = useState('');

  const handleChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    if (
      project.name.toLowerCase().includes(searchfield.toLowerCase()) ||
      project.langs.toLowerCase().includes(searchfield.toLowerCase())
    ) {
      return project;
    }
  });

  return (
    <div className="App">
      <h1 className="title">MY PROJECTS</h1>
      <SearchBox placeholder="search projects" handleChange={handleChange} />
      <CardList projects={filteredProjects} />
    </div>
  );
};

export default App;
