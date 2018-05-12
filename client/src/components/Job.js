import React from 'react';

const Job = (props) => (
  <div className='job-container'>
    <p>{`${props.name} Assignments`}</p>
    <ul>
      {props.jobs.map(job => {
        return (
          <li key={job.id}>
            <span>Customer: {job.customer_name}, Date: {job.date} Start: {job.start_time} Duration: {job.duration} hours</span>
            <span id='delete' onClick={(e) => props.handleDeleteJob(job.id, e)}>&times;</span>
          </li>
        )
      })}
    </ul>
  </div>
);

export default Job;