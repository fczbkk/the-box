import getBox from './../utilities/get-box';
import detectOverlap from './detect-overlap';

describe('detectOverlap', () => {

  it('parallel boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 0, top: 100, width: 100, height: 100});
    expect(detectOverlap(a, b)).toEqual(false);
  });

  it('overlapping boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 50, top: 50, width: 100, height: 100});
    expect(detectOverlap(a, b)).toEqual(true);
  });

  it('identical boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 0, top: 0, width: 100, height: 100});
    expect(detectOverlap(a, b)).toEqual(true);
  });

});