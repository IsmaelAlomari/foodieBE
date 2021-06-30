const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Ingerdient = sequelize.define("Ingerdient", {
    name: {
      type: DataTypes.STRING,
      allowNull: false, //requred
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  SequelizeSlugify.slugifyModel(Ingerdient, {
    source: ["name"],
  });

  return Ingerdient;
};
