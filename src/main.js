import { Tama } from './tama.js';
import './styles.css';

$(document).ready(function(){
  $("#create-tama").submit(function(event) {
    event.preventDefault();

    let newTama = new Tama($("#name").val());
    newTama.setFoodLevel();
    newTama.setHappyLevel();
    newTama.poop();
    newTama.grow();


    $(".output").append("<p class='stage'>" + newTama.name + " is a " + newTama.stage + "</p>")
    $(".output").append("<p class='food'>Food Level: " + newTama.foodLevel + "</p>")
    $(".output").append("<p class='happy'>Happy Level: " + newTama.happyLevel + "</p>")
    $(".output").append("<p class='poop'>Pooped: " + newTama.dirty + "</p>")

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

    $("#update").click(function() {
      $(".output p").remove();
      $(".output").append("<p class='stage'>" + newTama.name + " is a " + newTama.stage + "</p>")
      $(".output").append("<p class='food'>Food Level: " + newTama.foodLevel + "</p>")
      $(".output").append("<p class='happy'>Happy Level: " + newTama.happyLevel + "</p>")
      $(".output").append("<p class='poop'>Pooped: " + newTama.dirty + "</p>")
    });

  });

});
