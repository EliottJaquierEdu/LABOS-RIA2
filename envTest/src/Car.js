export class Car {
  constructor() {
    this.speed = 0;
  }

  accelerate() {
    this.speed += 1;
  }

  decelerate() {
    this.speed -= 1;
  }

  getSpeed() {
    return this.speed;
  }
}