class Polygon {
  constructor(side) {
    this.side = side;
   // this.base = base;
  }
  
  get sides() {
    return this.countSides();
  }

  countSides() {
    //return this.height * this.base/2;
    return this.side;
  }
}

const triangle = new Polygon(3);
const square = new Polygon(4);
const pentagon = new Polygon(5);
const hexagon = new Polygon(6)
const heptagon = new Polygon(7);
const octagon = new Polygon(8);
const nonagon = new Polygon(9);

//console.log(heptagon.sides);

module.exports = Polygon;