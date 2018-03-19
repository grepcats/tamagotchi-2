export class Tama {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.happyLevel = 10;
  }
  setFoodLevel(){
    setInterval(() => {
      this.foodLevel--;
    }, 10000);
  }
  setHappyLevel(){
    setInterval(() => {
      this.happyLevel--;
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


}
