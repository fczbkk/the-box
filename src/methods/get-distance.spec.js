import getDistance from './get-distance';
import getBox from './../utilities/get-box';


describe('getDistance', () => {

  it('should get distance between boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 200, top: 200, width: 100, height: 100});
    var distance = getDistance(a, b);
    expect(distance.horizontal).toEqual(100);
    expect(distance.vertical).toEqual(100);
    expect(distance.direct).toBeCloseTo(141, 0);
    expect(distance.pivot).toBeCloseTo(283, 0);
  });

  it('should get distance between boxes at same level', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 200, top: 0, width: 100, height: 100});
    var distance = getDistance(a, b);
    expect(distance.horizontal).toEqual(100);
    expect(distance.vertical).toEqual(0);
    expect(distance.direct).toEqual(100);
    expect(distance.pivot).toEqual(200);
  });

  it('should get distance between overlapping boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 50, top: 50, width: 100, height: 100});
    var distance = getDistance(a, b);
    expect(distance.horizontal).toEqual(0);
    expect(distance.vertical).toEqual(0);
    expect(distance.direct).toEqual(0);
    expect(distance.pivot).toBeCloseTo(71, 0);
  });

});