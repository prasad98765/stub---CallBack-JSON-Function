// const assert = require("chai").assert;

// // import sinon
// const sinon = require("sinon");

// const unit = require('./main/unit');
// const unitvalue = require('./main/QuantityMesurementsServers');

// dummyData = [{
//   LENGTH: {
//     FEET: 12,
//     INCH: 1,
//   }
// }]
// describe("converting units", function () {
//       it('givenZeroAndZeroFeet_ShouldReturnEqual', function () {
//         sinon.stub(unit,"unitvalue").returns(dummyData)
//         var value = unitvalue.UnitConversion("LENGTH", "FEET", 0, "FEET", 0)
//         assert.equal(value, true)
//         unit.unitvalue.restore()
//     })
//       it('giventwelveInch_ShouldReturnOneFeet', function () {
//         var value = unitvalue.UnitConversion("LENGTH", "INCH", 12, "FEET", 1)
//         assert.equal(value, true)
//     })
//     it('givenOneFeetAndTwoInch_ShouldReturnFourteenInch', function () {
//       sinon.stub(unit,"unitvalue").returns(dummyData)
//       unitvalue.UnitConversion("LENGTH", "FEET", 1, "INCH", 2)
//       var value = unitvalue.addition();
//       assert.equal(value, 14)
//   })
// })
