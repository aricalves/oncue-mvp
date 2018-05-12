import React from 'react';

const parseTime = (military) => {
  if (military <= 900) {
    return `${military * 0.01} am`
  }
  if (military > 1200) {
    return `${(military - 1200) * 0.01} pm`
  }
  return `${military * 0.01} am`
};

const Job = (props) => (
  <div className='job-container'>
    <p>{`${props.name} Assignments`}</p>
    <ul>
      {props.jobs.map(job => {
        return (
          <li key={job.id}>
            <span>Customer: {job.customer_name}, Date: {job.date.substring(0, 10)} Start: {parseTime(job.start_time)} Duration: {job.duration} hours</span>
            <span id='delete' onClick={(e) => props.handleDeleteJob(job.id, e)}>&times;</span>
          </li>
        )
      })}
    </ul>
  </div>
);

export default Job;