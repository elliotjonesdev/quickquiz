const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreDisplay = document.getElementById("score");
const incorrectDisplay = document.getElementById("incorrect");
let shuffledQuestions, currentQuestionIndex;
startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  if (shuffledQuestions.length > (currentQuestionIndex)) {

  } else {
    endGame();
  }
}

function setStatusClass(element, correct) {
  if (correct) {
    element.classList.add("correct");
    incrementScore();
  } else {
    element.classList.add("wrong");
    incrementWrongAnswer();
  }
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    endGame()
  } else {
    setNextQuestion();
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function incrementScore() {
  let oldScore = parseInt(scoreDisplay.innerText);
  scoreDisplay.innerText = ++oldScore;
}

function incrementWrongAnswer() {
  let oldScore = parseInt(incorrectDisplay.innerText);
  incorrectDisplay.innerText = ++oldScore;

}

function endGame() {
  startButton.style.visibility = "hidden";
  restartButton.style.visibility = 'visible';
  startButton.classList.remove("hide");
  questionElement.innerText = 'Well done you have finished the game!';
  answerButtonsElement.style.visibility = 'hidden';
}
const questions = [{
    question: "What is the 400m athletics mens world record?",
    answers: [{
        text: "41.67s",
        correct: false
      },
      {
        text: "45.01s",
        correct: false
      },
      {
        text: "43.03s",
        correct: true
      },
      {
        text: "49.77s",
        correct: false
      }
    ]
  },
  {
    question: "What is the biggest ever grossing movie?",
    answers: [{
        text: "Lion King",
        correct: false
      },
      {
        text: "Titanic",
        correct: false
      },
      {
        text: "Avengers End Game",
        correct: false
      },
      {
        text: "Avatar",
        correct: true
      }
    ]
  },
  {
    question: "What is a Juicy Salif?",
    answers: [{
        text: "Lemon juicer",
        correct: true
      },
      {
        text: "Orange",
        correct: false
      },
      {
        text: "Cocktail",
        correct: false
      },
      {
        text: "Dessert",
        correct: false
      }
    ]
  },
  {
    question: "When was the first Harry Potter movie released?",
    answers: [{
        text: "2000",
        correct: false
      },
      {
        text: "2001",
        correct: true
      },
      {
        text: "2003",
        correct: false
      },
      {
        text: "2004",
        correct: false
      }
    ]
  },
  {
    question: "What is an egret?",
    answers: [{
        text: "Car",
        correct: false
      },
      {
        text: "Boat",
        correct: false
      },
      {
        text: "Plane",
        correct: false
      },
      {
        text: "Bird",
        correct: true
      }
    ]
  }
];