import getBox from './../utilities/get-box';
import shrinkToFit from './shrink-to-fit';

describe('shrinkToFit', () => {

  var a = getBox({left: 0, top: 0, width: 100, height: 100});

  it('should do nothing if `b` is smaller than `a`', () => {
    var b = getBox({left: 0, top: 0, width: 50, height: 50});
    shrinkToFit(a, b);
    expect(b.width).toEqual(50);
    expect(b.height).toEqual(50);
  });

  it('should resize `b` to fit `a`', () => {
    var b = getBox({left: 0, top: 0, width: 200, height: 200});
    shrinkToFit(a, b);
    expect(b.width).toEqual(100);
    expect(b.height).toEqual(100);
  });

  it('should keep aspect ratio when shrinking', () => {
    var b = getBox({left: 0, top: 0, width: 200, height: 50});
    shrinkToFit(a, b);
    expect(b.width).toEqual(100);
    expect(b.height).toEqual(25);
  });

});