import getBox from './../utilities/get-box';
import touch from './touch';


describe('touch', function () {

  let a, b;

  beforeEach(function () {
    a = getBox({left: 100, top: 100, width: 100, height: 100});
    b = getBox({left: 0, top: 0, width: 50, height: 50});
  });

  it('should do nothing if no alignment is set', function () {
    touch(a, b);
    expect(b.left).toEqual(0);
    expect(b.top).toEqual(0);
  });

  describe('horizontal', function () {

    it('left', function () {
      touch(a, b, 'left');
      expect(b.left).toEqual(50);
    });

    it('right', function () {
      touch(a, b, 'right');
      expect(b.left).toEqual(200);
    });

  });

  describe('vertical', function () {

    it('top', function () {
      touch(a, b, null, 'top');
      expect(b.top).toEqual(50);
    });

    it('bottom', function () {
      touch(a, b, null, 'bottom');
      expect(b.top).toEqual(200);
    });

  });

});
