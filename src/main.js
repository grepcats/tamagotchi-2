import { Tama } from './tama.js';
import './styles.css';

//process.env.API_KEY
//api.giphy.com
//api.giphy.com/v1/gifs/l07qxaQ4Wj3qw?api_key=process.env.API_KEY

$(document).ready(function(){
  //API call
  $.ajax({
    url: `http://api.giphy.com/v1/gifs/l07qxaQ4Wj3qw?api_key=${process.env.API_KEY}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $(".pictures").append(`<p>The picture id is: ${response.data.id}</p>` );
      $(".pictures").append(`<img src="${response.data.embed_url}"/>`);
      $(".pictures").append("<img src='./img/test.gif'>");
    }
  });



  $("#create-tama").submit(function(event) {
    event.preventDefault();

    let newTama = new Tama($("#name").val());
    newTama.setFoodLevel();
    newTama.setHappyLevel();
    newTama.poop();
    newTama.grow();
    let setDeathCounter = false;

    setInterval(() => {
      $(".output p").remove();
      $(".output").append("<p class='stage'>" + newTama.name + " is a " + newTama.stage + "</p>")
      $(".output").append("<p class='food'>Food Level: " + newTama.foodLevel + "</p>")
      $(".output").append("<p class='happy'>Happy Level: " + newTama.happyLevel + "</p>")
      $(".output").append("<p class='poop'>Pooped: " + newTama.dirty + "</p>")
      $(".output").append("<p class='dead'>Dead: " + newTama.dead + "</p>")

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
      newTama.feed();
      $(".food").html("<p class='food'>Food Level: " + newTama.foodLevel + "</p>");
    });

    $("#play").click(function() {
      newTama.play();
      $(".happy").html("<p class='happy'>Happy Level: " + newTama.happyLevel + "</p>")
    });

    $("#clean").click(function() {
      newTama.clean();
      $(".poop").html("<p class='poop'>Pooped: " + newTama.dirty + "</p>")
    });

    // $("#medicate").click(function() {
    //   newTama.medicine();
    //   $(".sick").html("<p class='sick'>Sick level: " + newTama.fever + "</p>")
    //
    // });

    $("#update").click(function() {
      newTama.die();
      $(".output p").remove();
      $(".output").append("<p class='stage'>" + newTama.name + " is a " + newTama.stage + "</p>")
      $(".output").append("<p class='food'>Food Level: " + newTama.foodLevel + "</p>")
      $(".output").append("<p class='happy'>Happy Level: " + newTama.happyLevel + "</p>")
      $(".output").append("<p class='poop'>Pooped: " + newTama.dirty + "</p>")
      // $(".output").append("<p class='sick'>Sick level: " + newTama.fever + "</p>")
      $(".output").append("<p class='dead'>Dead: " + newTama.dead + "</p>")

    });

  });

});
