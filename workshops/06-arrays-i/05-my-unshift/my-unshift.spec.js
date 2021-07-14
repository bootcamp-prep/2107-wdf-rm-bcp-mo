describe('myUnshift', () => {

  it('is a function', () => {
    expect(typeof myUnshift).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = myUnshift([1, 2, 3], 0);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns a new array with the value as the first index', () => {
    let returnedValue = myUnshift(['bears', 'cows', 'ducks'], 'antelopes');
    expect(returnedValue).toEqual(['antelopes', 'bears', 'cows', 'ducks']);
  });

});
