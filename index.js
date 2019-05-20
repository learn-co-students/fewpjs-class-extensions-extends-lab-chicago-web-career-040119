// Your code here

class Polygon {
  constructor(numArr){
    this.numArr = numArr
  }

  get countSides() {
    return this.numArr.length
  }

  get perimeter() {
    let perimeter = 0;
    this.numArr.forEach(side => perimeter += side);
    return perimeter;
  }
}


class Triangle extends Polygon {

  get isValid() {
    let sides = this.numArr;
    return sides[0] + sides[1] > sides[2] && sides[2] + sides[1] > sides[0] && sides[0] + sides[2] > sides[1]
  }
}


class Square extends Polygon {

  get isValid() {
    let sides = this.numArr;
    return sides[0] === sides[1] && sides[0] === sides[2] && sides[0] === sides[3]
  }

  get area() {
    let sides = this.numArr;
    return sides[0] * sides[1];
  }
}
