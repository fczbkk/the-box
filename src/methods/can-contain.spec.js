import getBox from './../utilities/get-box';
import canContain from './can-contain';

describe('canContain', () => {

  var a = getBox({left: 0, top: 0, width: 100, height: 100});

  it('returns `true` if box is smaller', () => {
    var b = getBox({left: 0, top: 0, width: 50, height: 50});
    expect(canContain(a, b)).toEqual(true);
  });

  it('returns `false` if box is wider', () => {
    var b = getBox({left: 0, top: 0, width: 200, height: 50});
    expect(canContain(a, b)).toEqual(false);
  });

  it('returns `false` if box is higher', () => {
    var b = getBox({left: 0, top: 0, width: 50, height: 200});
    expect(canContain(a, b)).toEqual(false);
  });

  it('returns `false` if box is bigger', () => {
    var b = getBox({left: 0, top: 0, width: 200, height: 200});
    expect(canContain(a, b)).toEqual(false);
  });

});