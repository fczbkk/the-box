import getBox from './get-box';
import getBoxesAround from './get-boxes-around';


// helper function that compares length and values of expectations
function isMatching(result, expectation) {
  if (result.length !== expectation.length) {
    return false;
  }

  // convert results and expectations to strings for easier comparison
  result = result.map(item => item.toString());
  expectation = expectation.map(item => getBox(item).toString());

  const reduce_callback = function (previous_result, current_item) {
    return previous_result === true && result.indexOf(current_item) > -1;
  };

  return expectation.reduce(reduce_callback, true);
}


describe('getBoxesAround', () => {

  var a = getBox({left: 0, top: 0, width: 100, height: 100});

  it('box is inside parent', () => {
    var b = getBox({left: 10, top: 10, width: 50, height: 50});
    var result = getBoxesAround(a, b);
    var expectation = [
      {left: 0, top: 0, width: 100, height: 10},
      {left: 0, top: 0, width: 10, height: 100},
      {left: 60, top: 0, width: 40, height: 100},
      {left: 0, top: 60, width: 100, height: 40}
    ];
    expect(isMatching(result, expectation)).toEqual(true);
  });

  it('box is outside parent', function () {
    var b = getBox({left: 1000, top: 1000, width: 50, height: 50});
    var result = getBoxesAround(a, b);
    var expectation = [
      {left: 0, top: 0, width: 100, height: 100}
    ];
    expect(isMatching(result, expectation)).toEqual(true);
  });

  it('box is touching side of parent', function () {
    var b = getBox({left: 10, top: 0, width: 50, height: 50});
    var result = getBoxesAround(a, b);
    var expectation = [
      {left: 0, top: 0, width: 10, height: 100},
      {left: 0, top: 50, width: 100, height: 50},
      {left: 60, top: 0, width: 40, height: 100}
    ];
    expect(isMatching(result, expectation)).toEqual(true);
  });

  it('box is touching corner of parent', function () {
    var b = getBox({left: 0, top: 0, width: 50, height: 50});
    var result = getBoxesAround(a, b);
    var expectation = [
      {left: 0, top: 50, width: 100, height: 50},
      {left: 50, top: 0, width: 50, height: 100}
    ];
    expect(isMatching(result, expectation)).toEqual(true);
  });

  it('box is partially outside of parent', function () {
    var b = getBox({left: -10, top: -10, width: 50, height: 50});
    var result = getBoxesAround(a, b);
    var expectation = [
      {left: 40, top: 0, width: 60, height: 100},
      {left: 0, top: 40, width: 100, height: 60}
    ];
    expect(isMatching(result, expectation)).toEqual(true);
  });

  it('box is same as parent', function () {
    var b = getBox({left: 0, top: 0, width: 100, height: 100});
    var result = getBoxesAround(a, b);
    var expectation = [];
    expect(isMatching(result, expectation)).toEqual(true);
  });

  it('box is bigger than parent', function () {
    var b = getBox({left: -10, top: -10, width: 120, height: 120});
    var result = getBoxesAround(a, b);
    var expectation = [];
    expect(isMatching(result, expectation)).toEqual(true);
  });

});