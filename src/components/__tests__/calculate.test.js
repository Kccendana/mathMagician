import calculate from "../../logic/calculate";

describe('calculate data', () => {
  it('return an empty value when AC is clicked', () => {
    const calcData = {
      total: 1,
      next: 2,
      operation: '+',
    };

    const buttonName = 'AC';
    const result = {
      total: null,
      next: null,
      operation: null,
    }

    expect(calculate(calcData, buttonName)).toEqual(result);
  });

  it('Save data to operation', () => {
    const calcData = {
      total: 2,
      next: 2,
      operation: null,
    };

    const buttonName = '+';
    const result = {
      total: 2,
      next: 2,
      operation: '+',
    }

    expect(calculate(calcData, buttonName)).toEqual(result);
  })
})