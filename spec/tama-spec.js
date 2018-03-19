import { Tama } from './../src/tama.js';

describe('Tama', function() {
  let newTama = new Tama("Frank");

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and food/happiness levels set to 10', function() {
    expect(newTama.name).toEqual("Frank");
    expect(newTama.foodLevel).toEqual(10);
    expect(newTama.happyLevel).toEqual(10);
  });

});
