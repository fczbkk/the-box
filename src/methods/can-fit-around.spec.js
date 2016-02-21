import getBox from './../utilities/get-box';
import canFitAround from './can-fit-around';


describe('canFitAround', () => {

  var a = getBox({left: 0, top: 0, width: 100, height: 100});
  var c = getBox({left: 0, top: 0, width: 50, height: 50});

  it('enough space', () => {
    var b = getBox({left: 0, top: 0, width: 50, height: 50});
    expect(canFitAround(a, b, c)).toEqual(true);
  });

  it('not enough space', () => {
    var b = getBox({left: 0, top: 0, width: 100, height: 100});
    expect(canFitAround(a, b, c)).toEqual(false);
  });

  it('missing horizontal space', () => {
    var b = getBox({left: 25, top: 0, width: 50, height: 100});
    expect(canFitAround(a, b, c)).toEqual(false);
  });

  it('missing vertical space', () => {
    var b = getBox({left: 0, top: 25, width: 100, height: 50});
    expect(canFitAround(a, b, c)).toEqual(false);
  });

});