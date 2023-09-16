#!/usr/bin/node
/* class Rectangle that defines a rectangle*/
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0) {
        // If either width or height is non-positive, create an empty object.
        return 'Rectangle {}';
      }else
      // Initialize the instance attributes width and height with the provided values.
      this.width = w;
      this.height = h;
    }
}

module.exports = Rectangle;