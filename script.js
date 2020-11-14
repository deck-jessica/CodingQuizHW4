var questions = [{
    title: "Which element of HTML do we put the Javascript inside of?",
    answers: [{text: '<scripting>', correct: false}, 
                {text: '<script>', correct: true},
                {text: '<javascript>', correct: false},
                {text: '<js>', correct: false}] },
    { title: "Where is the correct place to insert Javascript in HTML?",
        choices: ["the <head> section", "the <body> section", "Both the head and body sections are correct"],
        correctAnswer: 0 },
   {  title: "How do you write 'Hello World' in an alert box?",
        choices: ["alertBox('Hello World');", "msgBox('Hello World');","msg('Hello World');","alert('Hello World');"],
         correctAnswer: 3 },

]
var startButton = document.getElementById('start-btn');
var questionCont = document.getElementById('question-box');

var questionEl = document.getElementById('questiontxt');
var answerButtonsEl = document.getElementById('answerbtn');

var shuffleQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide');
    questionCont.classList.remove('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex])
}
function showQuestion(questions) {
    questionEl.innerText = questions.title;
    title.answers.forEach(answer => {
        var button = document.createElement('button');
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsEl.appendChild(button)
    })
}
function selectAnswer() {

}








var highScore = document.querySelector('#highscore');
var gameTimer = document.querySelector('#gameTimer');
var timer = document.querySelector('#timers');
