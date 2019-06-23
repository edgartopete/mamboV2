module.exports = function(sequelize, DataTypes) {
  var services = sequelize.define("Services", {
    serviceTitle: DataTypes.STRING,
    serviceDesc: DataTypes.TEXT,
    serviceRat: DataTypes.INTEGER(1),
    serviceImg: DataTypes.STRING,
    serviceTime: DataTypes.DATE(6),
    serviceGender: DataTypes.STRING,
    servicePrice: DataTypes.INTEGER,
    serviceCat: DataTypes.STRING,
    serviceID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  });

  // services.associate = function(models) {
  //   // Services should belong to a Store
  //   // A service can't be created without a store due to the foreign key constraint
  //   services.belongsTo(models.store, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return services;
};
