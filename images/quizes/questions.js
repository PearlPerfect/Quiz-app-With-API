
const options = document.getElementsByClassName("options")[0];
console.log(options)
const ops = [...options.children];
let count = 0;
let score = 0;
let x;

fetch("https://the-trivia-api.com/v2/questions", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    OnMount(data);
    x = data;
  })
  .catch((e) => console.log(e));


const div = document.getElementById("questions");
const nextBtn = document.getElementById("nextBtn");
const category = document.getElementById("categories")

 nextBtn.addEventListener("click", function() {
  count++;
  calculateScore(x);
  OnMount(x);
});

let index = 1
function OnMount(data) {
    let randomIndex = Math.floor(Math.random() * 4);
    let answers = data[count].incorrectAnswers
    answers.splice(randomIndex,0,data[count].correctAnswer)
    category.textContent = data[count].category
    div.textContent =  `${index++}.  ${data[count].question.text}`;
    ops[0].textContent = answers[0];
    ops[1].textContent = answers[1];
    ops[2].textContent = answers[2];
    ops[3].textContent = answers[3];
  }
  
  ops.forEach((item) => {
    item.addEventListener("click", function (event) {
      let selectedOption = event.target.textContent;
      calculateScore(selectedOption);
    });
  });
  
  const body = document.body;

  let scoreDisplay = document.getElementById("score");
  let p = document.getElementById("scorePop");
  let retakeTest = document.getElementById("restart");

  
  function calculateScore(selectedOption, data) {
    if (count > 9) {
     scoreDisplay.classList.add("open_popUp");
     p.textContent = `Congratulations,\n you scored ${score} / 10`;
    retakeTest.style.visibility = "visible"
    
    }
    if (selectedOption == x[count].correctAnswer) {
      score += 1;
    }
  }

  function closePopUp(){
    window.location.reload();
}
function retakeQuiz(){
  window.location.reload();
}