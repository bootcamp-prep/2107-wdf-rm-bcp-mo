describe('frequencyAnalysis', () => {

  it('is a function', () => {
    expect(typeof frequencyAnalysis).toEqual('function');
  });

  it('returns an object', () => {
    let returnedValue = frequencyAnalysis('i like pumpkins');
    expect(typeof returnedValue).toEqual('object');
  });

  it('returns the correct number of i\'s', () => {
    let returnedValue = frequencyAnalysis('i like pumpkins');
    expect(returnedValue['i']).toEqual(3);
  });

  it('returns the correct number of l\'s', () => {
    let returnedValue = frequencyAnalysis('i like pumpkins');
    expect(returnedValue['l']).toEqual(1);
  });

  it('returns the correct number of k\'s', () => {
    let returnedValue = frequencyAnalysis('i like pumpkins');
    expect(returnedValue['k']).toEqual(2);
  });

});
