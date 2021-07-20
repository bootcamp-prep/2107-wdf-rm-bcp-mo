describe('evenAndOdd', () => {

  it('is a function', () => {
    expect(typeof evenAndOdd).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = evenAndOdd([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns an array where the first element has all the even numbers from the original array', () => {
    let returnedValue = evenAndOdd([10, 15, 20, 25, 30]);
    expect(returnedValue[0]).toEqual([10, 20, 30]);
  });

  it('returns an array where the second element has all the odd numbers from the original array', () => {
    let returnedValue = evenAndOdd([7, 14, 21, 28, 35]);
    expect(returnedValue[1]).toEqual([7, 21, 35]);
  });

});
