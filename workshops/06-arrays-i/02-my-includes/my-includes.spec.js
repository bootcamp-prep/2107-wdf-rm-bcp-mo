describe('myIncludes', () => {

  it('is a function', () => {
    expect(typeof myIncludes).toEqual('function');
  });

  it('returns a boolean', () => {
    let returnedValue = myIncludes([1, 2, 3], 3);
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if the searchValue is in the array', () => {
    let returnedValue = myIncludes(['ruby', 'go', 'javascript'], 'javascript');
    expect(returnedValue).toEqual(true);
  });

  it('returns false if the searchValue is not in the array', () => {
    let returnedValue = myIncludes(['fun', 'happy things', 'kittens'], 'sad things');
    expect(returnedValue).toEqual(false);
  });

  it('returns false if the searchValue is loosely equal to an element in the array', () => {
    let returnedValue = myIncludes([5, 10, 15], '10');
    expect(returnedValue).toEqual(false);
  });

});
