import getOverlap from './get-overlap';
import getBox from './../utilities/get-box';


describe('getOverlap', () => {

  it('parallel boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 0, top: 100, width: 100, height: 100});
    expect(getOverlap(a, b)).toEqual(null);
  });

  it('overlapping boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 50, top: 50, width: 100, height: 100});
    var result = getOverlap(a, b);
    expect(result.left).toEqual(50);
    expect(result.top).toEqual(50);
    expect(result.width).toEqual(50);
    expect(result.height).toEqual(50);
  });

  it('identical boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 0, top: 0, width: 100, height: 100});
    var result = getOverlap(a, b);
    expect(result.left).toEqual(0);
    expect(result.top).toEqual(0);
    expect(result.width).toEqual(100);
    expect(result.height).toEqual(100);
  });

});

