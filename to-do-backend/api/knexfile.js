module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    user: 'postgres', // or other user if you made one
    password: 'postgres',
    // must be equal to the database you created in postico
    database: 'todo2'
  }
};