const Sequelize = require("sequelize");

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync({ force: true }).then(() =>
  console.log(`the DIGITAL LAB BOOK is now connected`)
);

module.exports = db;
