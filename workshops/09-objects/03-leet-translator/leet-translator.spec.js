describe('leetTranslator', () => {

  it('is a function', () => {
    expect(typeof leetTranslator).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = leetTranslator('fullstack');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the leet translation of the inputted string', () => {
    let returnedValue = leetTranslator('fullstack');
    expect(returnedValue).toEqual('ph|_|115+@(|<');
  });

  it('handles upper- and lower-case letters', () => {
    let returnedValue = leetTranslator('Hopper');
    expect(returnedValue).toEqual('#0|D|D3|2');
  });

});
