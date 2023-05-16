// Get methods
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreDisplay = document.getElementById("score");
const incorrectDisplay = document.getElementById("incorrect");
// Access and flow of questions
let shuffledQuestions, currentQuestionIndex;
// Execute the start of the game
startButton.addEventListener("click", startGame);
// Start the game function
function startGame() {
  startButton.classList.add("hide"); // Hide the start button
  shuffledQuestions = questions.sort(() => Math.random() - 0.5); // Shuffle the questions array
  currentQuestionIndex = 0; // Set the current question index to 0
  questionContainerElement.classList.remove("hide"); // Show the question container
  setNextQuestion();
}
// Prepare and display the next question
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
// Update the question text
function showQuestion(question) {
  questionElement.innerText = question.question; // Display the question text
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text; // Set the answer text on the button
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct; // Mark the button as correct if the answer is correct
    }
    button.addEventListener("click", selectAnswer); // Add event listener for button click
    answerButtonsElement.appendChild(button); // Add the button to the answer buttons container
  });
}
// Reset the quiz
function resetState() {
  clearStatusClass(document.body); // Clear the status class from the body element
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild); // Remove all answer buttons
  }
}
// Handle the users answer selection
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct); // Set the status class on the body element
  if (shuffledQuestions.length > currentQuestionIndex) {
    // If there are more questions, proceed to the next question
  } else {
    endGame(); // Otherwise, end the game
  }
}
// Increment game scores
function setStatusClass(element, correct) {
  if (correct) {
    element.classList.add("correct"); // Add the correct class to the element
    incrementScore(); // Increment the score
  } else {
    element.classList.add("wrong"); // Add the wrong class to the element
    incrementWrongAnswer(); // Increment the incorrect answer count
  }
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    endGame(); // If all questions have been answered, end the game
  } else {
    setNextQuestion(); // Otherwise, proceed to the next question
  }
}
// Clear status
function clearStatusClass(element) {
  element.classList.remove("correct"); // Remove the correct class from the element
  element.classList.remove("wrong"); // Remove the wrong class from the element
}
// Update the correct answer score
function incrementScore() {
  let oldScore = parseInt(scoreDisplay.innerText); // Get the current score
  scoreDisplay.innerText = ++oldScore; // Increment and update the score
}
// Update wrong answer score
function incrementWrongAnswer() {
  let oldScore = parseInt(incorrectDisplay.innerText); // Get the current incorrect answer count
  incorrectDisplay.innerText = ++oldScore; // Increment and update the count
}
// End of game button display
function endGame() {
  startButton.style.visibility = "hidden"; // Hide the start button
  restartButton.style.visibility = 'visible'; // Show the restart button
  startButton.classList.remove("hide"); // Show the start button
  questionElement.innerText = 'Well done you have finished the game!'; // Display the end message
  answerButtonsElement.style.visibility = 'hidden'; // Hide the answer buttons
}
// Questions
const questions = [
  {
    question: "What is the 400m athletics mens world record?",
    answers: [
      {
        text: "41.67s",
        correct: false,
      },
      {
        text: "45.01s",
        correct: false,
      },
      {
        text: "43.03s",
        correct: true,
      },
      {
        text: "49.77s",
        correct: false,
      },
    ],
  },
  {
    question: "What is the biggest ever grossing movie?",
    answers: [
      {
        text: "Lion King",
        correct: false,
      },
      {
        text: "Titanic",
        correct: false,
      },
      {
        text: "Avengers End Game",
        correct: false,
      },
      {
        text: "Avatar",
        correct: true,
      },
    ],
  },
  {
    question: "What is a Juicy Salif?",
    answers: [
      {
        text: "Lemon juicer",
        correct: true,
      },
      {
        text: "Orange",
        correct: false,
      },
      {
        text: "Cocktail",
        correct: false,
      },
      {
        text: "Dessert",
        correct: false,
      },
    ],
  },
  {
    question: "When was the first Harry Potter movie released?",
    answers: [
      {
        text: "2000",
        correct: false,
      },
      {
        text: "2001",
        correct: true,
      },
      {
        text: "2003",
        correct: false,
      },
      {
        text: "2004",
        correct: false,
      },
    ],
  },
  {
    question: "What is an egret?",
    answers: [
      {
        text: "Car",
        correct: false,
      },
      {
        text: "Boat",
        correct: false,
      },
      {
        text: "Plane",
        correct: false,
      },
      {
        text: "Bird",
        correct: true,
      },
    ],
  },
];