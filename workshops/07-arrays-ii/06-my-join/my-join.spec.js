describe('myJoin', () => {

  it('is a function', () => {
    expect(typeof myJoin).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = myJoin(['apples', 'bananas']);
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a string with all of the array element joined together, separated by the separator', () => {
    let returnedValue = myJoin(['Beyonce', 'Kelly', 'Michelle'], ' and ');
    expect(returnedValue).toEqual('Beyonce and Kelly and Michelle');
  });

  it('returns a string with all of the array element joined together using a comma as the default separator', () => {
    let returnedValue = myJoin(['Beyonce', 'Kelly', 'Michelle']);
    expect(returnedValue).toEqual('Beyonce,Kelly,Michelle');
  });

  it('returns a string that replaces null or undefined values with an empty string', () => {
    let returnedValue = myJoin([null, 'came, ', 'saw, ', 'conquered.'], 'I ');
    expect(returnedValue).toEqual('I came, I saw, I conquered.');
  });

});
