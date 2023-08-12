const header = document.querySelector(".header");
const container = document.querySelector('.countdown-container')
const daysContainer = document.getElementById("days");
const hoursContainer = document.getElementById("hours");
const minsContainer = document.getElementById("mins");
const secondsContainer = document.getElementById("seconds");

//the deadline
const newBeginning = new Date(`Jan 1, 2024`).getTime();

function countDown() {
  const currentDate = new Date().getTime();

  let difference = newBeginning - currentDate;

  //calculations for days, hours, minutes, seconds
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysContainer.innerHTML = days;
  hoursContainer.innerHTML = hours;
  minsContainer.innerHTML = minutes;
  secondsContainer.innerHTML = seconds;

  //display a message if the countdown is finished
  if (difference <= 0) {
    container.style.display = 'none'
    header.textContent = `We're Here!`;
  }
}

//calling the function every second with the updated date
setInterval(countDown, 1000);
