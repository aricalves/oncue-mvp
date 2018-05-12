import { Truck, Job } from '../../database';

exports.createTruck = (newTruck) => Truck.create(newTruck);
exports.getAll = () => Truck.findAll({ include: 'jobs' });