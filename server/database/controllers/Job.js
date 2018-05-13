import { Job, sequelize } from '../../database';

exports.createJob = newJob => Job.create(newJob);

exports.getAll = () => Job.findAll()
  .then(jobs => jobs.map(job => job.dataValues));

exports.findJobsByDate = newJobDate => sequelize.query(`SELECT * FROM jobs j WHERE j.date != '${newJobDate}'::date;`)
    .then(res => res[0])
    .catch(err => err);

exports.deleteJob = id => Job.destroy({ where: { id } });