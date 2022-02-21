import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ToDoList from './To-Do-List/ToDoList';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
        <h4>Components</h4>
          <ul id="componentList">
            <li>
              <Link to="/todolist">To-Do List</Link>
            </li>
          </ul>
      </div>
    );
}


export default App;
