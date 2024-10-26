// public/script.js
let countdown;
let initialTime; // Store initial time for reset

function startTimer(minutes, seconds) {
  // Clear any ongoing timer before starting a new one
  clearInterval(countdown);

  // Set initial time for reset and calculate timeLeft in seconds
  initialTime = { minutes, seconds };
  let timeLeft = minutes * 60 + seconds;
  
  // Immediately reduce time by 1 second to start countdown
  timeLeft--;
  updateDisplay(timeLeft);

  countdown = setInterval(() => {
    timeLeft--;
    updateDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.querySelector(".timer").textContent = "Time's Up!";
    }
  }, 1000);
}

function updateDisplay(timeLeft) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.querySelector(".timer").textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function resetTimer() {
  // Clear the countdown interval
  clearInterval(countdown);

  // Reset to the initial time
  const { minutes, seconds } = initialTime;
  updateDisplay(minutes * 60 + seconds);
}

let currentMinutes = 25;
let currentSeconds = 0;

function selectorClick(minutes, seconds){
    resetTimer()
    document.querySelector(".timer").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;  
    currentMinutes = minutes
    currentSeconds = seconds
}

document.querySelector(".start").addEventListener("click",function(){
    let minutes = document.querySelector(".timer")
    startTimer(currentMinutes, currentSeconds)
})

const imageSelector = document.getElementById('imageSelector');

imageSelector.addEventListener('change', function() {
    const selectedImage = imageSelector.value;
    if (selectedImage) {
        document.body.style.backgroundImage = `url(${selectedImage})`;
    } else {
        document.body.style.backgroundImage = 'url("images/city-view.jpg")'; // Reset background
    }
});
