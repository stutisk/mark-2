var readlineSync=require("readline-sync");
const chalk=require("chalk");
var score=0;
const log = console.log;
var userName=readlineSync.question((chalk.underline.white ("Hey what is your name? ",)));
log(   "hiee "+ chalk.keyword("orange")(userName ) +"lets start the quiz" );
log("here are few insructions before you proceed ")
log(" 1) 1 round  5 quesions")
log(" 2) Each queston carries 2 marks and here is no negative marking if you answer wrong")
log(" 3) do not google")
//array of quesions 
var question =[{
  question: "What is the name of the National-award winning Bollywood choreographer, who recently passed away? \n 1 Saroj Khan \n 2 Protik Prakash \n 3 Tridib Ghosh \n 4 Geetha Nagabhushan  \n"  ,
  answer:"1"
},
{
  question:"The Versatile Bollywood actor Irrfan Khan, who recently passed away, had won National award for which movie? \n 1 Lunch Box \n 2 Paan Singh Tomar \n 3 Life of Pi \n 4 Haidar \n"  ,
  answer:"2"
},
{
  question:"Which Bollywood celebrity has been appointed as the first ever brand ambassador of IDFC FIRST Bank?  \n 1 Ranveer Singh \n 2 Amitabh Bachchan \n 3 Shah Rukh Khan\n 4 Salman Khan \n"  ,
  answer:"2"
},
{
  question:"As of 2020, which is the only Bollywood movie to win 13 Filmfare Awards? \n 1 Uri: The Surgical Strike\n 2 Article 15 \n 3 Saand Ki Aankh \n 4 Gully Boy \n" ,
  answer:"4"
},
{
  question:"This film launched Amitabh Bachchan as the 'angry young man' of Bollywood.? \n 1 sholay \n 2 Deevae \n 3 zanjeer \n 4 Gully Boy \n" ,
  answer:"3"
},

]
function quiz(question,answer){
var userAnswer=readlineSync.question(question);
if (userAnswer.toLowerCase()===answer.toLowerCase())
{
  log(chalk.green ("you are right"));
  score=score+2;
  log(chalk.blue ("your score is : " ,score));
  log("___________________________");
  }

else{
 log(chalk.red("sorry wrong answer"));
 log("your score is:",score);
 log("the right answer is:",answer);
 log("___________________________");
 }

}
function game(){
for (i=0;i<question.length;i++){
  var questionList = question[i];
  quiz(questionList.question,questionList.answer)
}

}
var highScores=[
  {
    name:"suti",
    score:"10"

  },
  {
    name:"Sk",
    score:"8"
  }
]
function  showScores(){
  log("yahhhhh! you scored: ", score);
  log("check out the high scores if its greater then the high scores then contact me");
 
  highScores.map(score => console.log(score.name, " : ", score.score))
}
game();
showScores();