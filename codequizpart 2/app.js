var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDiv = document.getElementById("scoreContainer");

var finalQuestion = questions.length - 1;
var currentQuestion = 0;
var score = 0;

// show a question

function showQuestion() {
  var q = questions[currentQuestion]; //making the index set at 0 will need loop
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.textContent = q.choiceD;
}

function startQuiz() {
  // hide start button
  start.style.display = "none";
  // show questions
  showQuestion();
  //change display from none to visible
  quiz.style.display = "block";
  // start timeer
}

// make score and check anser

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correct) {
    score++;
  } else {
  }
  if (currentQuestion < finalQuestion) {
    currentQuestion++;
    showQuestion();
  } else {
    alert("finished!");
    console.log(score);
  }
}

start.addEventListener("click", startQuiz);
