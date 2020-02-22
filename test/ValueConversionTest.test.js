const unitvalue = require("../main/quantityMeasurementController")
const assert = require('chai').assert
describe('app', function () {
    // *(0 FEET = 0 FEET)
    it('givenZeroAndZeroFeet_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("LENGTH", "FEET", 0, "FEET", 0)
        assert.equal(value, true)
    })
    // *(0 INCH = 0 INCH)
    it('givenZeroAndZeroInch_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("LENGTH", "INCH", 0, "INCH", 0)
        assert.equal(value, true)
    })
    // *(Check FEET Type)
    it('givenSameTypeSameValueInFeet_ShouldReturnEqual', function () {
        assert.typeOf(unitvalue.UnitConversion("LENGTH", "FEET", 0, "FEET", 0), 'Boolean')
    })
    // *(Check INCH Type)
    it('givenSameTypeSameValueInInch_ShouldReturnEqual', function () {
        assert.typeOf(unitvalue.UnitConversion("LENGTH", "INCH", 0, "INCH", 0), 'Boolean')
    })
    // *(1 FEET = 12 INCH)
    it('givenOneFeet_ShouldReturntwelveInch', function () {
        var value = unitvalue.UnitConversion("LENGTH", "FEET", 1, "INCH", 12)
        assert.equal(value, true)
    })
    // *(1 FEET != 1 INCH)
    it('givenOneFeetOneInch_ShouldReturnNotEqual', function () {
        var value = unitvalue.UnitConversion("LENGTH", "FEET", 1, "INCH", 1)
        assert.equal(value, false)
    })
    // *(1 INCH != 1 FEET)
    it('givenOneInchOneFeet_ShouldReturnNotEqual', function () {
        var value = unitvalue.UnitConversion("LENGTH", "INCH", 1, "FEET", 1)
        assert.equal(value, false)
    })
    // *(12 INCH = 1 FEET)
    it('giventwelveInch_ShouldReturnOneFeet', function () {
        var value = unitvalue.UnitConversion("LENGTH", "INCH", 12, "FEET", 1)
        assert.equal(value, true)
    })
    //*(3 FEET = 1 YARD)
    it('givenThreeFeet_ShouldReturnOneYard', function () {
        var value = unitvalue.UnitConversion("LENGTH", "FEET", 3, "YARD", 1)
        assert.equal(value, true)
    })
    //*(1 FEET != 1 YARD)
    it('givenOneFeetAndOneYard_ShouldReturnNotEqual', function () {
        var value = unitvalue.UnitConversion("LENGTH", "FEET", 1, "YARD", 1)
        assert.equal(value, false)
    })
    //*(1 INCH != 1 YARD)
    it('givenOneInchAndOneYard_ShouldReturnNotEqual', function () {
        var value = unitvalue.UnitConversion("LENGTH", "INCH", 1, "YARD", 1)
        assert.equal(value, false)
    })
    //*(1 YARD = 36 INCH)
    it('givenOneYardAndThirtySixInch_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("LENGTH", "YARD", 1, "INCH", 36)
        assert.equal(value, true)
    })
    //*(36 INCH = 1 YARD)
    it('givenThirtySixInchAndOneYard_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("LENGTH", "INCH", 36, "YARD", 1)
        assert.equal(value, true)
    })
    //*(1 YARD = 3 FEET)
    it('givenOneYardAndThreeFeet_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("LENGTH", "YARD", 1, "FEET", 3)
        assert.equal(value, true)
    })
    //*(2 INCH = 5 CM)
    it('givenTwoInchAndFiveCM_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("LENGTH", "INCH", 2, "CM", 5)
        assert.equal(value, true)
    })
    //*(1 GALLON = 3.78 LITERS)
    it('givenOneGallonAndThree.SevenEightGallon_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("VOLUME", "GALLON", 1, "LITRE", 3.78)
        assert.equal(value, true)
    })
    // *(1 LITER = 1000 ML)
    it('givenOneGallonAndOneThousandML_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("VOLUME", "LITRE", 1, "ML", 1000)
        assert.equal(value, true)
    })
    // *(1 KG = 1000 GRAMS)
    it('givenOneKGAndOneThousandGrams_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("MASS", "KG", 1, "GRAMS", 1000)
        assert.equal(value, true)
    })
    // *(1 TONNE = 1000 KGS)
    it('givenOneTonneAndOneThousandKgs_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("MASS", "TONNE", 1, "KG", 1000)
        assert.equal(value, true)
    })
    // *(1 FAHRENHEIT = 100 CELSIUS)
    it('givenOneFahrenheitAndOneHundredCelsius_ShouldReturnEqual', function () {
        var value = unitvalue.UnitConversion("TEMPERATURE", "FAHRENHEIT", 212, "CELSIUS", 100)
        assert.equal(value, true)
    })
})