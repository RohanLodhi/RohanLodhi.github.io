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
          language: 'Written in JavaScript',
          site: `/amiinfected`,
          url: `https://cdn.thewire.in/wp-content/uploads/2020/03/18145644/2020-03-18T080827Z_1_LYNXMPEG2H0RA_RTROPTP_4_HEALTH-CORONAVIRUS-USA-180x180.jpg`
        },
        {
          name: 'Simple Weather',
          id: 'pr2',
          language: 'Written in JavaScript',
          site: `/weather`,
          url: `https://raw.githubusercontent.com/RohanLodhi/weather/d8690115ecb8cdd7a473e5031bd75f125bbb4fdc/imgs/night.svg`
        },
        {
          name: 'Router Library',
          id: 'pr3',
          language: 'Written in JavaScript',
          site: `/routerjs`,
          url: `https://moduscreate.com/wp-content/uploads/2018/04/extjs-react-how-to-configure-routes-00.jpg`
        },
        {
          name: 'Flappy Bird',
          id: 'pr4',
          language: 'Python with Pygames',
          site: `https://github.com/RohanLodhi/flappy`,
          url: `https://cdn.thedailymash.co.uk/wp-content/uploads/20190309170536/flappybird425-180x180.jpg`
        },
        {
          name: 'ToDo pwa',
          id: 'pr5',
          language: 'Written in JavaScript',
          site: `/todo`,
          url: `http://icon-library.com/images/todo-list-icon/todo-list-icon-20.jpg`
        },
        {
          name: 'Portfolio',
          id: 'pr6',
          language: 'HTML and CSS',
          site: `/portfolio`,
          url: `https://d28wu8o6itv89t.cloudfront.net/images/portfolioimagepng-1539955824667.png`
        },
        {
          name: 'Hangman',
          id: 'pr7',
          language: 'Python and C++',
          site: `https://github.com/RohanLodhi/hangman-school`,
          url: `https://media.istockphoto.com/photos/hangman-sketched-on-blackboard-picture-id466313780?k=6&m=466313780&s=612x612&w=0&h=Wpx_vgPCyt3oEJ5CIAhHxVfWlqdRfXrAfsHX4MbPfe8=`
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
