import { Truck } from '../../database';

exports.createTruck = (newTruck) => Truck.create(newTruck);
exports.getAll = () => Truck.findAll();