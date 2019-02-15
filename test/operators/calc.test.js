const Calc = require('../../src/operators/calc');

describe(
  'Testing Calc class',
  () => {
    describe(
      'Testing Sum method',
      () => {
        it(
          'Sum 1 and 2, must be equal to 3',
          () => {
            expect(Calc.sum(1, 2))
              .toEqual(3);
          }
        );
      }
    );
    describe(
      'Testing Subtract method',
      () => {
        it(
          'Subtract 2 and 1, must be equal to 1',
          () => {
            expect(Calc.subtract(2, 1))
              .toEqual(1);
          }
        );
      }
    );
    describe(
      'Testing Multiply method',
      () => {
        it(
          'Multiply 2 and 2, must be equal to 4',
          () => {
            expect(Calc.multiply(2, 2))
              .toEqual(4);
          }
        );
      }
    );
    describe(
      'Testing Divide method',
      () => {
        it(
          'Divide 6 and 2, must be equal to 3',
          () => {
            expect(Calc.divide(6, 2))
              .toEqual(3);
          }
        );
      }
    );
  }
);
