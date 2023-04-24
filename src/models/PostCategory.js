"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: "posts_categories",
    }
  );
  PostCategory.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      foreignKey: "category_id",
      otherKey: "post_id",
      through: "PostCategory",
      as: "posts",
    });
    BlogPost.belongsToMany(Category, {
      foreignKey: "post_id",
      otherKey: "category_id",
      through: "PostCategory",
      as: "categories",
    });
  };
  return PostCategory;
};
