import React from 'react';

const JobForm = () => (
  <div className='container'>
    <h3>Create Job</h3>
    <form>
      <p> Customer Name </p>
      <input defaultValue='Enter Customer Name' required></input>

      <p> Move Date </p>
      <input defaultValue='MM/DD/YY'></input>

      <p>Start Time</p>
      <select id="job-start-time" name="job-start-time" required>
        <option value="">Please choose</option>
        <option value="800">8 am</option>
        <option value="900">9 am</option>
        <option value="1000">10 am</option>
        <option value="1100">11 am</option>
        <option value="1200">12 pm</option>
        <option value="1300">1 pm</option>
        <option value="1400">2 pm</option>
        <option value="1500">3 pm</option>
        <option value="1600">4 pm</option>
        <option value="1700">5 pm</option>
        <option value="1800">6 pm</option>
        <option value="1900">7 pm</option>
        <option value="2000">8 pm</option>
      </select>

      <p> Estimated Duration </p>
      <input defaultValue='Enter Number of Hours' required></input>
      <button id='create-job'>Add Job</button>
    </form>
  </div>
);

export default JobForm;