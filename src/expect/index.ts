const _ = require('lodash');
class Expect {
  private value: unknown;

  constructor(value: unknown) {
    this.value = value;
  }

  toBe(comparison: unknown) {
    return Object.is(this.value, comparison)
  }

  toEqual(comparison: unknown) {
    return _.isEqual(this.value, comparison)
  }

  toStrictlyEqual(comparison: unknown) {
    return this.value === comparison
  }
}

export const expect = (value: unknown) => {
  if(typeof value === 'function') value = value();

  return new Expect(value)
}