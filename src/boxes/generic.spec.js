import Box from './generic';


describe('Generic Box', () => {

  var empty_box = null;
  var test_box = null;

  beforeEach(() => {
    empty_box = new Box();
    test_box = new Box({
      left: 100,
      top: 200,
      width: 300,
      height: 400
    });
  });


  describe('meta', () => {

    it('should exist', () => {
      expect(empty_box).toBeDefined();
    });

    it('should have zero properties by default', () => {
      expect(empty_box.left).toEqual(0);
      expect(empty_box.top).toEqual(0);
      expect(empty_box.width).toEqual(0);
      expect(empty_box.height).toEqual(0);
    });

    it('should use custom properties if provided', () => {
      var box = new Box({
        left: 100,
        width: 100
      });
      expect(box.left).toEqual(100);
      expect(box.top).toEqual(0);
      expect(box.width).toEqual(100);
      expect(box.height).toEqual(0);
    });

    it('should calculate right and bottom properties', () => {
      expect(test_box.right).toEqual(400);
      expect(test_box.bottom).toEqual(600);
    });

    it('should set properties', () => {
      empty_box.set({
        left: 100,
        width: 200
      });
      expect(empty_box.left).toEqual(100);
      expect(empty_box.width).toEqual(200);
    });

    it('should get properties', () => {
      expect(empty_box.get()).toEqual({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
      });
    });

    it('should get pivot coordinates', () => {
      expect(test_box.pivot).toEqual({
        left: 250,
        top: 400
      });
    })

  });

  describe('methods', () => {

    it('pad', () => {
      test_box.pad(50);
      expect(test_box.get()).toEqual({
        left: 50,
        top: 150,
        right: 450,
        bottom: 650,
        width: 400,
        height: 500
      });
    });

    it('moveTo', () => {
      test_box.moveTo(50, 150);
      expect(test_box.get()).toEqual({
        left: 50,
        top: 150,
        right: 350,
        bottom: 550,
        width: 300,
        height: 400
      });
    });
    
    it('movePivotTo', function () {
      test_box.movePivotTo(0, 0);

      const result = test_box.get();

      expect(result.left).toEqual(-150);
      expect(result.top).toEqual(-200);
    });

    it('moveBy', () => {
      test_box.moveBy(50, 50);
      expect(test_box.get()).toEqual({
        left: 150,
        top: 250,
        right: 450,
        bottom: 650,
        width: 300,
        height: 400
      });
    });

    it('resizeTo', () => {
      test_box.resizeTo(100, 100);
      expect(test_box.get()).toEqual({
        left: 100,
        top: 200,
        right: 200,
        bottom: 300,
        width: 100,
        height: 100
      });
    });

    it('resizeBy', () => {
      test_box.resizeBy(100, 100);
      expect(test_box.get()).toEqual({
        left: 100,
        top: 200,
        right: 500,
        bottom: 700,
        width: 400,
        height: 500
      });
    });

  });

});
