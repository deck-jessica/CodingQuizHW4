var questions = [{
    title: "Which element of HTML do we put the Javascript inside of?",
    choices: ["<scripting>", "<script>","<javascript>","<js>"],
    answer: "<script>" }, 
    { title: "Where is the correct place to insert Javascript in HTML?",
                choices: ["the <head> section", 
                            "the <body> section", "both are true"],
                answer: "the <head> section"},            
    { title: "How do you write 'Hello World' in an alert box?",
        choices: ["alertBox('Hello World');",  
                  "msgBox('Hello World');",
                     "msg('Hello World');", 
                  "alert('Hello World');"], 
                  answer: "alert('Hello World');" },
    { title: "How do you write a function in Javascript?",
        choices: ["function = myFunction()", "function:myFunction()", "define myFunction() function","function myFunction()"],
        answer: "function myFunction()"}
]


var startButton = document.getElementById('start-btn');
var submitButton = document.querySelector("button.submitBtn");
var secondsLeft = (questions.length * 20 + 1);
var timerEl = document.getElementById("timer");
var submitScore = document.querySelector("#submit-score");
var userScore = document.getElementById('user-score');
var userName;
var questionTitle = document.getElementById('questiontxt');
var answerChoice = document.getElementById('answers');

var questionNumb = -1;
var answer;

function startTime () {
    document.getElementById('start-btn').classList.add('hide');
    document.getElementById('question-box').classList.remove('hide');

    setTimer();

    getQuestions();
}
var countdown;

function setTimer() {

    countdown = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(countdown);
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

function getQuestions() {
    
        questionNumb++;
    
    answer = questions[questionNumb].answer;

    questionTitle.textContent = questions[questionNumb].title;
    answerChoice.innerHTML = "";

    var choices = questions[questionNumb].choices;
    for (var i=0; i < choices.length; i++ ) {
        var nextAnswer = document.createElement("button");

        nextAnswer.textContent = choices[i];
        answerBtn = answerChoice.appendChild(nextAnswer)
    } 
    if (questionNumb >= questions.length) {
        return;
    }
}

function displayScore() {
    document.getElementById("question-box").classList.add("hide");
    document.getElementById("submit-score").classList.remove('hide');
    userScore.textContent = "Final Score: " + userScore.value;
}

startButton.addEventListener('click', startTime);

submitButton.addEventListener('click', function (event) {
    event.stopPropagation();
    addScore();
}); //dont forget to store scores somehow for high scores

var userScore = 0;

function addScore () {
    userName = document.getElementById('userName').value;

    var newScore = {
        name: userName, 
        score: userScore
    };
    localStorage.setItem("newScore", JSON.stringify(newScore));

}
var pEl = document.getElementById("feedback");

function hideFeed () {
    pEl.classList.add('hide');
}

function showFeed () {
    pEl.classList.remove('hide');
}

answerChoice.addEventListener('click', function (event) {
    if (answer === event.target.textContent) {
        pEl.innerHTML = "RIGHT";
        userScore++;
        setTimeout(hideFeed, 1200);
        showFeed();
    } else {
        pEl.innerHTML = "WRONG";
        setTimeout(hideFeed, 1200);
        secondsLeft = secondsLeft - 10;
        showFeed();
    }
    getQuestions();
});





