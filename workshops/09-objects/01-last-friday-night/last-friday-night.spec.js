describe('lastFridayNight', () => {

  it('is a function', () => {
    expect(typeof lastFridayNight).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = lastFridayNight({name: 'flowers', amount: 10});
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the sum of the amounts from each object', () => {
    let transactions = [
      {
        name: 'apples',
        amount: 5
      }, {
        name: 'kleenex',
        amount: 2
      }, {
        name: 'knitting supplies',
        amount: 10,
      }

    ];

    let returnedValue = lastFridayNight(transactions);
    expect(returnedValue).toEqual(17);
  });

});
