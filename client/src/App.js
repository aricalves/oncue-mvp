import React, { Component } from 'react';
import axios from 'axios';

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
    this.formatResponseOrErr = this.formatResponseOrErr.bind(this);
    this.handleTruckSubmit = this.handleTruckSubmit.bind(this);
    this.handleJobSubmit = this.handleJobSubmit.bind(this);
    this.handleDeleteJob = this.handleDeleteJob.bind(this);
  }

  formatResponseOrErr({ data }) {
    if (!Array.isArray(data)) {
      throw Error;
    }
    return { trucks: data };
  }

  componentDidMount() {
    axios.get('/trucks')
      .then(response => this.formatResponseOrErr(response))
      .then(newState => this.setState(newState))
      .catch(e => alert('Cannot get trucks at this time. Please try again later.'))
  }

  handleTruckSubmit(e) {
    e.preventDefault();
    const truck = new Truck(e.target['truck-name'].value, e.target['truck-start'].value, e.target['truck-end'].value);
    
    axios.post('/trucks', truck)
      .then(response => this.formatResponseOrErr(response))
      .then(newState => this.setState(newState))
      .catch(e => alert('Cannot get trucks at this time. Please try again later.'));

    e.target.reset();
  }
  
  handleJobSubmit(e) {
    e.preventDefault();
    const jobEnd = (e.target.duration.value * 100) + Number(e.target['job-start'].value);
    const job = new Job(e.target['customer-name'].value, e.target.date.value, e.target['job-start'].value, jobEnd); // eslint-disable-line

    const trucksWithoutJobs = this.state.trucks.filter(truck => truck.jobs.length === 0);
    if (trucksWithoutJobs.length) {
      job.truckId = trucksWithoutJobs[0].id;
      axios.post('/jobs', job)
        .then(response => this.formatResponseOrErr(response))
        .then(newState => this.setState(newState))
        .catch(e => alert('Sorry, we can\'t book your job at this time.'));
    } else {
      alert('sorry pal');
    }


    e.target.reset();
  }

  handleDeleteJob(jobId, e) {
    e.preventDefault();
    axios.delete(`/jobs/${jobId}`)
      .then(response => this.formatResponseOrErr(response))
      .then(newState => this.setState(newState))
      .catch(e => alert('Sorry, we can\'t delete that job at this time.'))
  }

  render() {
    return (
      <div className="App">
        <div className='nav'>
          <h1>Oncue MVP</h1>
          <p><strong>Created by, Aric Alves.</strong><br/>aric.alves2012@gmail.com</p>
        </div>
        <TruckForm handleTruckSubmit={this.handleTruckSubmit}/>
        <JobForm handleJobSubmit={this.handleJobSubmit}/>
        <JobsList trucks={this.state.trucks} handleDeleteJob={this.handleDeleteJob}/>
      </div>
    );
  }
}

export default App;
