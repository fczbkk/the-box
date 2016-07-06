import Box from './element';


describe('Element box', () => {

  var elm = null;

  function createElement (style = {}) {
    var element = document.createElement('div');
    element.className = 'testElement';
    setElementStyle(element, style);
    return element;
  }

  function setElementStyle (element, style = {}) {
    for (let key in style) {
      if (style.hasOwnProperty(key)) {
        element.style[key] = style[key];
      }
    }
  }

  beforeEach(() => {
    elm = createElement({
      width: '100px',
      height: '200px'
    });
    document.body.appendChild(elm);
  });

  afterEach(() => {
    const test_elements = document.querySelectorAll('.testElement');
    for (let i = 0, j = test_elements.length; i < j; i++) {
      const element = test_elements[i];
      element.parentNode.removeChild(element);
    }
  });

  it('should get size', () => {
    var box = new Box(elm);
    expect(box.width).toEqual(100);
    expect(box.height).toEqual(200);
  });

  it('should get position of absolute element', () => {
    setElementStyle(elm, {
      position: 'absolute',
      left: '100px',
      top: '200px'
    });
    var box = new Box(elm);
    expect(box.left).toEqual(100);
    expect(box.top).toEqual(200);
  });

  it('should get position of relative element', () => {
    const wrapper = document.body.appendChild(createElement({
      position: 'absolute',
      left: '0px',
      top: '0px'
    }));

    setElementStyle(elm, {
      position: 'relative',
      left: '100px',
      top: '200px'
    });
    wrapper.appendChild(elm);

    var box = new Box(elm);
    expect(box.left).toEqual(100);
    expect(box.top).toEqual(200);
  });

  it('should get new properties when changes', () => {
    var box = new Box(elm);

    setElementStyle(elm, {
      position: 'absolute',
      left: '1000px',
      top: '2000px',
      width: '3000px',
      height: '4000px'
    });

    box.update();

    expect(box.left).toEqual(1000);
    expect(box.top).toEqual(2000);
    expect(box.width).toEqual(3000);
    expect(box.height).toEqual(4000);
  });

  it('should not throw if element is removed', function () {
    var box = new Box(elm);
    var fn = function () {box.update();};
    elm.parentNode.removeChild(elm);
    expect(fn).not.toThrow();
  });

});
