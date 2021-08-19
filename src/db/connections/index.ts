import { Sequelize, Dialect, ConnectionOptions } from 'sequelize';

const DB_NAME: string = process.env.DB_NAME || '1000pagosDev';
const dialect: Dialect = 'mysql'; /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
const DB_PASS: string = process.env.DB_PASS || '';
const host: string = process.env.DB_HOST || 'localhost';
const user: string = process.env.DB_USER || 'root';

/**
 * latam trabaja con postgreSQL ->
 * npm i pg pg-hstore
 * npm i mariadb
 * npm i mysql2
 * npm i sqlite3
 * npm i tedius
 */

// conet with database
const web = () =>
	new Sequelize(DB_NAME, user, DB_PASS, {
		host,
		dialect,
		dialectOptions: { ssl: { rejectUnauthorized: false } },
	});

const local = () => new Sequelize(DB_NAME, user, DB_PASS, { host, dialect });

export default process.env.PORT ? web() : local();
