import Sequelize from 'sequelize';
import pg from 'pg';
import 'dotenv';

let sequelize;
if (process.env.NODE_ENV !== 'production') {
  sequelize = new Sequelize('oncue', process.env.DB_USER, process.env.DB_PASS, { host: process.env.DB_HOST, dialect: 'postgres' });
} else {
  sequelize = new Sequelize(process.env.DATABASE_URL);
}

sequelize.authenticate()
  .then(() => console.log('DB connection successful'))
  .catch(err => console.error('Unable to connect to the database:', err));
