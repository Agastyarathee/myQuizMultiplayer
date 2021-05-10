class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
    //write code to change the background color here
background("orange");
    //write code to show a heading for showing the result of Quiz
textSize(30);
fill("black");
text("Result of the Quiz",250,50);
    //call getContestantInfo( ) here
    Contestant.getContestantInfo();

    //write condition to check if contestantInformation is not undefined
    if(allContestants !== undefined){
      for(var plr in allContestants){
        var correctAns ="2";
        if(correctAns===allContestants[plr].answer)
      {
        fill("green");
          text (allContestants[plr].name + ":"+allContestants[plr].answer,200,300);
      }
      else{
        fill("red");
          text (allContestants[plr].name + ":"+allContestants[plr].answer,200,350);
      }
    }
    }
      
  
    
  }

}
