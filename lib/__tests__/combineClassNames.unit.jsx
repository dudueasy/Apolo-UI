import combineClassNames from '../utils/className';

describe('combineClassNames ', () => {

  it('should skip falsy value', () => {
    const classnameList = [undefined, 'test1', '', 'test2'];
    const result = combineClassNames(...classnameList);
    console.log(result);
    expect(result.split(' ').length).toBe(2);
  });

  it('should return expected value', () => {
    const classnameList = ['aa', 'bb'];
    const result = combineClassNames(...classnameList);
    console.log(result);
    expect(result).toBe('aa bb');
  });

});
