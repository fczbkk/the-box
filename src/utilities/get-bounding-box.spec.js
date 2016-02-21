import getBox from './get-box';
import getBoundingBox from './get-bounding-box';


describe('bounding box', () => {

  it('should return zero box when no boxes are provided', () => {
    var result = getBoundingBox();
    expect(result.get()).toEqual({
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0
    });
  });

  it('should return box encompassing all provided boxes', () => {
    var props = [
      {left: 100, top: 200, width: 300, height: 100},
      {left: 200, top: 100, width: 100, height: 300},
      {left: 200, top: 200, width: 100, height: 100}
    ];

    var boxes = props.map((item) => {
      return getBox(item);
    });

    var result = getBoundingBox(boxes);

    expect(result.get()).toEqual({
      left: 100,
      top: 100,
      right: 400,
      bottom: 400,
      width: 300,
      height: 300
    });
  });

});