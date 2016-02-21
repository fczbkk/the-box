import getBox from './../utilities/get-box';
import findClosest from './find-closest';

describe('findClosest', () => {

  var a = getBox({left: 0, top: 0, width: 100, height: 100});

  it('direct', () => {
    var b = getBox({left: 200, top: 0, width: 100, height: 100});
    var c = getBox({left: 200, top: 200, width: 100, height: 100});
    expect(findClosest(a, [b, c], 'direct')).toEqual(b);
  });

  it('horizontal', () => {
    var b = getBox({left: 100, top: 500, width: 100, height: 100});
    var c = getBox({left: 200, top: 0, width: 100, height: 100});
    expect(findClosest(a, [b, c], 'horizontal')).toEqual(b);
  });

  it('vertical', () => {
    var b = getBox({left: 500, top: 100, width: 100, height: 100});
    var c = getBox({left: 0, top: 200, width: 100, height: 100});
    expect(findClosest(a, [b, c], 'vertical')).toEqual(b);
  });

  it('pivot', () => {
    var b = getBox({left: 200, top: 0, width: 100, height: 100});
    var c = getBox({left: 100, top: 0, width: 300, height: 300});
    expect(findClosest(a, [b, c], 'pivot')).toEqual(b);
  });

});