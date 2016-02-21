import isElement from './is-element';


describe('isElement', () => {

  it('no input', () => {
    expect(isElement()).toEqual(false);
  });

  it('null', () => {
    expect(isElement(null)).toEqual(false);
  });

  it('boolean', () => {
    expect(isElement(true)).toEqual(false);
    expect(isElement(false)).toEqual(false);
  });

  it('number', () => {
    expect(isElement(1)).toEqual(false);
    expect(isElement(1.23)).toEqual(false);
  });

  it('string', () => {
    expect(isElement('aaa')).toEqual(false);
  });

  it('array', () => {
    expect(isElement([])).toEqual(false);
    expect(isElement(['aaa', 'bbb', 'ccc'])).toEqual(false);
  });

  it('object', () => {
    expect(isElement({})).toEqual(false);
    expect(isElement({aaa: 'bbb', ccc: 'ddd'})).toEqual(false);
  });

  it('text node', () => {
    var dummy = document.body.appendChild(document.createTextNode('aaa'));
    expect(isElement(dummy)).toEqual(false);
  });

  it('document fragment', () => {
    var dummy = document.body.appendChild(document.createDocumentFragment());
    expect(isElement(dummy)).toEqual(false);
  });

  it('HTML element', () => {
    var dummy = document.body.appendChild(document.createElement('div'));
    expect(isElement(dummy)).toEqual(true);
  });

  it('SVG Element', () => {
    var dummy = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    document.body.appendChild(dummy);
    expect(isElement(dummy)).toEqual(true);
  });

});
