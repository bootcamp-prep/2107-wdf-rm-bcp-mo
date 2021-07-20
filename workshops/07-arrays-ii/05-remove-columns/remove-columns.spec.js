describe('removeColumns', () => {

  it('is a function', () => {
    expect(typeof removeColumns).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = removeColumns([[1, 2]], 1);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns a grid with one column removed, given the number 1', () => {
    let originalGrid = [
      [1, 2, 3],
      [1, 2, 3]
    ];

    let returnedValue = removeColumns(originalGrid, 1);

    let expectedValue = [
      [1, 2],
      [1, 2]
    ];

    expect(returnedValue).toEqual(expectedValue);
  });

  it('returns a grid with two columns removed, given the number 2', () => {
    let originalGrid = [
      [1, 2, 3, 4, 5, 6]
    ];

    let returnedValue = removeColumns(originalGrid, 2);

    let expectedValue = [
      [1, 2, 3, 4]
    ];

    expect(returnedValue).toEqual(expectedValue);
  });

});
