const unitvalue = require("../main/quantityMeasurementController")
const assert = require('chai').assert
describe('app', function () {

    // *(2 INCH + 2 INCH = 4 INCH)
    it('givenTwoInchAndTwoInch_ShouldReturnFourInch', function () {
        unitvalue.UnitConversion("LENGTH", "INCH", 2, "INCH", 2)
        var value = unitvalue.valueAddition();
        assert.equal(value, 4)
    })  
     //*(1 FEET + 2 INCH = 14 INCH)
    it('givenOneFeetAndTwoInch_ShouldReturnFourteenInch', function () {
        unitvalue.UnitConversion("LENGTH", "FEET", 1, "INCH", 2)
        var value = unitvalue.valueAddition();
        assert.equal(value, 14)
    })
    //*(1 FEET + 1 FEET = 24 INCH)
    it('givenOneFeetAndOneFeet_ShouldReturnTwenty-FourInch', function () {
        unitvalue.UnitConversion("LENGTH", "FEET", 1, "FEET", 1)
        var value = unitvalue.valueAddition();
        assert.equal(value, 24)
    })
    // *(2 INCH + 2.5 CM = 3 INCH)
    it('givenOneInchAndTwo.FiveCM_ShouldReturnThreeInch', function () {
        unitvalue.UnitConversion("LENGTH", "INCH", 2, "CM", 2.5)
        var value = unitvalue.valueAddition();
        assert.equal(Math.round(value), 3)
    })
    // *(1 gallon + 3.78 LITRES = 7.57 LITRES)
    it('givenOneGallonAndThree.SevenEightLitre_ShouldReturnSeven.FiveSevenLitre', function () {
        var a = unitvalue.UnitConversion("VOLUME", "GALLON", 1, "LITRE", 3.78)
        console.log(a);
        
        var value = unitvalue.valueAddition();
        console.log("Addition Value"+value);
        assert.equal(value, 7.56)
    })
    //*(1 LITER + 1000 ML = 2 LITRES)
    it('givenOneLitreAndOneThousandML_ShouldReturnTwoLitres', function () {
        unitvalue.UnitConversion("VOLUME", "LITRE", 1, "ML", 1000)
        var value = unitvalue.valueAddition();
        assert.equal(value, 2)
    })
    //*(1 TONNE + 1000 GM = 1001 kg)
    it('givenOneTonneAndOneThrousandGM_ShouldReturnOneZeroZeroOneGM', function () {
        unitvalue.UnitConversion("MASS", "TONNE", 1, "GRAMS", 1000)
        var value = unitvalue.valueAddition();
        assert.equal(value, 1001)
    })
})