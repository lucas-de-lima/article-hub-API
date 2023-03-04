"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("posts_categories", {
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "blog_posts",
          key: "id",
        },
        primaryKey: true,
        onDelete: "CASCADE",
        onUpDate: "CASCADE",
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
        primaryKey: true,
        onDelete: "CASCADE",
        onUpDate: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("posts_categories");
  },
};
