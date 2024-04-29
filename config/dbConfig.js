const { Client: PgClient } = require('pg');

const pgClient = new PgClient({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 5432,
});
pgClient.connect();

module.exports = pgClient;
