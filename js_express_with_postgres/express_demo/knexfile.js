// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "express_demo"
      // For linux users, you must set a username and password.
      // To change your password, use psql:
      // $ psql
      // sg=# ALTER USER username PASSWORD 'supersecret';
      // username: "sg",
      // password: "supersecret"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    }
  }
};
