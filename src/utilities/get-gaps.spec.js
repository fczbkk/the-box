import getBox from './get-box';
import getGaps from './get-gaps';

describe('getGaps', () => {

  var a = getBox({left: 0, top: 0, width: 100, height: 100});

  it('box is inside parent', () => {
    var b = getBox({left: 25, top: 25, width: 50, height: 50});
    expect(getGaps(a, b)).toEqual({
      horizontal: {
        before: 25,
        after: 25
      },
      vertical: {
        before: 25,
        after: 25
      }
    });
  });

  it('box is touching parent', () => {
    var b = getBox({left: 50, top: 50, width: 50, height: 50});
    expect(getGaps(a, b)).toEqual({
      horizontal: {
        before: 50,
        after: 0
      },
      vertical: {
        before: 50,
        after: 0
      }
    });
  });

  it('box is bigger than parent', () => {
    var b = getBox({left: -100, top: -100, width: 300, height: 300});
    expect(getGaps(a, b)).toEqual({
      horizontal: {
        before: 0,
        after: 0
      },
      vertical: {
        before: 0,
        after: 0
      }
    });
  });

  it('box is outside parent', () => {
    var b = getBox({left: 200, top: 25, width: 50, height: 50});
    expect(getGaps(a, b)).toEqual({
      horizontal: {
        before: 100,
        after: 0
      },
      vertical: {
        before: 25,
        after: 25
      }
    });
  });

});