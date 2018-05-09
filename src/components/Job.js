import React from 'react';

const Job = (props) => (
  <div className='job-container'>
    <p>{`${props.truck_name} Assignments`}</p>
    <ul>
      {props.jobs.map((job, i) => {
        return (
          <li key={i}>
            <span>Customer: {job.customer_name}, Date: {job.date} Start: {job.start_time} Duration: {job.duration} hours</span>
            <span id='delete'>&times;</span>
          </li>
        )
      })}
    </ul>
  </div>
);

export default Job;