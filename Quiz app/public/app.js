const quizData = [
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    a: "<javascript>",
    b: "<scripted>",
    c: "<script>",
    d: "<js>",
    correct: "c"
  },
  {
    question:
      'Which of the following is the correct syntax to display "Hello World" in an alert box using JavaScript?',
    a: 'alertbox("Hello World!");',
    b: 'msg("Hello World!");',
    c: 'msgbox("Hello World!");',
    d: 'alert("Hello World!");',
    correct: "d"
  },

  {
    question:
      'What is the correct syntax for referring to external script called "script.js"?',
    a: '<script src="script.js">',
    b: '<script href="script.js">',
    c: '<script ref="script.js">',
    d: '<script name="script.js">',
    correct: "a"
  },
  {
    question:
      'Predict the output of the following JavaScript code.\n \n a = 8 + "8"; \n document.write(a); \n',
    a: "16",
    b: "Complication Error",
    c: "88",
    d: "Run Time Error",
    correct: "c"
  },
  {
    question: "Which of the following is not reserved word in JavaScript?",
    a: "interface",
    b: "throws",
    c: "program",
    d: "short",
    correct: "c"
  }
];

var questionEl = document.getElementById("question");
var answersEls = document.querySelectorAll(".answer");
var quiz = document.getElementById("quiz");

var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var submitBtn = document.getElementById("submit");

var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  var currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  var answer = undefined;

  answersEls.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answersEl) => {
    if (answersEl.checked) {
      answersEl.checked = false;
    }
  });
}

submitBtn.addEventListener("click", () => {
  // Check to see the answer
  var answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else if (score === quizData.length) {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. You really know your JavaScript! Great Job!</h2> <button onclick="location.reload()">Reload</button>`;
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. Keep Studying! </h2> <button onclick="location.reload()">Reload</button>`;
    }
  }
});