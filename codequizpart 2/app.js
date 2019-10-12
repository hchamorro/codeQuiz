var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var finalScore = document.getElementById("finalScore");
var yourScore = document.getElementById("yourScore");
var addBtn = document.getElementById("add-btn");
var nameImput = document.getElementById("name");

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

function showScore() {
  // hide  qiuz
  quiz.style.display = "none";
  finalScore.style.display = "block";
  // show score
  yourScore.textContent = score;
}

function storeScore(event) {
  event.preventDefault();
  var user = {
    name: nameImput.value,
    savedScore: score
  };

  localStorage.setItem("storage", JSON.stringify(user));
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
    showScore();
    console.log(score);
  }
}

// see score page and subit

start.addEventListener("click", startQuiz);
addBtn.addEventListener("click", storeScore);
