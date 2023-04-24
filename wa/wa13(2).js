$(document).ready(function(){
  
    var magic8Ball = {};
    magic8Ball.listofanswers = ["Eh, that volume is too low.", "It is a no, try another number.", "I guess you can have that volume.", "Signs point to yes, but then again, signs can be pretty unreliable.", "Volume Set.", "As I see it, yes.", "Don't count on it.", "You really want your volume set to THAT?.", "Yes.", "Try again and again.", "Absolutely not.", "Ask again later.", "That volume is not available .", "Cannot give you that volume.", "Concentrate and ask again.", "Taking a break, be back in 5, not volume for now.", "My reply is no.", "My sources say no, you can't have that volume.", "You should go get your computer checked out.", "Muted."];
   
    magic8Ball.getAnswer = function(question)
    {
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
      
      $("#8ball").effect( "shake" );
      $("#answer").text( answer );
      $("#answer").fadeIn(3000);
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  
      console.log(question);
      console.log(answer);
    };
    $("#answer").hide();
  
    var onClick = function()
    {
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
      var question = prompt("What volume do you want (1-100) ?");
      magic8Ball.getAnswer(question);
    };
    
    $("#questionButton").click( onClick );
  });