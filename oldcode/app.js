// global vars
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var quesitons = [
  {
    title: "How many tablespoons are in a 1/4 cup?",
    choices: {
      a: "2",
      b: "4",
      c: "6",
      d: "8"
    },
    answer: "b"
  },
  {
    title: "How many pints in are in a quart?",
    choices: {
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    answer: "b"
  }
];
// helper functions
function startQuiz() {
  var output = [];

  questions.forEach(currentQuestion, questionNumber => {
    var choices = [];

    for (letter in currentQuestion.choices) {
      choices.push(
        `<label>
            <inout type="radio" name ="question${questionNumber}" value="${letter}"> 
            ${letter}:
            ${currentQuestion.choices[letter]}
            </label>
            `
      );
    }

    output.push(
      `<div class ="quesion"> ${currentQuestion.question} </div>
        <div class = "choices"> ${choices.join("")}</div>
        `
    );
  });

  quizContainer.innerHTML = output.join("");
}

function showResults() {}

// events

/* click highscore link */
/* find object in local storage */
/* parse object for screen */
/* display parsed object in html */

/* clear highscores */
/* go back */
/* start quiz */
/*
   /* choose answer */
/* enter initials and submit score, go to highscore event */
submitButton.addEventListener("click", showResults);

/* init */

startQuiz();

/* none */
