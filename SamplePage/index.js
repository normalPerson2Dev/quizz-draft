// DOM Elements
const submitBtn = document.getElementById('submit-btn')
const questions = document.querySelector('.question')

//Questions Box
let questionArr = ["What?", "Why?", "Where?", "How?", "When?", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "ipsum dolor sit amet consectetur adipisicing elitipsum dolor sit amet consectetur adipisicing elit"]

// Click Event
submitBtn.addEventListener('click', function(){
  let randomNumber = getRandomNumber();
  questions.textContent = questionArr[randomNumber]

})


function getRandomNumber () {
  return Math.floor(Math.random()*questionArr.length);
}
