module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define("Rating", {
    serviceComment: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    serviceRating: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
  
    });
    Rating.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Rating.belongsTo(models.Services, {
          foreignKey: {
            allowNull: false
          },
      });
  };
  return Rating;
};

