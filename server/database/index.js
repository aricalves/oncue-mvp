import Sequelize from 'sequelize';
import pg from 'pg';
import 'dotenv';

let sequelize;
if (process.env.NODE_ENV === 'production') {
  const match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
  sequelize = new Sequelize(match[5], match[1], match[2], {
    dialect: 'postgres',
    protocol: 'postgres',
    port: match[4],
    host: match[3],
    logging: false,
    dialectOptions: {
      ssl: true
    }
  });
} else {
  sequelize = new Sequelize('oncue', process.env.DB_USER, process.env.DB_PASS, { host: process.env.DB_HOST, logging: false, dialect: 'postgres' });
}

sequelize.authenticate()
  .then(() => process.env.NODE_ENV === 'production' ? null : console.log('DB connection successful'))
  .catch(err => console.error('Unable to connect to the database:', err));

const Truck = sequelize.define('truck', {
  name: Sequelize.STRING,
  start_time: Sequelize.INTEGER,
  end_time: Sequelize.INTEGER
});

const Job = sequelize.define('job', {
  customer_name: Sequelize.STRING,
  date: Sequelize.DATE,
  start_time: Sequelize.INTEGER,
  duration: Sequelize.INTEGER
});

Truck.hasMany(Job, { as: 'jobs' });

exports.syncTables = () => Promise.resolve(sequelize.sync());
exports.Truck = Truck;
exports.Job = Job;
exports.sequelize = sequelize;
