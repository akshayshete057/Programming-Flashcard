$(document).ready(function() {

  // Helpers //

  var randBetween = function(start, end) {
    return Math.floor(Math.random() * end) + start;
  };




  // Main App //

  // Retrieve Question word and update HTML
  var successCallback = function(data) {
    wordCount = data.quiz.length - 1;
    //console.log(wordCount)
    wordIndex = randBetween(0, wordCount);

    $(".loading").hide();
    var question=data.quiz[wordIndex].question;
    var answer = data.quiz[wordIndex].answer;

    var len = answer.length;
    
    $("#question").html(question);
    $("#answer").html(answer);


  };

  // Load Question content from JSON file
  $.getJSON('data.json', successCallback);

});
