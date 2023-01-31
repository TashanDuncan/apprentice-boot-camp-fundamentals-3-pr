const { TaxCalculator } = require('../tax-calculator');

/**
* @deprecated
*/
let DummyTaxCalculator = class DummyTaxCalculator extends TaxCalculator {
  constructor() {
    super(2019);
  }
  calculateTax(vehicle) {
    return -1;
  }
}

module.exports = {
  DummyTaxCalculator: DummyTaxCalculator
}