//* Variables *//
var correctAns = 0;


//* Query Selector Variables *//
var startEl = document.querySelector("#start");
var timerEl = document.querySelector("#countdown");
var scoreEl = document.querySelector("#finalscore");
var submitEl = document.querySelector("#namesubmit");
var questionEl = document.querySelector("#questions")
var answerEl = document.querySelector("#answers");
var choiceA = document.querySelector("#ans1");
var choiceB = document.querySelector("#ans2");
var choiceC = document.querySelector("#ans3");
var choiceD = document.querySelector("#ans4");
var checkAnswer = document.querySelector("#checkanswer");
var returnBtn = document.querySelector("#startOverBtn");
var clearscoreBtn = document.querySelector("#clearScoreBtn");


//* Quiz Questions Array *//
var questArray = [
    {
        question: "What does CSS stand for?",
        choices: ["A. Cascading Strong Styles", "B. Creating Shoddy Stylesheets", "C. Cascading Style Sheets", "D. Credence Clearwater Revival"],
        answer: "C. Cascading Style Sheets"
    },
    {  question: "What tag do you use to reference Javascript in your HTML?",
       choices: ["A. <javascript>", "B. <script>", "C. <jss>", "D. <cofeescript>"],
        answer: "B. <script>"
    },
    { question: "The first index of an array is ____.",
      choices: ["A. 0", "B. 1", "C. 8", "D. any"],
      answer: "A. 0"
    },

    { question: "What are some commonly used data types?",
      choices: ["A. Booleans", "B. Numbers", "C. Strings", "D. All of the above"],
      answer: "D. All of the above"
    }  
];

//* Start Quiz Function when the start quiz button is clicked *//
function startQuiz () {

}

//* Quiz Timer *//
function timerStart() {
    var timer;
    var countdown = 25;

    timer = setInterval(function() {
        countdown--;
        timerEl.textContent = countdown;
        if(countdown <= 0) {
            clearInterval(timer);
            if
        }

        