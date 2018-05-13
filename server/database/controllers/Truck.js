import { Truck, sequelize } from '../../database';

exports.createTruck = newTruck => Truck.create(newTruck);

exports.getAll = () => Truck.findAll({ include: 'jobs' })
  .then(trucks => trucks.map(truck => truck.dataValues));
