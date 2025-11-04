
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Hyper Tool Multi Language",
      "Hyperlink and Text Markup Language",
      "None of these"
    ],
    answer: "HyperText Markup Language"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  answersEl.innerHTML = "";}

  currentQuiz.options.forEach(option) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
  }