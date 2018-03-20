let deathTimeout;

export class Tama {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.happyLevel = 10;
    this.dead = false;
    this.dirty = false;
    this.stage = "baby";
    this.fever = 0;
  }
  setFoodLevel(){
    setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel--;
      }
    }, 1000); //change this back to 10 seconds for passing tests
  }
  setHappyLevel(){
    setInterval(() => {
      if (this.happyLevel > 0) {
        this.happyLevel--;
        return this.happyLevel;
      }
    }, 1000); //change this back to 10 seconds for passing tests

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


  lifeStatus(status) {
    if (status === "dead") {
      this.dead = true;
    }

    if (status === "dying") {
      console.log("death timeout started")
      deathTimeout = setTimeout(() => {
        this.dead = true;
      }, 10000); //change back to 60000 for passing tests
    }

    if (status === "alive") {
      clearTimeout(deathTimeout);
      console.log("death timeout stopped")
    }
  }

  poop() {
    let poopInterval;
    let sickStart = false;
    if(this.foodLevel > 0){
      console.log("poopinterval started")
      poopInterval = setInterval(() => {
        this.dirty = true;
        if (this.fever === 0 && sickStart === true) {
          sickStart = false;
        }
        if (!sickStart) {
          sickStart = true;
          console.log("sick has started")
          this.sick();
        }
        if (this.foodLevel === 0) {
          clearInterval(poopInterval);
          console.log("poopinterval cleared")
        }
      }, 5000) //change this back to 50000 for passing tests
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
        if (this.stage === "adult" || this.foodLevel === 0) {
          clearInterval(growthInterval)
        }
      }, 10000); //change this back to 60000 for passing tests

    }



  }
  sick(){
    let sickInterval;
    if(this.dirty === true){
      sickInterval = setInterval (() => {
        this.fever++;
        if (this.dirty === false) {
          clearInterval(sickInterval);
          console.log("sick was stopped")
        }

        if(this.fever >= 10){
          clearInterval(sickInterval)
          this.dead = true;
        }
      }, 3000);


    }
  }

  medicine(){
    if (this.fever > 0)
    {
      this.fever--;
    }
  }
}
