import { Truck } from '../../database';

exports.createTruck = newTruck => Truck.create(newTruck);

exports.getAll = () => Truck.findAll({ include: 'jobs' })
  .then(trucks => trucks.map(truck => truck.dataValues));

exports.findAvailableTruck = (start, end, conflicts = []) => Truck.findAll({
  where: {
    id: {
      $notIn: conflicts
    },
    start_time: {
      $lte: start
    },
    end_time: {
      $gte: end
    }
  }
});

  