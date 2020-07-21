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
          language: 'Tells you your chances of being infected from covid19.',
          site: `/amiinfected`,
          url: `https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?cs=srgb&dl=concept-of-covid-19-in-red-background-4031867.jpg&fm=jpg`
        },
        {
          name: 'Simple Weather',
          id: 'pr2',
          language: 'Displays weather in a minimallistic manner.',
          site: `/weather`,
          url: `https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
        },
        {
          name: 'Router Library',
          id: 'pr3',
          language: 'Router library that handles SPA routing in vanilla JS.',
          site: `/routerjs`,
          url: `https://moduscreate.com/wp-content/uploads/2018/04/extjs-react-how-to-configure-routes-00.jpg`
        },
        {
          name: 'Flappy Bird',
          id: 'pr4',
          language: 'flappy bird pygame.',
          site: `https://github.com/RohanLodhi/flappy`,
          url: `https://www.gannett-cdn.com/-mm-/26950e92aa73a383259467887fe6ca0c4ab636b2/c=0-758-1536-1623/local/-/media/Indianapolis/Indianapolis/2014/02/08//1391895756000-photo.PNG?width=660&height=372&fit=crop&format=pjpg&auto=webp`
        },
        {
          name: 'ToDo pwa',
          id: 'pr5',
          language: 'Simple and easy to use todo app.',
          site: `/todo`,
          url: `http://icon-library.com/images/todo-list-icon/todo-list-icon-20.jpg`
        },
        {
          name: 'Portfolio',
          id: 'pr6',
          language: 'Clean and nice portfolio website.',
          site: `/portfolio`,
          url: `https://images.pexels.com/photos/2442888/pexels-photo-2442888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
        },
        {
          name: 'Hangman',
          id: 'pr7',
          language: 'Hangman game in py and c++.',
          site: `https://github.com/RohanLodhi/hangman-school`,
          url: `https://media.istockphoto.com/photos/hangman-sketched-on-blackboard-picture-id466313780?k=6&m=466313780&s=612x612&w=0&h=Wpx_vgPCyt3oEJ5CIAhHxVfWlqdRfXrAfsHX4MbPfe8=`
        },
        {
          name: 'Sudoku solver',
          id: 'pr8',
          language: 'Sudoku solver that uses back tracking algorithm to solve.',
          site: `https://devx.tk/sudoku`,
          url: `https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
        },
        {
          name: 'Reactango',
          id: 'pr9',
          language: 'Coding challenges website for a discord server.',
          site: `https://reactango.tk`,
          url: `https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
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
