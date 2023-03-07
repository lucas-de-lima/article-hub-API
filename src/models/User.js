"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    User.hasMany(models.blog_post, {
      foreignKey: "id",
      as: "blogPosts",
    });
  };
  return User;
};
