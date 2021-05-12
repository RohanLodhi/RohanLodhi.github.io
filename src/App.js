import React from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      projects: [
        {
          name: 'Corona Test',
          id: 'pr1',
          language: 'Tells you your chances of being infected from covid19 based on your symptoms.',
          site: `/amiinfected`,
          langs: `HTML5, CSS3 & Vanilla JS`
        },
        {
          name: 'Simple Weather',
          id: 'pr2',
          language: 'Displays weather in a minimallistic manner using AccuWeather API.',
          site: `/weather`,
          langs: `HTML5, CSS3 & Vanilla JS`
        },
        {
          name: 'Router Library',
          id: 'pr3',
          language: 'Router library that handles SPA routing in vanilla JS.',
          site: `/routerjs`,
          langs: `Vanilla JS`
        },
        {
          name: 'Flappy Bird',
          id: 'pr4',
          language: 'A single player desktop flappy bird game.',
          site: `https://github.com/RohanLodhi/flappy`,
          langs: `Python3 & PyGames`
        },
        {
          name: 'To Do pwa',
          id: 'pr5',
          language: 'A progressive web app for your to do lists.',
          site: `/todo`,
          langs: `HTML5, CSS3 & Vanilla JS`
        },
        {
          name: 'Portfolio',
          id: 'pr6',
          language: 'A simple and minimalist portfolio website showcasing my skills.',
          site: `/portfolio`,
          langs: `HTML5, CSS3 & Vanilla JS`
        },
        {
          name: 'Hangman',
          id: 'pr7',
          language: 'Single player CLI hangman games for school.',
          site: `https://github.com/RohanLodhi/hangman-school`,
          langs: ` Python3 & C++ `
        },
        {
          name: 'Sudoku solver',
          id: 'pr8',
          language: 'Sudoku solver that uses back tracking algorithm to solve.',
          site: `/sudoku`,
          langs: `HTML5, CSS3 & Vanilla JS`
        },
        {
          name: 'Reactango',
          id: 'pr9',
          language: 'Coding challenges website for a discord server.',
          site: `https://reactango.tk`,
          langs: `HTML5, CSS3 & ReactJS`
        }
      ],
      searchField: ''
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render(){
    const {projects, searchField} = this.state;
    const filteredMonsters = projects.filter(project =>(
      project.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <div className="App">
        <h1 className='title'>MY PROJECTS</h1>
        <SearchBox 
          placeholder = 'search projects'
          handleChange = {this.handleChange}
        />
        <CardList projects={filteredMonsters} />
      </div>
    );
  }
}

export default App;
