import getHypotenuse from './get-hypotenuse';


describe('getHypotenuse', () => {

  it('should return correct hypotenuse', () => {
    expect(getHypotenuse(10, 10)).toBeCloseTo(14, 0);
    expect(getHypotenuse(0, 10)).toEqual(10);
  });

});
