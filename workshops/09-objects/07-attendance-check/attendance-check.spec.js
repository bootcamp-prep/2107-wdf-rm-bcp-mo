describe('attendanceCheck', () => {

  it('is a function', () => {
    expect(typeof attendanceCheck).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = attendanceCheck('Monday');
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns the correct values for Monday', () => {
    let returnedValue = attendanceCheck('Monday');
    expect(returnedValue).toEqual(['Marnie', 'Shoshanna']);
  });

  it('returns the correct values for Tuesday', () => {
    let returnedValue = attendanceCheck('Tuesday');
    expect(returnedValue).toEqual(['Marnie', 'Shoshanna']);
  });

  it('returns the correct values for Wednesday', () => {
    let returnedValue = attendanceCheck('Wednesday');
    expect(returnedValue).toEqual(['Marnie', 'Lena']);
  });

  it('returns the correct values for Thursday', () => {
    let returnedValue = attendanceCheck('Thursday');
    expect(returnedValue).toEqual(['Marnie', 'Shoshanna']);
  });

  it('returns the correct values for Friday', () => {
    let returnedValue = attendanceCheck('Friday');
    expect(returnedValue).toEqual(['Marnie', 'Lena', 'Jessa']);
  });

});
