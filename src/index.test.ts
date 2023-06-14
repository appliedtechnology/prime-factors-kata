import { expect } from "chai"
import { primeFactor } from "."

describe('double', () => {
  it('should give the double amount', () => {
    // demonstrating failing test
    expect(primeFactor(2)).to.eq(44);
  })
})