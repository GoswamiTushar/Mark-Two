var readlineSync = require("readline-sync");
const chalk = require("chalk");
var rankholders = [{Name : "Tushar",
                    Score : 11}] // Scoreboard
var friends = ["Tushar"]; //Friends List
var score = 0;
var difficulty = 0;

var name = readlineSync.question("What is your name? \n\n"); //Players Name

//Just to sort rankholders based on their score
function compare(a, b){
  //Checking Score
  if (a.Score > b.Score){
    return -11;
  }
  else if(a.Score < b.Score){
    return 1;
  }
  else{
    return
  }
}

//Fucntion to display scoreboard
function scoreboard(rankholders){
  rankholders.sort(compare); //Sort the score board
  console.log("Scoreboard\n");

  for(var x = 0; x < rankholders.length; x++){
    console.log(rankholders[x].Name,"     ", rankholders[x].Score, "\n");
  }
  console.log("Now send me the screenshot!!!") // To update scoreboard and friend list/array
}

//QnA begins from here
function askyourfriend(qsn, options, ans, iteration){
  difficulty++;
  console.log(chalk.bgGreen.bold.black("Question No ", iteration, "\n"))
  console.log(chalk.bgWhite.bold.red(qsn));  // Question
  var index = readlineSync.keyInSelect(options, "What do you think? ") //User Answer

  if(index == -1){ //Cancel Feature
    console.log(chalk.bgWhite.bold.blue("Dude got no chill!! \n"))
  }
  
  //Validating user's answer
  else if(index === ans-1){
    console.log(chalk.bold.blue("You are right ", name));
    score++;
    console.log(chalk.bgWhite.bold.blue("Score : ", score));
  }

  //If the answer isn't correct
  else{
    console.log(chalk.bold.red("No worries you can still do better!! \n"));
    console.log(chalk.bgWhite.bold.red("Score : ", score, "\n"))
  }
  if(difficulty % 5 == 0){
    console.log("\n\n",chalk.bgBlue.bold.white("              Hurray!!! Level UP!!       🎉✨ "), "\n\n");
  }
}

//Driver Code

function main(){
  
  // One can not play this came again n again
  if(friends.includes(name)){
    console.log(chalk.bgBlack.bold.yellow("Sorry! ",name, ". You can't play it twice."))
    return; //Returning nothing, pass the control back to function call
  }
  console.log(chalk.bgYellow.bold.white("Tushar and Neogcamp welcome you to The Avengers quiz "), "\n\n");
  // Top-Secret
  var myself = [
    {
      question : "In the 2012 movie, The Avengers features Captain America. What is his real name? ",
      options : ["Buck Rogers", "Tedd Rogers", "Steve Rogers", "Tony Stark"],
      answer : 3
    },
    {
      question : "Who is the leader of S.H.I.E.L.D? ",
      options : ["Nick Fury", "Tony Stark", "Bruce Banner", "DIana Prince"],
      answer : 1
    },
    {
      question : "Which superhero does Bruce Banner transform into?",
      options : ["Iron Man", "Hawkeye", "Thor", "The Hulk"],
      answer : 4
    },
    {
      question : "Who is Loki's adoptive brother? ",
      options : ["Thor", "Tony Stark", "Peter Parker", "Bruce Wayne"],
      answer : 1
    },
    {
      question : "What's the name of the mysterious blue glowing cube that Loki uses as a weapon?",
      options : ["The Orb",
                  "Tesseract",
                  "The Force", "UV Lamp"],
              
      answer : 2
    },
    {
    question : "Which US city do the Avengers battle the Chitauri? ",
    options : ["Los Angeles", "New York City", "Washington DC", "Miami"],
    asnwer : 2
    },
    {
      question : "Who diverts a nuclear missile into a wormhole and defeats the Chitauri army? ",
      options : ["Black Widow", "The Hulk", "Iron Man", "Thor"],
      answer : 3
    },
    {
      question : "What weapon does Thor carry? ",
      options : ["A Hammer", "Bow and Arrow", "A sword"],
      answer : 1
    },
    {
      question : "Who sells Ultron Vibranium and instantly makes $1.285 billion? ",
      options : ["Bruce Banner", "Diana Prince", "Tony Stark", "Ulysses Klaue"],
      answer : 4
    },
    {
      question : "What is Clint Barton's superhero name?",
      options : ["Hawkeye", "Iron Man", "Thor", "Hulk"],
      answer : 1
    },
    {
      question : "In Avengers: Infinity War, what is the name of the villain who's on a mission to collect the infinity stones?",
      options : ["Thanos", "Malekith", "Darren cross"],
      answer : 1
    },
    {
      question : "Which other superhero team do the Avengers join with to try to prevent this? ",
      options : ["Guardians of the galaxy", "The incredibles", "Fantastic four"],
      answer : 1
    },
    {
      question : "Peter Parker appears in Avengers: Infinity War. Who's he better known as? ",
      options : ["Batman",
                 "Superman",
                 "Spiderman",
                 "Way Machine"],
      answer : 3
    },
    {
      question : "Which Marvel character has never appeared in The Avengers films? ",
      options : ["Wasp", "Hawkeye", "Iron Man"],
      answer : 1,
    },
    {
      question : "A new Avengers film will be released in 2019. True or false?",
      options : ["True", "False"],
      answer : 1
    }
  ];

  //Iterating over each QnA and passing it to the function "askyourfriend"
  for (var x = 1; x <= myself.length; x ++){
    askyourfriend(myself[x -1].question, myself[x -1].options, myself[x-1].answer, x)
  }

  //Clear all the previous code
  console.clear();

  //After successfull QnA session, Now append the user's name into the list
  friends.push(name);

  // Along with his/her name ans score
  rankholders.push({Name : name,
                    Score  : score});
  scoreboard(rankholders) //It's Display time
}

// Exectuion begins from here
main()