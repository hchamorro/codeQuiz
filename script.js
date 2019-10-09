// Global var here
var currentChoiceIndex = 0;
var time;

var box = document.getElementById("box");
// Funtions here

function startQuiz() {
  for (var i = 0; i < questions.length; i++) {
    var pTag = document.createElement("p");
    pTag.textContent = questions[i].title;

    box.append(pTag);
    console.log(questions[i].title);
  }

  // for ( var i = 0; i < choices.length; i ++){
  //  var ptag = document.createElement("p");

  // }
  // var currentQuestion = questions[currentChoiceIndex];
  // console.log(currentQuestion);

  currentQuestion.choices.forEach(choice => {
    var button = document.createElement("button");
    button.setAttribute("class", "choice");
  });
}

startQuiz();
