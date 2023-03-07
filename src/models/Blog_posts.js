'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    "blog_post",
    {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
  );
  BlogPost.associate = (models) => {
    console.log(models);
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })
  }
  return BlogPost;
};