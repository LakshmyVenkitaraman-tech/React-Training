let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;
let userAnswers = [];
const questionEl = document.getElementById('question');
const timerEl = document.getElementById('timer');
const optionsForm = document.getElementById('options-form');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const resultPopup = document.getElementById("result-popup");
const summaryText = document.getElementById("summary-text");
const reviewContainer = document.getElementById("review-container");
fetch('question.json')
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => {
    questions = data;
    startQuiz();
  })
  .catch(error => {
    console.error("Error fetching questions:", error);
    questionEl.textContent = "Error loading questions.";
  });

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  scoreEl.textContent = score;
  nextBtn.disabled = false;
  nextBtn.style.display = "inline-block";
  resultPopup.classList.add("hidden");
  renderOptions();
  showQuestion();
}
function renderOptions() {
  optionsForm.innerHTML = "";
  const current = questions[currentQuestionIndex];
  for (let i = 0; i < current.options.length; i++) {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="option" value="${i + 1}"> 
      <span id="option${i}">Option ${i + 1}</span>
    `;
    optionsForm.appendChild(label);
    optionsForm.appendChild(document.createElement("br"));
  }
}

function showQuestion() {
  clearInterval(timerInterval);
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.q;

  current.options.forEach((option, index) => {
    const span = document.getElementById(`option${index}`);
    const input = document.querySelector(`input[value="${index + 1}"]`);
    if (span && input) {
      span.textContent = option;
      span.style.color = "black";
      input.disabled = false;
      input.checked = false;
    }
  });

  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 10;
  timerEl.textContent = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      checkAnswer();
      setTimeout(nextQuestion, 1000);
    }
  }, 1000);
}

function checkAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  const correctAnswer = questions[currentQuestionIndex].answer;

  document.querySelectorAll('input[name="option"]').forEach((input, index) => {
    const span = document.getElementById(`option${index}`);
    if ((index + 1) === correctAnswer) {
      span.style.color = "green";
    }
    if (input.checked && (index + 1) !== correctAnswer) {
      span.style.color = "red";
    }
    input.disabled = true;
  });
  const selectedValue = selected ? parseInt(selected.value) : null;
  if (selectedValue === correctAnswer) {
    score++;
    scoreEl.textContent = score;
  }

  userAnswers.push({
    question: questions[currentQuestionIndex].q,
    correctAnswer: correctAnswer,
    selectedAnswer: selectedValue
  });
}
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  questionEl.textContent = "Quiz Completed!";
  optionsForm.innerHTML = "";

  summaryText.textContent = `You got ${score} out of ${questions.length} correct.`;
  reviewContainer.innerHTML = "";

  userAnswers.forEach((item, index) => {
    const qEl = document.createElement("div");

    const correctOption = questions[index].options[item.correctAnswer - 1];
    const userOption = item.selectedAnswer != null
      ? questions[index].options[item.selectedAnswer - 1]
      : "No Answer";

    const isCorrect = item.correctAnswer === item.selectedAnswer;

    qEl.innerHTML = `
      <p><strong>Q${index + 1}: ${item.question}</strong></p>
      <p>Your answer: <span class="${isCorrect ? 'correct' : 'incorrect'}">${userOption}</span></p>
      ${!isCorrect ? `<p>Correct answer: <span class="correct">${correctOption}</span></p>` : ""}
      <hr>
    `;
    reviewContainer.appendChild(qEl);
  });

  resultPopup.classList.remove("hidden");
  nextBtn.disabled = true;
  nextBtn.style.display = "none";
}

function closeSummary() {
  resultPopup.classList.add("hidden");
}

nextBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  checkAnswer();
  setTimeout(nextQuestion, 500);
});

restartBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  startQuiz();
});
