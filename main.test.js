import { describe, it, expect } from 'vitest';
import { decToBinary } from './main.js';

describe(`Series of positive integers and zero tested, including edge cases 1 and largest serial no. 32767\n`, () => {
  it.each([
    { act: 5, ex: 101 },
    { act: 16, ex: 10000 },
    { act: 9, ex: 1001 },
    { act: 134, ex: 10000110 },
    { act: 9964, ex: 10011011101100 },
    { act: 65535, ex: 1111111111111111 },
    { act: 0, ex: 0 },
    { act: 1, ex: 1 },
  ])(`Should return the binary form of the input.`, ({ act, ex }) => {
    expect(decToBinary(act)).toBe(ex);
  });
});

// const testVar = 'string';
describe('Make sure we are getting correct types', () => {
  it('Should return function', () => {
    expect(typeof decToBinary).toBe('function');
  });
  it('Should return a number', () => {
    const actual = decToBinary(6);
    const expected = 'number';
    expect(typeof actual).toBe(expected);
  });
  it('Should return an integer', () => {
    const actual = Number.isInteger(decToBinary(2));
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe("Binary result within set limit", () => {
    it("Shouldn't exceed the maximum serial number 65536", () => {
        const actual = decToBinary(65535).toString().length < 17;
        const expected = true;
        expect(actual).toBe(expected);
    });
    it('Should be a positive number only', () => {
        const actual = decToBinary(3) >= 0;
        const expected = true;
        expect(actual).toBe(expected);
    })
});



