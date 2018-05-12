import { Job } from '../../database';

exports.createJob = newJob => Job.create(newJob);
exports.getAll = () => Job.findAll()
  .then(jobs => jobs.map(job => job.dataValues));
exports.deleteJob = id => Job.destroy({ where: { id } });