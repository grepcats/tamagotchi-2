export class Tama {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.happyLevel = 10;
    this.dead = false;
  }
  setFoodLevel(){
    setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel--;
      }
    }, 10000);
  }
  setHappyLevel(){
    setInterval(() => {
      if (this.happyLevel > 0) {
        this.happyLevel--;
      }
    }, 10000);
  }

  feed() {
    this.foodLevel += 2;
  }

  play() {
    this.happyLevel += 2;
  }

  cry() {
    if (this.foodLevel <= 5 || this.happyLevel <= 5) {
      return ("Pay attention to me!");
    }
  }

  die() {
    if (this.foodLevel === 0 && this.happyLevel === 0) {
      setTimeout(() => {
        this.dead = true;
      }, 60000);
    }
  }


}
