import {getBox} from './../';


describe('Collection box', () => {

  let elm1 = null;
  let elm2 = null;

  function createElement (style = {}) {
    let element = document.createElement('div');
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
    elm1 = createElement({
      position: 'absolute',
      width: '100px',
      height: '100px',
      left: '0px',
      top: '0px'
    });
    document.body.appendChild(elm1);

    elm2 = createElement({
      position: 'absolute',
      width: '100px',
      height: '100px',
      left: '200px',
      top: '100px'
    });
    document.body.appendChild(elm2);
  });

  afterEach(() => {
    const test_elements = document.querySelectorAll('.testElement');
    for (let i = 0, j = test_elements.length; i < j; i++) {
      const element = test_elements[i];
      element.parentNode.removeChild(element);
    }
  });

  it('should get properties of collection', () => {
    const boxes = document.getElementsByTagName('div');
    const box = getBox(boxes);
    expect(box.left).toEqual(0);
    expect(box.top).toEqual(0);
    expect(box.width).toEqual(300);
    expect(box.height).toEqual(200);
  });

});
