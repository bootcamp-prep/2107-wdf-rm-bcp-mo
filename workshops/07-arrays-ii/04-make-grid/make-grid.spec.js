describe('makeGrid', () => {

  it('is a function', () => {
    expect(typeof makeGrid).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = makeGrid(1, 1);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns a grid with the correct number of rows', () => {
    let returnedValue = makeGrid(3, 6);
    expect(returnedValue.length).toEqual(6);
  });

  it('returns a grid with the correct number of columns', () => {
    let returnedValue = makeGrid(5, 1);
    let row = returnedValue[0];
    expect(row.length).toEqual(5);
  });

  it('returns a grid with the correct cell values', () => {
    let returnedValue = makeGrid(2, 2);
    let expectedValue = [
      [1, 2],
      [1, 2]
    ];
    expect(returnedValue).toEqual(expectedValue);
  });

});
