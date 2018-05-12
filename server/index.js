import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import 'babel-polyfill';

import db from './database';
import truckControllers from './database/controllers/Truck';
import JobControllers from './database/controllers/Job';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const staticFiles = express.static(path.join(__dirname, '../../client/build'));

app.use(staticFiles);

app.options('/', (req, res) => res.send('GET, POST, DELETE, OPTIONS'));

const handleGetTrucks = (req, res) =>
  truckControllers.getAll()
    .then(trucksWithJobs => res.send(trucksWithJobs))
    .catch(e => res.status(503).send(e));

app.get('/trucks', handleGetTrucks);

app.post('/trucks', (req, res) => {
  const newTruck = req.body;
  truckControllers.createTruck(newTruck)
    .then(() => handleGetTrucks(req, res))
    .catch(e => res.status(503).send(e));
});

app.post('/jobs', async (req, res) => {
  const jobPropspect = req.body;
  const trucks = await truckControllers.getAll();

  if (trucks.length < 1) {
    // Status code 204, no content
    return res.status(204).send(Error('No Trucks Available.'));
  }
  // if trucks exist without jobs, assign job to first truck
  const availableResources = trucks.filter(truck => truck.jobs.length === 0);
  if (availableResources.length) {
    jobPropspect.truckId = availableResources[0].id;
    return JobControllers.createJob(jobPropspect)
      .then(() => handleGetTrucks(req, res))
      .catch(e => res.status(503).send(e));
  }
  res.send(Error('Something went wrong'));
  // if all trucks have jobs
    // compare date, start time, and duration to each truck's assigned jobs
    // if we find a truck with an open slot
      // asssign the job to the truck
      // send client updated trucks w/ jobs list; code:200
  // else
    // send client an error, job cannot be created 'something went wrong'
});

app.delete('/jobs/:id', (req, res) => {
  const jobId = req.params.id;
  return JobControllers.deleteJob(jobId)
    .then(() => handleGetTrucks(req, res))
    .catch(e => res.status(503).send(e));
  res.send('ok')
});

app.use('/*', staticFiles);

app.all('*', (req, res) => res.redirect('/'));

db.syncTables()
.then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
.catch(err => console.log(err));
