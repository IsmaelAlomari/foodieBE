const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Cuisine = sequelize.define("Cuisine", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    img: { type: DataTypes.STRING },
  });

  SequelizeSlugify.slugifyModel(Cuisine, {
    source: ["name"],
  });

  Cuisine.associate = (models) => {
    models.Ingerdient.hasMany(Cuisine, {
      foreignKey: "ingerdientId",
      as: "cuisines",
      allowNull: false,
    });
    Cuisine.belongsTo(models.Ingerdient, {
      foreignKey: "ingerdientId",
      as: "ingerdient",
    });
  };

  return Cuisine;
};
