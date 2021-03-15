import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const { HOST, DBNAME, DBUSER, DB_PASSWORD } = process.env;

const db = new Sequelize(DBNAME, DBUSER, DB_PASSWORD, {
	host: HOST,
	dialect: 'mysql',
	// timezone: '+03:00',

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

export default db;
