describe('onlyOne', () => {

  it('is a function', () => {
    expect(typeof onlyOne).toEqual('function');
  });

  it('returns a boolean', () => {
    let returnedValue = onlyOne(1, 1, 1);
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if only the first value is truthy', () => {
    let returnedValue = onlyOne(1, 0, false);
    expect(returnedValue).toEqual(true);
  });

  it('returns true if only the second value is truthy', () => {
    let returnedValue = onlyOne(null, 'hi!', undefined);
    expect(returnedValue).toEqual(true);
  });

  it('returns true if only the third value is truthy', () => {
    let returnedValue = onlyOne(0, '', true);
    expect(returnedValue).toEqual(true);
  });

  it('returns false if all of the values are falsey', () => {
    let returnedValue = onlyOne(false, null, undefined);
    expect(returnedValue).toEqual(false);
  });

  it('returns false if only the first value is falsey', () => {
    let returnedValue = onlyOne('', -20, true);
    expect(returnedValue).toEqual(false);
  });

  it('returns false if only the second value is falsey', () => {
    let returnedValue = onlyOne(true, null, 'i am truthy');
    expect(returnedValue).toEqual(false);
  });

  it('returns false if only the third value is falsey', () => {
    let returnedValue = onlyOne(true, 'pumpkin', 0);
    expect(returnedValue).toEqual(false);
  });

  it('returns false if all of the values are truthy', () => {
    let returnedValue = onlyOne(true, 'yes!', 100);
    expect(returnedValue).toEqual(false);
  });

});
