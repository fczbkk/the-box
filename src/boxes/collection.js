// TODO revisit when general library is ready

// This handles either HTMLCollection (e.g. `getElementsByTagName()`)
// or NodeList (e.g. `querySelectorAll()`).

class BoxCollection extends Box {

  update () {
    let boxes = [];
    for (let i = 0, j = this.input.length; i < j; i++) {
      boxes.push(new BoxElement(this.input[i]));
    }
    const bounding_box = DomBox.getBoundingBox(boxes);
    return this.set(bounding_box);
  }

}
