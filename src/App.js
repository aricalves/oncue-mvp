import React, { Component } from 'react';

import TruckForm from './components/TruckForm';
import JobForm from './components/JobForm';
import JobsList from './components/JobsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='nav'>
          <h1>Oncue MVP</h1>
          <p> Created by, Aric Alves. aric.alves2012@gmail.com </p>
        </div>
        <TruckForm />
        <JobForm />
        <JobsList />
      </div>
    );
  }
}

export default App;
