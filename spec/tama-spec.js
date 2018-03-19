import { Tama } from './../src/tama.js';

describe('Tama', function() {
  let newTama;

  beforeEach(function() {
    jasmine.clock().install();
    newTama = new Tama("Frank");
    newTama.setFoodLevel();
    newTama.setHappyLevel();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and food/happiness levels set to 10', function() {
    expect(newTama.name).toEqual("Frank");
    expect(newTama.foodLevel).toEqual(10);
    expect(newTama.happyLevel).toEqual(10);
  });

  it('The food and happiness levels should go down 1 every 10 seconds you dont feed it', function() {
    jasmine.clock().tick(10001);
    expect(newTama.foodLevel).toEqual(9);
    expect(newTama.happyLevel).toEqual(9);
  });

  it('Should increase food levels when fed', function() {
    newTama.feed();
    expect(newTama.foodLevel).toEqual(12);

  });

  it('should increase the happyLevel when they play with it', function() {
    newTama.play();
    expect(newTama.happyLevel).toEqual(12);
  });

  it('should cry when food or happy levels are below 50%', function() {
    jasmine.clock().tick(50001);
    expect(newTama.cry()).toEqual("Pay attention to me!");
  });

  it('should die if food and happy levels remain at 0 for a minute', function() {
    newTama.foodLevel = 0;
    newTama.happyLevel = 0;
    newTama.die();
    jasmine.clock().tick(60001);
    expect(newTama.dead).toEqual(true);
  });

  it('it should poop every 5 seconds after it eats', function() {
    newTama.foodLevel = 5;
    newTama.poop();
    jasmine.clock().tick(50001);
    expect(newTama.dirty).toEqual(true);
  });

  it('should clean tamagotchi, setting dirty to false', function() {
    newTama.poop();
    jasmine.clock().tick(50001);
    newTama.clean();

    expect(newTama.dirty).toEqual(false);
  });

  it('should allow tamagotchi to grow a stage every minute', function() {
    newTama.grow();
    jasmine.clock().tick(60001);
    expect(newTama.stage).toEqual("child");
  });

  it('should stop growing once its an adult', function() {
    newTama.stage = "adult";
    newTama.grow();
    jasmine.clock().tick(60001);
    expect(newTama.stage).toEqual("adult");
  });

  it('should stop growing if food level reaches 0', function() {
    newTama.foodLevel = 2;
    newTama.grow();
    jasmine.clock().tick(60001);
    expect(newTama.stage).toEqual("baby");
  });

  it('should restart growth at the same stage once fed', function() {
    newTama.foodLevel = 2;
    newTama.grow();
    jasmine.clock().tick(60001);
    newTama.foodLevel = 10;
    newTama.grow();
    jasmine.clock().tick(60001);
    expect(newTama.stage).toEqual("child");
  });

  it('should should get sick', function(){
    newTama.dirty = true;
    newTama.sick();
    jasmine.clock().tick(120001);
     expect(newTama.fever).toEqual(2)
  });

  it('should get better when its sick', function(){
    newTama.fever = 1;
    newTama.medicine()

    expect(newTama.fever).toEqual(0);
  });

  it('should die if the temp. reaches 10', function(){
    newTama.fever = 10;
    newTama.dirty = true;
    newTama.sick();

    expect(newTama.dead).toEqual(true);
  });

});
