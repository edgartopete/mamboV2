module.exports = function(sequelize, DataTypes) {
  var services = sequelize.define("Services", {
    serviceTitle: DataTypes.STRING,
    serviceDesc: DataTypes.TEXT,
    serviceRat: DataTypes.BIT(5),
    serviceImg: DataTypes.STRING,
    serviceTime: DataTypes.BIT(5),
    serviceGender: DataTypes.STRING,
    servicePrice: DataTypes.INTEGER,
    serviceCat: DataTypes.STRING,
    serviceID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  });

  services.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.store, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return services;
};
