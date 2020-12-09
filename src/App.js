import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render () {
    const movieData = [
      {
        title: "The Fellowship of the Ring",
        hours: "2",
        minutes: "58"
      }, 
      {
        title: "The Two Towers",
        hours: "2",
        minutes: "59"

      },
      {
        title: "The Return of the King",
        hours: "3",
        minutes: "21"

      }
    ]

    const movieComponents = movieData.map((d, index) => {
      // return <Movie title={d.title} hours={d.hours} minutes={d.minutes} key={'movie-' + index}/>
      return <Movie { ...d } key={'movie-' + index}/>
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            {movieComponents}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
