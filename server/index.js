import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'local') {
  require('babel-polyfill');
}

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
    .catch(e => res.status(503).send('Error getting trucks.\n', e));

app.get('/trucks', handleGetTrucks);

app.post('/trucks', (req, res) => {
  const newTruck = req.body;
  truckControllers.createTruck(newTruck)
    .then(() => handleGetTrucks(req, res))
    .catch(e => res.status(503).send(e));
});

app.post('/jobs', async (req, res) => {
  const jobProposal = req.body;
  // find all conflicting jobs, gather array with conflicting truck ids
  const conflictingTruckIds = await JobControllers.findConflicts(jobProposal)
    .map(conflict => conflict ? conflict.dataValues.truckId : []);
  
  const availableTrucks = await truckControllers.findAvailableTruck(jobProposal.start_time, jobProposal.duration, conflictingTruckIds)
    .map(truck => truck ? truck.dataValues.id : false);

  if (availableTrucks.length) {
    jobProposal.truckId = availableTrucks[0];
    return JobControllers.createJob(jobProposal)
      .then(() => handleGetTrucks(req, res))
      .catch(e => res.send(e));
  }
  res.send(Error('Can\'t book your job at this time.'));
});

app.delete('/jobs/:id', (req, res) => {
  const jobId = req.params.id;
  return JobControllers.deleteJob(jobId)
    .then(() => handleGetTrucks(req, res))
    .catch(e => res.status(503).send(e));
});

app.use('/*', staticFiles);

app.all('*', (req, res) => res.redirect('/'));

db.syncTables()
.then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
.catch(err => console.log(err));
