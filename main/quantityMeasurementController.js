const unitvalue = require("../main/QuantityMesurementsServers.js");

module.exports = {
  UnitConversion(unitType,firstUnit,firstUnitValue,secoundUnit,secoundUnitValue) {
    return unitvalue.UnitConversion(unitType,firstUnit,firstUnitValue,secoundUnit,secoundUnitValue,(err, data) => {
        if (err) {
          return false;
        }
        console.log("asadfghjk"+data);
        return data;
      }
    );
  },
  valueAddition() {
    return unitvalue.addition();
  }
};
