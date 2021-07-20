describe('compareObjects', () => {

  it('is a function', () => {
    expect(typeof compareObjects).toEqual('function');
  });

  it('returns a boolean', () => {
    let returnedValue = compareObjects({}, {});
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if both objects have identical key/value pairs', () => {
    let returnedValue = compareObjects({a: 1, b: 2}, {a: 1, b: 2});
    expect(returnedValue).toEqual(true);
  });

  it('returns false if the objects have different keys', () => {
    let returnedValue = compareObjects({a: 1, b: 2}, {a: 1, c: 2});
    expect(returnedValue).toEqual(false);
  });

  it('returns false if the objects have different values', () => {
    let returnedValue = compareObjects({a: 1, b: 2}, {a: 1, b: 3});
    expect(returnedValue).toEqual(false);
  });

  it('returns false if the first object has an extra key/value pair', () => {
    let returnedValue = compareObjects({a: 1, b: 2}, {a: 1});
    expect(returnedValue).toEqual(false);
  });

  it('returns false if the second object has an extra key/value pair', () => {
    let returnedValue = compareObjects({a: 1}, {a: 1, b: 2});
    expect(returnedValue).toEqual(false);
  });

});
