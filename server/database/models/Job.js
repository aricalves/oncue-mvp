import Sequelize from 'sequelize';

export default Job = Sequelize.define('job', {
  customer_name: Sequelize.STRING,
  date: Sequelize.DATE,
  start_time: Sequelize.INTEGER,
  duration: Sequelize.INTEGER
});