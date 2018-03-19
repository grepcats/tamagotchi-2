## Specs
* Program should create a tamagotchi character with food and happiness levels and name
  * Input: Tama(name)
  * Output: new Tama object with that name, full food and full happy

* The food and happiness levels should go down 1 every 10 seconds you don't feed it.
  * Input: The passage of time
  * Output: food and happy levels decrement 1 every 10 seconds

* The program should allow the user to feed the tama to increase food levels
  * Input: feed 
  * Output: Increased food levels (2?)

* The program should allow the user to play with the tama to increase happy levels
  * Input: Play (just a button)
  * Output: Increased happy levels (2)

* If the user allows the food and happy levels to decrease past half, the tama will cry
  * Input: food and happy levels < 50%
  * Output: Cry for attention

* If the user allows the food and happy levels to decrease to 0 for 1 minute, the tama will die
  * Input: food and happy levels = 0 for > 1 minute
  * Output: Ded
