import React, { Component } from 'react';

import TruckForm from './components/TruckForm';
import JobForm from './components/JobForm';
import JobsList from './components/JobsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className='nav'>
          <h1>Oncue MVP</h1>
          <p> <strong>Created by, Aric Alves.</strong> Email: aric.alves2012@gmail.com </p>
        </div>
        <TruckForm handleSubmit={this.handleSubmit}/>
        <JobForm />
        <JobsList />
      </div>
    );
  }
}

export default App;
