import React from 'react';

const TruckForm = (props) => (
  <div className='container'>
    <h3>Create Truck</h3>
    <form onSubmit={props.handleTruckSubmit} name='truck-form'>
      <p> Name </p>
      <input placeholder='Enter Truck Name' type='text' name='truck-name' required></input>

      <p>Start Time</p>
      <select id="truck-start-time" name="truck-start" required>
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

      <p>End Time</p>
      <select id="truck-end-time" name="truck-end" required>
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
      <button value='submit' type='submit' id='create-truck'>Create Truck</button>
    </form>
  </div>
);

export default TruckForm;