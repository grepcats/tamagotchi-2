import { Tama } from './tama.js';
import { updateUI } from './ui.js';
import './styles.css';

//process.env.API_KEY
//api.giphy.com
//api.giphy.com/v1/gifs/l07qxaQ4Wj3qw?api_key=process.env.API_KEY

$(document).ready(function(){



  $("#create-tama").submit(function(event) {
    event.preventDefault();


    let newTama = new Tama($("#name").val());
    let eggImg;
    let babyImg;
    let childImg;
    let teenImg;
    let adultImg;
    let deadImg;
    $.ajax({
      url: `http://api.giphy.com/v1/gifs?ids=ALyYKLZO9kMMM,S0saIQAGkcKYw,RUTAB8G4u9XHi,Ftdn5h5qNIKJO,oAPJaYnKwiFsA,jagjooUaC4wqQ&api_key=${process.env.API_KEY}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        eggImg = response.data[0].images.original.url;
        babyImg = response.data[1].images.original.url;
        childImg = response.data[2].images.original.url;
        teenImg = response.data[3].images.original.url;
        adultImg = response.data[4].images.original.url;
        deadImg = response.data[5].images.original.url;
        $(".pictures").html('<img src="' + eggImg + '"/>');

      }
    });
    newTama.setFoodLevel();
    newTama.setHappyLevel();
    newTama.poop();
    newTama.grow();

    let setDeathCounter = false;


    let mainInterval = setInterval(() => {
        updateUI(newTama);
      


      if (newTama.stage === "baby") {
        $(".pictures").html('<img src="' + babyImg + '"/>');
      } else if (newTama.stage === "child") {
        $(".pictures").html('<img src="' + childImg + '"/>');
      } else if (newTama.stage === "teen") {
        $(".pictures").html('<img src="' + teenImg + '"/>');
      } else {
        $(".pictures").html('<img src="' + adultImg + '"/>');
      }
      if (newTama.dead === true) {
        $(".pictures").html('<img src="' + deadImg + '"/>');
        clearInterval(mainInterval);

      }

      if (newTama.foodLevel === 0 && newTama.happyLevel === 0 && setDeathCounter === false) {
        setDeathCounter = true;
        newTama.lifeStatus("dying");
      }

      if (newTama.foodLevel > 0 && newTama.happyLevel > 0 && setDeathCounter === true) {
        console.log(setDeathCounter);
        setDeathCounter = false;
        newTama.lifeStatus("alive");
      }
    }, 1000);

    $("#feed").click(function() {
      if (newTama.foodLevel === 0 ) {
        newTama.poop();
      }
      newTama.feed();
      $(".food").html("<p class='food'>Food Level: " + newTama.foodLevel + "</p>");
    });

    $("#play").click(function() {
      newTama.play();
      $(".happy").html("<p class='happy'>Happy Level: " + newTama.happyLevel + "</p>")
    });

    $("#clean").click(function() {
      newTama.clean();
      $(".poop").html("<p class='poop'>No poop here</p>")
    });

    $("#medicate").click(function() {
      newTama.medicine();
      if (newTama.fever === 0) {
        $(".sick").html("<p class='sick'>Healthy</p>")
      } else {
        $(".sick").html("<p class='sick'>" + newTama.name + " is sick!</p>")
      }

    });

  });

});
