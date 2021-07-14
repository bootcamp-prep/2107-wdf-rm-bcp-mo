describe('myLastIndexOf', () => {

  it('is a function', () => {
    expect(typeof myLastIndexOf).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = myLastIndexOf([1, 2, 3], 2);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the last index at which the searchValue appears in the array', () => {
    let returnedValue = myLastIndexOf([0, 10, 20, 10, 0], 10);
    expect(returnedValue).toEqual(3);
  });

  it('returns -1 if the searchValue does not exist in the array', () => {
    let returnedValue = myLastIndexOf(['peanut', 'cashew', 'walnut'], 'lemon');
    expect(returnedValue).toEqual(-1);
  });

  it('returns the last index of the searchValue that is less than the startIdx', () => {
    let returnedValue = myLastIndexOf([0, 10, 20, 10, 0], 10, 2);
    expect(returnedValue).toEqual(1);
  });

});
