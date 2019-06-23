module.exports = function(sequelize, DataTypes) {
  var store = sequelize.define("Store", {
    storeName: DataTypes.STRING(50),
    storeImg: DataTypes.STRING,
    storeContact: DataTypes.STRING,
    phoneN: DataTypes.INTEGER,
    workingHours: DataTypes.DATE(6),
    businessType: DataTypes.STRING,
    businessEmail: DataTypes.STRING,
    businessPass: DataTypes.STRING,
    storeAddress: {
      streetName: DataTypes.STRING,
      streetNum: DataTypes.INTEGER,
      zipCode: DataTypes.INTEGER,
      state: DataTypes.STRING
    },

    storeID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  });

  store.associate = function(models) {
    // Associating Store with Services
    store.hasMany(models.services, {
      // If we delete a Store, all it´s asosiated services will be deleted
      onDelete: "cascade"
    });
  };
  return store;
};
