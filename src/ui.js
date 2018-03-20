export function updateUI(tama) {
  $(".output p").remove();
  if (tama.dead === true) {
    $(".output").append("<p class='stage'>" + tama.name + " is dead.</p>")
  } else if (tama.dead === false) {
    $(".output").append("<p class='stage'>" + tama.name + " is a " + tama.stage + "</p>")
  }
  $(".output").append("<p class='food'>Food Level: " + tama.foodLevel + "</p>")
  $(".output").append("<p class='happy'>Happy Level: " + tama.happyLevel + "</p>")
  if (tama.dirty === true) {
    $(".output").append("<p class='poop'>" + tama.name + " pooped!</p>")
  } else if (tama.dirty === false) {
    $(".output").append("<p class='poop'>No poop here</p>")
  }
//$(".output").append("<p class='dead'>Dead: " + tama.dead + "</p>")
 if (tama.fever > 0) {
   $(".output").append("<p class='sick'>" + tama.name + " is sick!</p>")
 }
 else if (tama.fever === 0) {
   $(".output").append("<p class='sick'>Healthy</p>")
 }

}

// export function getImg(stage) {
//   let eggImg;
//   let babyImg;
//   let childImg;
//   let teenImg;
//   let adultImg;
//   let sickImg;
//   let deadImg;
//
//   $.ajax({
//     url: `http://api.giphy.com/v1/gifs?ids=ALyYKLZO9kMMM,S0saIQAGkcKYw,RUTAB8G4u9XHi,Ftdn5h5qNIKJO,oAPJaYnKwiFsA,HErSvGEx7CXAY,jagjooUaC4wqQ&api_key=${process.env.API_KEY}`,
//     type: 'GET',
//     data: {
//       format: 'json'
//     },
//     success: function(response) {
//       eggImg = response.data[0].images.original.url;
//       babyImg = response.data[1].images.original.url;
//       childImg = response.data[2].images.original.url;
//       teenImg = response.data[3].images.original.url;
//       adultImg = response.data[4].images.original.url;
//       sickImg = response.data[5].images.original.url;
//       deadImg = response.data[6].images.original.url;
//     }
//   });
//
//   if (stage === "egg") { return eggImg; }
//   else if (stage === "baby") { return babyImg; }
//   else if (stage === "child") { return childImg; }
//   else if (stage === "teen") { return teenImg; }
//   else if (stage === "adult") { return adultImg; }
//   else if (stage === "sick") { return sickImg; }
//   else if (stage === "dead") { return deadImg; }
//   else { return eggImg; }
//
// }
