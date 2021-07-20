describe('petSounds', () => {

  it('is a function', () => {
    expect(typeof petSounds).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = petSounds('cat', 'Korea');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the correct dog sound', () => {
    let returnedValue = petSounds('dog', 'Korea');
    expect(returnedValue).toEqual('Dogs in Korea say Mong mong!');
  });

  it('returns the correct cat sound', () => {
    let returnedValue = petSounds('cat', 'Algeria');
    expect(returnedValue).toEqual('Cats in Algeria say Miaou!');
  });

  it('returns the correct chicken sound', () => {
    let returnedValue = petSounds('chicken', 'Uruguay');
    expect(returnedValue).toEqual('Chickens in Uruguay say gut gut gdak');
  });

});
