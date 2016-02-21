import getBox from './../utilities/get-box';
import contains from './contains';

describe('contains', () => {

  var a = getBox({left: 0, top: 0, width: 100, height: 100});

  it('returns `true` if box is completely inside', () => {
    var b = getBox({left: 25, top: 25, width: 50, height: 50});
    expect(contains(a, b)).toEqual(true);
  });

  it('returns `false` if box is partially inside', () => {
    var b = getBox({left: 75, top: 25, width: 50, height: 50});
    expect(contains(a, b)).toEqual(false);
  });

  it('returns `false` if box is completely outside', () => {
    var b = getBox({left: 100, top: 25, width: 50, height: 50});
    expect(contains(a, b)).toEqual(false);
  });

});

