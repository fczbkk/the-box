import getBox from './../utilities/get-box';
import fitAround from './fit-around';
import detectOverlap from './detect-overlap';
import contains from './contains';


describe('fitAround', () => {

  var a = getBox({left: 0, top: 0, width: 100, height: 100});
  var c = null;

  beforeEach(function () {
    c = getBox({left: 1000, top: 1000, width: 50, height: 50});
  });

  it('should move box inside', () => {
    var b = getBox({left: 75, top: 75, width: 50, height: 50});
    fitAround(a, b, c);
    expect(contains(a, c)).toEqual(true);
    expect(detectOverlap(b, c)).toEqual(false);
  });

  it('should not move box inside if not possible', () => {
    var b = getBox({left: 0, top: 0, width: 75, height: 75});
    fitAround(a, b, c);
    expect(c.left).toEqual(1000);
    expect(c.top).toEqual(1000);
  });

});