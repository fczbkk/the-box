import getBox from './get-box';
import GenericBox from './../boxes/generic';


describe('getBox', () => {

  it('should return generic box when no input is provided', () => {
    var result = Object.getPrototypeOf(getBox());
    var expectation = Object.getPrototypeOf(new GenericBox());
    expect(result).toEqual(expectation);
  });

});