import React from 'react';

import Job from './Job';

const trucks = [{
  truck_name: 't1',
  jobs: [{
    customer_name: 'aric', date: '05/24/18', start_time: '800', duration: '4' }, {
    customer_name: 'oncue', date: '05/23/18', start_time: '1300', duration: '7'
  }]
}, {
  truck_name: 't2', jobs: [{
    customer_name: 'Robin', date: '07/28/18', start_time: '900', duration: '4'
  }]
}, {
  truck_name: 't3', jobs :[{
    customer_name: 'Vineet', date: '06/01/18', start_time: '1400', duration: '3'
  }]
}];

const JobsList = () => (
  <div className='container'>
    <h3>Trucks</h3>
    {trucks.map((truck, i) => (
      <Job key={i} {...truck}/>
    ))}
  </div>
);

export default JobsList;