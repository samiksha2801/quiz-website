const quizData = [
    {
      question: "What type of lens is used in magnifying glasses?",
      answers: ["Concave", "Plano-concave", "Convex", "None of these"],
      correctAnswer: 2,
    },
    {
        question: "If the spinning of the earth is increased then the weight of the body at equator will be",
        answers: ["Increases","Decreases","Remains same","doubles"],
        correctAnswer: 1,
    },
    {
        question: "A particle moving with a uniform velocity must be along a straight line?",
        answers: ["True", "False"],
        correctAnswer: 0,
    },
    {
      question: "A cylindrical body is of mass 50kg with radius of cross section 10cm. How much pressure is applied by the body on ground. Take g = 9.8 m/s^2",
      answers: ["15592","15597","15590","15595"],
      correctAnswer: 1,
    },
    {
      question: "What is the speed of an electromagnetic wave.",
      answers: ["Undefined","4000 m/s","30 * 10^8 m/s","3 * 10^8 m/s"],
      correctAnswer: 3,
  }
  ];
  
let currentQuestion = 0;
let score = 0;
let timer;
  
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");
  
function displayQuestion()
{
    startTimer();
    nextBtn.disabled = true;
    const questionblock = quizData[currentQuestion];
    questionEl.textContent = questionblock.question;
  
    answersEl.innerHTML = "";
    questionblock.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", () => checkAnswer(index));
      answersEl.appendChild(button);
    });
    if (currentQuestion===quizData.length-1) {
        nextBtn.textContent = "Submit Quiz"
        
    }
    
}
  
function checkAnswer(selectedIdx) {
    const question = quizData[currentQuestion];
    const correctAnswer = question.correctAnswer;
  
    let feedbackClass;
    if (selectedIdx === correctAnswer) {
      feedbackClass = "correct";
      score++;
    } else {
      feedbackClass = "wrong";
    }
    answersEl.childNodes.forEach((button, index) => {
        if (selectedIdx === index) {
          button.style.backgroundColor = feedbackClass === "correct" ? "lightgreen" : "red";
        }
        button.disabled = true;
    });  
   
    nextBtn.disabled = false;
    nextBtn.style.display = "block";
}
  
function nextQuestion() {
    currentQuestion++;
  
    // Check if all questions answered
    if (currentQuestion === quizData.length) {
      showResults();

    } else {
      displayQuestion();
    }

  }
  
  nextBtn.addEventListener("click", nextQuestion); // Attach click event to button

  function showResults() {
    questionEl.textContent = `Your score is: ${score}/${currentQuestion}`
    answersEl.innerHTML=""
    nextBtn.style.display = "none";
    timerEl.innerHTML=""
  }

  function startTimer() {
    let timeLeft = 10; // Adjust for desired timer duration (seconds)
    timerEl.textContent = `Time Left: ${timeLeft}`;
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `Time Left: ${timeLeft}`;
      if (timeLeft < 0) {
        timerEl.textContent =`Time Out`;
        clearInterval(timer);
        answersEl.childNodes.forEach((button) => {
            button.disabled=true;
        })
        nextBtn.disabled = false
      }
    }, 1000);

    answersEl.addEventListener("click",()=>{
        clearInterval(timer)
    })

    if (currentQuestion===quizData.length) {
        timerEl.textContent=""
    }


  }
  
  // Initial question display
  displayQuestion();