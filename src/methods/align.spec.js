import getBox from './../utilities/get-box';
import align from './align';

describe('align', () => {

  var a, b;

  beforeEach(function () {
    a = getBox({left: 0, top: 0, width: 100, height: 100});
    b = getBox({left: 100, top: 100, width: 50, height: 50});
  });

  it('should do nothing if no alignment is defined', () => {
    align(a, b);
    expect(b.left).toEqual(100);
    expect(b.top).toEqual(100);
  });

  describe('horizontal', function () {

    it('left', function () {
      align(a, b, 'left');
      expect(b.left).toEqual(0);
    });

    it('right', function () {
      align(a, b, 'right');
      expect(b.left).toEqual(50);
    });

    it('center', function () {
      align(a, b, 'center');
      expect(b.left).toEqual(25);
    });

  });

  describe('vertical', function () {

    it('top', function () {
      align(a, b, null, 'top');
      expect(b.top).toEqual(0);
    });

    it('bottom', function () {
      align(a, b, null, 'bottom');
      expect(b.top).toEqual(50);
    });

    it('center', function () {
      align(a, b, null, 'center');
      expect(b.top).toEqual(25);
    });

  });

});