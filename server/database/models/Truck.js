import Sequelize from 'sequelize';

export default Truck = Sequelize.define('truck', {
  name: Sequelize.STRING,
  start_time: Sequelize.INTEGER,
  end_time: Sequelize.INTEGER
});