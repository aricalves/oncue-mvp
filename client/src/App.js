import React, { Component } from 'react';

import TruckForm from './components/TruckForm';
import JobForm from './components/JobForm';
import JobsList from './components/JobsList';
import { Truck, Job } from './models'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trucks: []
    };
    this.handleTruckSubmit = this.handleTruckSubmit.bind(this);
    this.handleJobSubmit = this.handleJobSubmit.bind(this);
    this.handleDeleteJob = this.handleDeleteJob.bind(this);
  }

  handleTruckSubmit(e) {
    e.preventDefault();
    const truck = new Truck(e.target['truck-name'].value, e.target['truck-start'].value, e.target['truck-end'].value);
    console.log(truck);
    e.target.reset();
  }
  
  handleJobSubmit(e) {
    e.preventDefault();
    const job = new Job(e.target['customer-name'].value, e.target.date.value, e.target['job-start'].value, e.target.duration.value);
    console.log(job);
    e.target.reset();
  }

  handleDeleteJob(job, e) {
    e.preventDefault();
    console.log(job);
  }

  render() {
    return (
      <div className="App">
        <div className='nav'>
          <h1>Oncue MVP</h1>
          <p> <strong>Created by, Aric Alves.</strong> Email: aric.alves2012@gmail.com </p>
        </div>
        <TruckForm handleTruckSubmit={this.handleTruckSubmit}/>
        <JobForm handleJobSubmit={this.handleJobSubmit}/>
        <JobsList trucks={this.state.trucks} handleDeleteJob={this.handleDeleteJob}/>
      </div>
    );
  }
}

export default App;
