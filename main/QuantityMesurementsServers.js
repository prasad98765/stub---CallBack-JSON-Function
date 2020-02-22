// const unit = require('../main/unit')
const unit = require("./unit");

module.exports = {
  UnitConversion(unitType,firstUnit,firstUnitValue,secoundUnit,secoundUnitValue,callback){
    var keys = Object.keys(unit.unitvalue()[0]);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] == unitType) {
        var unitssss = Object.keys(unit.unitvalue()[i][keys[i]]);
        for (var j = 0; j < unitssss.length; j++) {
          if (unitssss[j] == firstUnit) {
            calculatedValue = unit.unitvalue()[0][keys[i]][firstUnit] * firstUnitValue;
          }
          if (unitssss[j] == secoundUnit) {
            calculatedValue1 = unit.unitvalue()[0][keys[i]][secoundUnit] * secoundUnitValue;
          }
        }
      }
      if (Math.round(calculatedValue) == Math.round(calculatedValue1)) {
        return callback(null, true);
      } else {
        return callback(null, false);
      }
    }
  },
  addition() {
    return (calculatedValue + calculatedValue1);
  }
};
