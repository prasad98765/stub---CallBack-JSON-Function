module.exports = {
unitvalue() {
   var units = [{
        LENGTH: 
        {
          FEET: 12,
          INCH: 1,
          YARD: 36,
          CM: 0.393700787
        },
        VOLUME: {
          GALLON: 3.78,
          LITRE: 1,
          ML: 0.001
        },
        MASS: {
          KG: 1,
          GRAMS: 0.001,
          TONNE: 1000
        },
        TEMPERATURE: {
          CELSIUS: 1,
          FAHRENHEIT: 0
        }
      }]
      return units
  }
}

