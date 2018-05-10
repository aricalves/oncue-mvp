import React from 'react';

import Job from './Job';

const JobsList = (props) => (
  <div className='container'>
    <h3>Trucks</h3>
    {props.trucks.map((truck, i) => (
      <Job handleDeleteJob={props.handleDeleteJob} key={i} {...truck}/>
    ))}
  </div>
);

export default JobsList;