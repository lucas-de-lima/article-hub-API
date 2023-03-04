"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  return users;
};
