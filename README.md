# The Box

Utilities for working with DOM boxes.

[![npm](https://img.shields.io/npm/v/the-dom-box.svg?maxAge=2592000)](https://www.npmjs.com/package/the-dom-box)
[![npm](https://img.shields.io/github/license/fczbkk/the-box.svg?maxAge=2592000)](https://github.com/fczbkk/the-box/blob/master/LICENSE)
[![David](https://img.shields.io/david/fczbkk/the-box.svg?maxAge=2592000)](https://david-dm.org/fczbkk/the-box)
[![Travis](https://img.shields.io/travis/fczbkk/the-box.svg?maxAge=2592000)](https://travis-ci.org/fczbkk/the-box)

## How to use

Install the library via NPM:

```shell
npm install the-dom-box --save
```

Then use in your project like this:

```javascript
import TheBox from 'the-dom-box';

// define some boxes
var my_element = document.getElementById('my_box');
var my_element_box = TheBox.getBox(my_element);
var viewport_box = TheBox.getBox('viewport');

// update box properties to reflext current size and position of input
my_element.style.left = '100px';
my_element_box.update();

// determine whether element can fit inside the viewport
TheBox.canContain(viewport_box, my_element_box); // -> true

// determine whether viewport can contain element with 100px empty space around it
my_element_box.pad(100);
TheBox.canContain(viewport_box, my_element_box); // -> false
```

## Documentation

### getBox

Checks for the type of `input` and returns appropriate Box object.

**Parameters**

-   `input` **\[Any]** 

Returns **[Box](#box)** instance of Box object

### BoxProperties

Data object representing a box, with basic properties.

### Box

Class representing an abstract Box.

#### constructor

Constructs generic Box object.

**Parameters**

-   `input` **\[[BoxProperties](#boxproperties)](default {})** 

#### pivot

**Properties**

-   `pivot` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `pivot.left` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Left position of Box's pivot.
    -   `pivot.top` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Top position of Box's pivot.

#### set

Updates properties of the box

**Parameters**

-   `properties` **\[[BoxProperties](#boxproperties)](default {})** 

Returns **[BoxProperties](#boxproperties)** 

#### get

Gets current properties of the box.

Returns **[BoxProperties](#boxproperties)** 

#### update

Updates properties of the Box according to the Box's input. This doesn't really do anything in Generic Box. But it recalculates box properties for DOM element, collection, viewport, etc.

Returns **[BoxProperties](#boxproperties)** 

#### pad

Adds padding to the whole box.

**Parameters**

-   `padding` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]**  (optional, default `0`)

#### padHorizontal

Adds padding to the left and right side of box.

**Parameters**

-   `padding` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]**  (optional, default `0`)

#### padVertical

Adds padding to the top and bottom side of box.

**Parameters**

-   `padding` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]**  (optional, default `0`)

#### moveTo

Move box to a specific location

**Parameters**

-   `left` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** 
-   `top` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** 

Returns **[Box](#box)** 

#### movePivotTo

Moves pivot of the box to a specific location, recalculates the other properties accordingly.

**Parameters**

-   `left` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** 
-   `top` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** 

Returns **[BoxProperties](#boxproperties)** 

#### moveBy

Moves the box by a distance.

**Parameters**

-   `horizontal` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** 
-   `vertical` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** 

Returns **[BoxProperties](#boxproperties)** 

#### resizeTo

Resizes the box to a specific size.

**Parameters**

-   `width`  
-   `height`  

Returns **[BoxProperties](#boxproperties)** 

#### resizeBy

Resizes the box by a specific value.

**Parameters**

-   `horizontal` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** 
-   `vertical` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** 

Returns **[BoxProperties](#boxproperties)** 

#### toString

Returns text representation of Box properties. Used for debugging.

**Parameters**

-   `pretty` **\[[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** If `true`, returns pretty formatted string. (optional, default `false`)

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### ElementBox

**Extends Box**

Class representing Box of an Element.

### CollectionBox

**Extends Box**

Class representing bounding Box around collection of elements. Accepts either HTMLCollection (e.g. `getElementsByTagName()`) or NodeList (e.g. `querySelectorAll()`).

### DocumentBox

**Extends Box**

Class representing Box of whole document.

### ViewportBox

**Extends Box**

Class representing Box of viewport.

### get-distance

Returns horizontal, vertical, direct and pivot distance between two boxes.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 

Returns **{horizontal: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), vertical: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), pivot: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)}** 

### get-difference

Returns horizontal and vertical difference between two boxes. Positive values mean that boxes are apart, zero value means boxes are touching, negative value means boxes are overlapping.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 

Returns **{horizontal: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), vertical: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)}** 

### get-overlap

Returns box for an area where both boxes are overlapping. Returns `null` if boxes do not overlap.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 

Returns **([Box](#box) | null)** 

### detect-overlap

Returns true if both boxes overlap at least partially.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### get-pivot-angle

Returns angle between pivots of both boxes. Can be used with [Angle JS](https://github.com/fczbkk/angle-js) to determine direction of one box relative to another.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 
-   `use_radian` **\[[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** If `true`, returns result in radians, otherwise in degrees. (optional, default `false`)

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

### move-inside

Changes position of `b` to the closest position where it is completely inside `a`. If `b` can not fit `a`, it is positioned at top-left corner of `a`.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 

### contains

Returns `true` if box `b` is completely inside box `a`.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### can-contain

Returns `true` if `b` can fit completely inside `a`.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### can-coexist

Returns `true` if both `b` and `c` can fit completely inside `a` without changing their respective positions. Handy when deciding if boxes can be fully scrolled into a viewport.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 
-   `c` **[Box](#box)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### can-fit-around

Returns `true` if `c` can be positioned inside `a` so that it will not collide with `b`.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 
-   `c` **[Box](#box)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### find-closest

Returns box that is closest to `a`.

**Parameters**

-   `a` **[Box](#box)** 
-   `boxes` **\[[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Box](#box)>]**  (optional, default `[]`)
-   `property` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Box's distance property (`horizontal`, `vertical`, `direct` or `pivot`) that will be used to evaluate ([see `getDistance()`](<{@link getDistance}>)). (optional, default `'direct'`)

Returns **([Box](#box) | null)** 

### fit-around

Changes positino of `c` so that it is positioned inside `a` without colliding with `b`. If it is not possible, position of `c` is unchanged. It will move the box to a new position closest to its original position.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 
-   `c` **[Box](#box)** 

### shrink-to-fit

Adjusts size of `b` so that it fits `a` while keeping the original aspect ratio. Does nothing if `b` is smaller than `a`.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 

### align

Adjusts position of `b` so that it is aligned to `a`.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 
-   `horizontal` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** 'left', 'right' or 'center'
-   `vertical` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** 'top', 'bottom' or 'center

### touch

Move `b` so that it touches `a` from the outside.

**Parameters**

-   `a` **[Box](#box)** 
-   `b` **[Box](#box)** 
-   `horizontal` **\[(null | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))]** Either `left` or `right`.
-   `vertical` **\[(null | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))]** Either `top` or `bottom`.
