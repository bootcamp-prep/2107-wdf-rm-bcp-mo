describe('mySlice', () => {

  it('is a function', () => {
    expect(typeof mySlice).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = mySlice([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns a copy of the array with the correct starting value', () => {
    let returnedValue = mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 2);
    expect(returnedValue).toEqual(['bialy', 'brioche']);
  });

  it('returns a copy of the array with the correct ending value', () => {
    let returnedValue = mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 0, 2);
    expect(returnedValue).toEqual(['bagel', 'baguette']);
  });

  it('returns a copy of the array with the correct starting and ending values', () => {
    let returnedValue = mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 1, 3);
    expect(returnedValue).toEqual(['baguette', 'bialy']);
  });

  it('returns a copy of the array with the correct starting value if the startingIdx is negative', () => {
    let returnedValue = mySlice(['bagel', 'baguette', 'bialy', 'brioche'], -2);
    expect(returnedValue).toEqual(['bialy', 'brioche']);
  });

  it('returns a copy of the array with the correct ending value if the endingIdx is negative', () => {
    let returnedValue = mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 0, -1);
    expect(returnedValue).toEqual(['bagel', 'baguette', 'bialy']);
  });

  it('returns a copy of the array if startingIdx and endingIdx are undefined', () => {
    let returnedValue = mySlice(['bagel', 'baguette', 'bialy', 'brioche']);
    expect(returnedValue).toEqual(['bagel', 'baguette', 'bialy', 'brioche']);
  });

});
