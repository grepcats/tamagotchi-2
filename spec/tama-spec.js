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

});
