import React, { Component } from 'react';

import TruckForm from './components/TruckForm';
import JobForm from './components/JobForm';
import JobsList from './components/JobsList';

class Truck {
  constructor(name, start, end) {
    this.name = name;
    this.start = start;
    this.end = end;
  }
}

class Job {
  constructor(customerName, date, start, duration) {
    this.customerName = customerName;
    this.date = date;
    this.start = start;
    this.duration = duration;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleTruckSubmit = this.handleTruckSubmit.bind(this);
    this.handleJobSubmit = this.handleJobSubmit.bind(this);
  }

  handleTruckSubmit(e) {
    e.preventDefault();
    const truck = new Truck(e.target['truck-name'].value, e.target['truck-start'].value, e.target['truck-end'].value);
    console.log(truck);
  }

  handleJobSubmit(e) {
    e.preventDefault();
    const job = new Job(e.target['customer-name'].value, e.target.date.value, e.target['job-start'].value, e.target.duration.value);
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
        <JobsList />
      </div>
    );
  }
}

export default App;
