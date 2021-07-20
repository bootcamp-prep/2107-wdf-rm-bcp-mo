describe('dogBreeder', () => {

  it('is a function', () => {
    expect(typeof dogBreeder).toEqual('function');
  });

  it('returns an object', () => {
    let returnedValue = dogBreeder();
    expect(typeof returnedValue).toEqual('object');
  });

  it('returns an object with the given name and age', () => {
    let returnedValue = dogBreeder('Snoopy', 3);

    let expectedValue = {
      name: 'Snoopy',
      age: 3
    };

    expect(returnedValue).toEqual(expectedValue);
  });

  it('returns an object with the default age', () => {
    let returnedValue = dogBreeder('Snoopy');

    let expectedValue = {
      name: 'Snoopy',
      age: 0
    };

    expect(returnedValue).toEqual(expectedValue);
  });

  it('returns an object with the default name and age', () => {
    let returnedValue = dogBreeder();

    let expectedValue = {
      name: 'Steve',
      age: 0
    };

    expect(returnedValue).toEqual(expectedValue);
  });

  it('returns an object with the defaul name if only the age is defined', () => {
    let returnedValue = dogBreeder(3);

    let expectedValue = {
      name: 'Steve',
      age: 3
    };

    expect(returnedValue).toEqual(expectedValue);
  });

});
