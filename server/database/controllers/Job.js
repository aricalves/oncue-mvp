import { Op } from 'sequelize';

import { Job, sequelize } from '../../database';

exports.createJob = newJob => Job.create(newJob);

exports.getAll = () => Job.findAll()
  .then(jobs => jobs.map(job => job.dataValues));

// exports.findConflicts = job => sequelize.query(
//   `SELECT * FROM jobs j WHERE (j.date = '${job.date}'::date AND
//     (j.start_time BETWEEN ${job.start_time} AND ${job.duration}) OR
//     (j.duration BETWEEN ${job.start_time} AND ${job.duration}));`)
//     .spread(conflicts => conflicts)
//     .catch(err => err);

exports.findConflicts = job => {
  const time_range = [];
  for (let i = job.start_time; i <= job.duration; i += 100) time_range.push(i);
  return Job.findAll({
    where: {
      date: {
        $eq: sequelize.cast(job.date, 'date')
      },
      [Op.or]: [{
        start_time: time_range
      }, {
        duration: time_range
      }]
    }
  });
}

exports.deleteJob = id => Job.destroy({ where: { id } });
