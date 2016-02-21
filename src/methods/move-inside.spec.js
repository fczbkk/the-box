import getBox from './../utilities/get-box';
import moveInside from './move-inside';

describe('moveInside', () => {

  var a = getBox({left: 0, top: 0, width: 100, height: 100});

  it('keeps box that already is inside intact', () => {
    var b = getBox({left: 25, top: 25, width: 50, height: 50});
    moveInside(a, b);
    expect(b.left).toEqual(25);
    expect(b.top).toEqual(25);
  });

  it('moves box that is partially outside', () => {
    var b = getBox({left: 75, top: 25, width: 50, height: 50});
    moveInside(a, b);
    expect(b.left).toEqual(50);
    expect(b.top).toEqual(25);
  });

  it('moves box that is completely outside', () => {
    var b = getBox({left: 100, top: 25, width: 50, height: 50});
    moveInside(a, b);
    expect(b.left).toEqual(50);
    expect(b.top).toEqual(25);
  });

  it('matches top-left corner of box that is too big to fit', () => {
    var b = getBox({left: 25, top: 25, width: 200, height: 200});
    moveInside(a, b);
    expect(b.left).toEqual(0);
    expect(b.top).toEqual(0);
  });

});