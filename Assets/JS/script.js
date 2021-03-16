//* Variables *//
var correctAns = 0;
var indexArray = 0;
var countdown = 60;
var quest = 0;




//* Query Selector Variables *//
var welcomeEl = document.querySelector(".start-page");
var showEl = document.querySelector(".quiz-container");
var showscoreEl = document.querySelector(".final-score");
var highscoreEl = document.querySelector("#scorelist");
var startEl = document.querySelector("#start");
var timerEl = document.querySelector("#countdown");
var scoreEl = document.querySelector("#finalscore");
var submitBtn = document.querySelector("#submitNameBtn");
var nameInput = document.querySelector("#namesubmit");
var questionEl = document.querySelector("#questions")
var answerEl = document.querySelector("#answer");
var choiceA = document.querySelector("#ans1");
var choiceB = document.querySelector("#ans2");
var choiceC = document.querySelector("#ans3");
var choiceD = document.querySelector("#ans4");
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
    },

    { question: "Bonus: Is Nickelback the worst band of all time?",
      choices : ["A. Yes", "B. Definitely Yes", "C. Most definitely Yes", "D. All of the Abocve"],
      answer : "D. All of the Above"         
    }
];

//* Start Quiz Function when the start quiz button is clicked *//
function startQuiz() {
    indexArray = 0;
    correctAns = 0;
    

    timerStart();

    clearPage();

    showQuestion();

    quizQuestion();

}

//* Quiz Timer *//

function timerStart() {
	var timer = setInterval(() => {
		countdown = countdown - 1;

		if (countdown < 0) countdown = 0;

		timerEl.textContent = countdown;

		if (countdown <= 0 || indexArray === questArray.length) {
			clearInterval(timer);
		}
	}, 1000);
    return;
}

function clearPage(){
    //* Hides the Start Page *//
    welcomeEl.style.display = "none";
}

function showQuestion(){
    showEl.style.display = "block"
}


function quizQuestion() {

    questionEl.textContent = questArray[indexArray].question;
    choiceA.textContent = questArray[indexArray].choices[0];
    choiceB.textContent = questArray[indexArray].choices[1];
    choiceC.textContent = questArray[indexArray].choices[2];
    choiceD.textContent = questArray[indexArray].choices[3];

}

function checkAnswer(answer) {
    if (questArray[indexArray].answer === questArray[indexArray].choices[answer]){
        correctAns = (correctAns + 10);

    answerEl.textContent = "Correct Answer";
} else {
    correctAns = (correctAns - 10);
    answerEl.textContent = "Wrong Answer";
}
indexArray++;
if (indexArray < questArray.length) {
    quizQuestion();
} else {
    highScore();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }


function highScore() {
    showscoreEl.style.display = "block";
    showEl.style.display = "none";

    scoreEl.textContent = correctAns;
}

function storeScore(event) {
   

    if(nameInput.value === ""){
        alert("Please Enter Your Name");
        return;
    }
    var savedScore = localStorage.getItem("high scores");
    var scoresArray;

    if (savedScore === null) {
        scoresArray= [];
    } else {
        scoresArray = JSON.parse(savedScore)
    }
    var userList = {
        name: nameInput.value,
        score: correctAns.textContent
    };
    console.log(userList);
    scoresArray.push(userList);

    var scoreArraystring = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoreArraystring);

}




startEl.addEventListener("click", startQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitBtn.addEventListener("click", function(event){
    storeScore(event);

    window.location.href = './highscore.html'

})