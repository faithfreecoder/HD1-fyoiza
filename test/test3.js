(function(){
  'use strict';
  var jasmine = require('jasmine');

  var jasmine = jasmine.expect;

  var Polygon = require('../lib/library4.js');

  describe("Polygon Class: Create a Polygon, and get sides of Polygon", function() {

    it("The Polygon should be a type of `object`, and an instance of the `Polygon` class", function() {
      var triangle = new Polygon('Triangle');
      expect(typeof triangle).toEqual(typeof {});
      expect(triangle instanceof Polygon).toBeTruthy();
    });

    it("The Polygon should be a type of `object`, and an instance of the `Polygon` class", function() {
      var square = new Polygon('square');
      expect(typeof square).toEqual(typeof {});
      expect(square instanceof Polygon).toBeTruthy();
    });

    it("The Polygon should be a type of `object`, and an instance of the `Polygon` class", function() {
      var pentagon = new Polygon('pentagon');
      expect(typeof pentagon).toEqual(typeof {});
      expect(pentagon instanceof Polygon).toBeTruthy();
    });

    it("The Polygon should be a type of `object`, and an instance of the `Polygon` class", function() {
      var hexagon = new Polygon('hexagon');
      expect(typeof hexagon).toEqual(typeof {});
      expect(hexagon instanceof Polygon).toBeTruthy();
    });
    it("The Polygon should be a type of `object`, and an instance of the `Polygon` class", function() {
      var heptagon = new Polygon('heptagon');
      expect(typeof heptagon).toEqual(typeof {});
      expect(heptagon instanceof Polygon).toBeTruthy();
    });

    it("The Polygon should be a type of `object`, and an instance of the `Polygon` class", function() {
      var octagon = new Polygon('octagon');
      expect(typeof octagon).toEqual(typeof {});
      expect(octagon instanceof Polygon).toBeTruthy();
    });

    it("The Polygon should be a type of `object`, and an instance of the `Polygon` class", function() {
      var nonagon = new Polygon('nonagon');
      expect(typeof nonagon).toEqual(typeof {});
      expect(nonagon instanceof Polygon).toBeTruthy();
    });
  });
})();
