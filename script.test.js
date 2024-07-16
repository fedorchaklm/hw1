import {
  getSumOrMultiply,
  getQuarter,
  getSumOfEvenNumbers,
  getMax,
  getMark,
  getSumAndQuantity,
  isPrime,
  getSqrt,
  getSqrtBinary,
} from "./script.js";

// describe("getSumOrMultiply", () => {
//   test("should return 20", () => {
//     expect(getSumOrMultiply(4, 5)).toBe(20);
//   });

//   test("should return 9", () => {
//     expect(getSumOrMultiply(5, 4)).toBe(9);
//   });
// });

// describe("getQuarter", () => {
//   test("should return I", () => {
//     expect(getQuarter(4, 5)).toBe("I");
//   });

//   test("should return II", () => {
//     expect(getQuarter(-4, 5)).toBe("II");
//   });

//   test("should return III", () => {
//     expect(getQuarter(-4, -5)).toBe("III");
//   });

//   test("should return IV", () => {
//     expect(getQuarter(4, -5)).toBe("IV");
//   });

//   test("should return 0;0", () => {
//     expect(getQuarter(0, 0)).toBe("0;0");
//   });
// });

// describe("getSumOfEvenNumbers", () => {
//   test("should return 5", () => {
//     expect(getSumOfEvenNumbers(-1, 2, 3)).toBe(5);
//   });

//   test("should return 3", () => {
//     expect(getSumOfEvenNumbers(-1, -2, 3)).toBe(3);
//   });

//   test("should return 0", () => {
//     expect(getSumOfEvenNumbers(-1, -2, -3)).toBe(0);
//   });

//   test("should return 4", () => {
//     expect(getSumOfEvenNumbers(1, -2, 3)).toBe(4);
//   });
// });

// describe("getMax", () => {
//   test("should return", () => {
//     expect(getMax(1, 2, 3)).toBe(9);
//   });

//   test("should return", () => {
//     expect(getMax(2, 2, 3)).toBe(15);
//   });

//   test("should return", () => {
//     expect(getMax(1, 1, 3)).toBe(8);
//   });
// });

// describe("getMark", () => {
//   test("should return F", () => {
//     expect(getMark(19)).toBe("F");
//   });

//   test("should return E", () => {
//     expect(getMark(39)).toBe("E");
//   });

//   test("should return D", () => {
//     expect(getMark(59)).toBe("D");
//   });

//   test("should return C", () => {
//     expect(getMark(74)).toBe("C");
//   });

//   test("should return B", () => {
//     expect(getMark(89)).toBe("B");
//   });

//   test("should return 100", () => {
//     expect(getMark(100)).toBe("A");
//   });

//   test("should return error", () => {
//     expect(() => getMark(105)).toThrowError("There is no such mark!");
//   });
// });

// describe("getSumAndQuantity", () => {
//   test("should return {}", () => {
//     expect(getSumAndQuantity(1, 99)).toStrictEqual({sum: 49, quantity: 49});
//   });
// });


// describe('isPrime', () => {
//   test("should return is prime", () => {
//     expect(isPrime(2)).toBe("prime");
//   });
//   test("should return is prime", () => {
//     expect(isPrime(3)).toBe("prime");
//   });
//   test("should return is not prime", () => {
//     expect(isPrime(4)).toBe("not prime");
//   });
//   test("should return is prime", () => {
//     expect(isPrime(5)).toBe("prime");
//   });
//   test("should return is prime", () => {
//     expect(isPrime(7)).toBe("prime");
//   });
//   test("should return is not prime", () => {
//     expect(isPrime(10)).toBe("not prime");
//   });
//   test("should return is prime", () => {
//     expect(isPrime(11)).toBe("prime");
//   });
// });

// describe("getSqrt", () => {
//   test("should return 2", () => {
//     expect(getSqrt(4)).toBe(2);
//   });
//   test("should return 4", () => {
//     expect(getSqrt(16)).toBe(4);
//   });
//   test("should return 5", () => {
//     expect(getSqrt(29)).toBe(5);
//   });
//   test("should return 5", () => {
//     expect(getSqrt(28)).toBe(5);
//   });
//   test("should return 5", () => {
//     expect(getSqrt(31)).toBe(6);
//   });
//   test("should return 5", () => {
//     expect(getSqrt(35)).toBe(6);
//   });
//   test("should return 2", () => {
//     expect(() => getSqrt(-4)).toThrowError("Wrong number");
//   });
// });

describe("getSqrtBinary", () => {
  test("should return 2", () => {
    expect(getSqrtBinary(4)).toBe(2);
  });
  test("should return 4", () => {
    expect(getSqrtBinary(16)).toBe(4);
  });
  test("should return 5", () => {
    expect(getSqrtBinary(29)).toBe(5);
  });
  test("should return 5", () => {
    expect(getSqrtBinary(28)).toBe(5);
  });
  test("should return 5", () => {
    expect(getSqrtBinary(31)).toBe(6);
  });
  test("should return 5", () => {
    expect(getSqrtBinary(35)).toBe(6);
  });
  test("should return 2", () => {
    expect(() => getSqrtBinary(-4)).toThrowError("Wrong number");
  });
});
