$(document).ready(function() {

  // var numAndCompDiff = function(x, y) {
  //       return Math.abs(x - y);
  //   };
  // computer must generate a number (x)
  var compNum = Math.floor((Math.random() * 100) + 1);
  // console.log ("computer generated guess");
  var numAttempts = 0;
  // computer keeps track of number of attempts

  // hi or low script
  // var highLow = function(){

  $("button#enterGuess").click(function(event){
    var guessNum = parseInt($("#guessNum").val());

    numAttempts = numAttempts + 1;

    // user must enter a guess (y)
    // computer must compare guess to it's generated #
    if (isNaN(guessNum) ||  guessNum <= 0 || guessNum > 100 || guessNum === "") {
      alert("Please enter a number between 1-100 to play!");
      numAttempts = numAttempts - 1;
    }
    else if (guessNum > compNum) {
      $("#about_your_guess").replaceWith("<h2 id='about_your_guess'>Your guess <span id='bigGuess'>" + guessNum + "</span> is too high.</h2>");
      $("#number_attempts").replaceWith("<h3 id='number_attempts'> Attempt: " + numAttempts + " out of 5.</h3>");
    }
    else if (guessNum < compNum) {
      $("#about_your_guess").replaceWith("<h2 id='about_your_guess'>Your guess <span id='bigGuess'>" +guessNum + "</span> is too low.</h2>");
      $("#number_attempts").replaceWith("<h3 id='number_attempts'>Attempt: " + numAttempts + " out of 5.</h3>");
    }
    else if (guessNum === compNum) {
      $("#about_your_guess").replaceWith("<h2 id='about_your_guess'>You guessed:  <span id='bigGuess'!!!>" +guessNum + "</span> <br> <span class='youwin'>You're a <strong>genius</strong>!!! <br> You win!!!</span></h2>");
      $("#number_attempts").replaceWith("<h3 id='number_attempts'>You guessed on guess number " + numAttempts + " out of 5.</h3>");
      $("#guessInputGroup").toggle();
      $("#endGameButtons").show();
    }
    if (numAttempts === 5 && guessNum !== compNum){
      $("#endGameButtons").show();
      $("#about_your_guess").hide();
      $("#number_attempts").hide();
      $("#you_lose").replaceWith("<h3 id = 'lose_msg'> YOU <span class ='red'>LOSE!</span> <br> You are out of guesses. <br> The number was " +compNum + "!</h3>")

    }
    $("#guess_info").show();
   });

  $("button#reloadPage").click(function(){
      location.reload();
  });

  $("button#overThis").click(function(){
    $("#guess_info").hide();
    $("#end_display").show();
  });

});



// enter button to enter number
// $("#enterGuess").click(function(guessNum) {

// });
