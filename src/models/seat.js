  'use strict';
  const {
    Model
  } = require('sequelize');
  const ENUMS=require('../utils/common/enum');
  const {BUSINESS,ECONOMY,PRMIUM_ECONOMY,FIRST_CLASS}=ENUMS.SEAT_TYPE;
  module.exports = (sequelize, DataTypes) => {
    class Seat extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
        this.belongsTo(models.Airplane,{//how to think belongTo and hasMany or hasOne>>>
          foreignKey:'airplaneId',
        });
      }
    }
    Seat.init({
      airplaneId: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      row: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      col:{
          type:DataTypes.STRING,
          allowNull:false
      },
      type: {
        type:DataTypes.ENUM,
        values:[BUSINESS,ECONOMY,PRMIUM_ECONOMY,FIRST_CLASS],
        defaultValue:ECONOMY,
        allowNull:false
      }
    }, {
      sequelize,
      modelName: 'Seat',
    });
    return Seat;
  };