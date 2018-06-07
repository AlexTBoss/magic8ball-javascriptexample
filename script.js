$(document).ready(function(){

    var magic8Ball = {};

    magic8Ball.listOfAnswers = ["No", "Yes", "No way!", "Of course!", "Try Harder", "Pray to Lesbian Jesus"];
    $("#answer").hide();
    magic8Ball.askQuestion = function(question){
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
      $("#8ball").effect("shake");
        $("#answer").text(answer);


    };


    var onClick = function() {
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

      $("#answer").fadeIn(2000);
      setTimeout(
             function() {
                 var question = prompt("Ask a yes or no question")
                 magic8Ball.askQuestion(question)}, 1000);
    };
$("#questionButton").click(onClick);
});
