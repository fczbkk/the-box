import getBox from './../utilities/get-box';
import canCoexist from './can-coexist';

describe('canCoexist', () => {

  var a = getBox({left: 0, top: 0, width: 100, height: 100});

  it('can contain both boxes', () => {
    var b = getBox({left: 0, top: 0, width: 50, height: 50});
    var c = getBox({left: 50, top: 50, width: 50, height: 50});
    expect(canCoexist(a, b, c)).toEqual(true);
  });

  it('can not contain both boxes', () => {
    var b = getBox({left: 0, top: 0, width: 50, height: 50});
    var c = getBox({left: 100, top: 100, width: 50, height: 50});
    expect(canCoexist(a, b, c)).toEqual(false);
  });

});

