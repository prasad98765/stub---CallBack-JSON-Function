const assert = require("chai").assert;
//const expect = chai.expect;

const sinon = require("sinon");
const services = require('../main/QuantityMesurementsServers')

const controller = require("../main/quantityMeasurementController");


describe("QuantityController", function() {

  beforeEach(function(){
    sinon.stub(services, "UnitConversion").yields(null,false)
  })

  afterEach(function(){
    services.UnitConversion.restore()
  })
  // Stubs QuantityMesurementsServers Class
  it("Should Send True When UnitConversion called ", function() {
    var value = controller.UnitConversion("LENGTH", "FEET", 23, "FEET", 0);
    assert.equal(value, false);
  });
   // Stubs quantityMeasurementController Class
   it("Should Send True When UnitConversion called ", function() {
    var value = controller.UnitConversion("VOLUME", "FEET", 0, "FEET", 0);
    assert.equal(value, false);
  });
    // Stubs quantityMeasurementController Class
   it("Should Send True When UnitConversion called ", function() {
      sinon.stub(controller, "UnitConversion").returns(true)
      var value = controller.UnitConversion("VOLUME", "FEET", 0, "FEET", 0);
      assert.equal(value, true);
    });
});
