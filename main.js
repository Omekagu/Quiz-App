const quizData = [
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's",
    A: "largest railway station",
    B: "highest railway station",
    C: "longest railway station",
    D: "	None of the above",
    correct_Answer: "A",
  },

  {
    question: "Entomology is the science that studies",
    A: "Behavior of human beings",
    B: "insects",
    C: "The origin and history of tech",
    D: "The formation of rocks",
    correct_Answer: "B",
  },
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's",
    A: "largest railway station",
    B: "highest railway station",
    C: "longest railway station",
    D: "	None of the above",
    correct_Answer: "A",
  },
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's",
    A: "largest railway station",
    B: "highest railway station",
    C: "longest railway station",
    D: "	None of the above",
    correct_Answer: "A",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();
function loadQuiz() {
  let currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.A;
  b_text.innerText = currentQuizData.B;
  c_text.innerText = currentQuizData.C;
  d_text.innerText = currentQuizData.D;
}
