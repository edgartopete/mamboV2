module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("Store", {
    storeName: DataTypes.STRING(50),
    storeImg: DataTypes.STRING,
    storeContact: DataTypes.STRING,
    phoneN: DataTypes.INTEGER,
    workingHours: DataTypes.DATE(6),
    businessType: DataTypes.STRING,
    businessEmail: DataTypes.STRING,
    businessPass: DataTypes.STRING,
    storeAddress: DataTypes.STRING,
    storeID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  });

  Store.associate = function(models) {
    // Associating Store with Services
    Store.hasMany(models.Services, {
      // If we delete a Store, all it´s asosiated services will be deleted
      onDelete: "Cascade"
    });
  };

  return Store;
};
