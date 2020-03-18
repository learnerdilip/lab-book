const Sequelize = require("sequelize");
const sequelize = require("../db");
const User = require("../user/model");

const Note = sequelize.define("note", {
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  text_cat: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.hasMany(Note);
Note.belongsTo(User);

module.exports = Note;