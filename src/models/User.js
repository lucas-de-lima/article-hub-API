"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
      timestamps: false,
    }
  );
  User.associate = (models) => {
    User.hasMany(models.Blog_post, {
      foreignKey: "id",
      as: "blogPosts",
    });
  };
  return User;
};
