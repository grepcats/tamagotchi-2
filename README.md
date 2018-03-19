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

* If the tamagotchi has a food level of > 0, it will poop every 5 seconds
  * Input: food level > 0 and every 5 seconds
  * Output: Tama will become dirty

* Program should allow user to clean tamagotchi when they are dirty
  * Input: clean method
  * Output: tamagotchi dirty attribute = false

* Program should allow tamagotchi to grow at regular intervals given tama is kept fed
  * Input: tama with foodlevel > 0 grows a stage every minute
  * Output: tama moves through stages (baby, child, teen, adult)

* Program should stop tama growth if food level reaches zero
  * Input: tama at baby stage with food level 0
  * Output: tama stays at baby stage despite time passage of a minute

* Program should prevent tama from aging past adulthood
  * Input: tama at adult stage (3)
  * Output: clearInterval

* Program should restart growth at the same stage if growth is stopped and food is resumed
  * Input: tama at baby stage stops growth and then is fed again
  * Output: tama reaches child stage after a minute
