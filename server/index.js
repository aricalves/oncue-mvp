import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import db from './database';
import truckControllers from './database/controllers/Truck';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const staticFiles = express.static(path.join(__dirname, '../../client/build'));

app.use(staticFiles);

app.options('/', (req, res) => res.send('GET, POST, DELETE, OPTIONS'));

// const getJobs = async (truck, next) => {
//   const jobs = await truck.getJobs();
//   truck.dataValues.jobs = jobs;
//   next(null, truck);
// };

app.get('/trucks', (req, res) => {
  truckControllers.getAll()
    .then(trucks => trucks.map(truck => truck.dataValues))
    .then(({ data }) => res.send(data))
    .catch(e => res.status(503).send(e));
});

app.post('/trucks', (req, res) => {
  const newTruck = req.body;

  truckControllers.createTruck(newTruck)
    .then(() => truckControllers.getAll())
    .then(trucks =>
      trucks.map(truck => {
        truck.dataValues.jobs = [{ customer_name: 'a', start_time: 700, duration: 5, date: 'today' }];
        return truck;
      }))
    .then(trucks => res.send(trucks))
    .catch(e => res.send(e));
});

app.post('/jobs', (req, res) => {
  console.log(req.body);
  // if no trucks exist
    // send err('No Trucks available')
    // Status code 200
  // if trucks exist without jobs, assign job to first truck
    // send client all trucks with jobs; code: 200
  // if all trucks have jobs
    // compare date, start time, and duration to each truck's assigned jobs
    // if we find a truck with an open slot
      // asssign the job to the truck
      // send client updated trucks w/ jobs list; code:200
  // else
    // send client an error, job cannot be created 'something went wrong'
  res.send('ok');
});

app.delete('/jobs', (req, res) => {
  console.log(req.body);
  // find job by id
  // if not found, send err
  // else delete job from db and remove reference from job's assigned truck
  // send client updated trucks w/ jobs list
  res.send('ok');
});

app.use('/*', staticFiles);

app.all('*', (req, res) => res.redirect('/'));

db.syncTables()
.then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
.catch(err => console.log(err));
