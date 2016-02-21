import getBox from './../utilities/get-box';
import getPivotAngle from './get-pivot-angle';

describe('getPivotAngle', () => {

  it('horizontal boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 100, top: 0, width: 100, height: 100});
    expect(getPivotAngle(a, b, false)).toEqual(0);
    expect(getPivotAngle(a, b, true)).toEqual(0);
  });

  it('vertical boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 0, top: 100, width: 100, height: 100});
    expect(getPivotAngle(a, b, false)).toEqual(90);
    expect(getPivotAngle(a, b, true)).toBeCloseTo(1.57, 1);
  });

  it('diagonal boxes', () => {
    var a = getBox({left: 0, top: 0, width: 100, height: 100});
    var b = getBox({left: 100, top: 100, width: 100, height: 100});
    expect(getPivotAngle(a, b, false)).toEqual(45);
    expect(getPivotAngle(a, b, true)).toBeCloseTo(0.78, 1);
  });

});