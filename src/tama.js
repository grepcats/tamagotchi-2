export class Tama {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.happyLevel = 10;
    this.dead = false;
    this.dirty = false;
    this.stage = "baby";
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

  poop() {
    if(this.foodLevel > 0){
      setInterval(() => {
        this.dirty = true;
      }, 50000)
    }
  }

  clean() {
    this.dirty = false;
  }

  grow() {
    let stages = ["baby", "child", "teen", "adult"];
    let stageIndex = stages.indexOf(this.stage);
    let growthInterval;
    if (this.stage != "adult") {
        growthInterval = setInterval(() => {
        if (this.foodLevel != 0) {
          stageIndex += 1;
        }
        this.stage = stages[stageIndex];
      }, 60000);
    }
    if (this.stage === "adult" || this.foodLevel === 0) {
      clearInterval(growthInterval)
    }


  }
}
