describe('arrayFlattener', () => {

  it('is a function', () => {
    expect(typeof arrayFlattener).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = arrayFlattener([1, 2, [3]]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns a one-dimensional array', () => {
    // get the return value from the function
    let returnedValue = arrayFlattener('this is crazy');

    // make sure none of the elements in the array are an array
    let foundInnerArray = false;

    for (let i = 0; i < returnedValue.length; i++) {
      let element = returnedValue[i];

      if (Array.isArray(element)) {
        foundInnerArray = true;
        break;
      }
    }

    expect(foundInnerArray).toEqual(false);
  });

  it('returns a one-dimensional array with the correct elements', () => {
    let returnedValue = arrayFlattener(['I', 'am', 'working', ['on', 'another', 'level']]);
    expect(returnedValue).toEqual(['I', 'am', 'working', 'on', 'another', 'level']);
  });

});
