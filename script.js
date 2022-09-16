const secundsTime = document.querySelector('#seconds');
const minutesTime = document.querySelector('#minutes');
const hoursTime = document.querySelector('#hours');
const daysTime = document.querySelector('#days');
const nextLoading = document.querySelector('#loading');
const countContainer = document.querySelector('#countdown');


const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`August 03 ${nextYear}`)

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCount = ({ days, hours, minutes, secunds }) => {
  secundsTime.textContent = getTimeUnit(secunds);
  minutesTime.textContent = getTimeUnit(minutes);
  hoursTime.textContent = getTimeUnit(hours);
  daysTime.textContent = getTimeUnit(days);
}

const updateCountDown = () => {
  const currentTime = new Date()
  const difference = newYearTime - currentTime;
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  const minutes = Math.floor(difference / 1000 / 60) % 60
  const secunds = Math.floor(difference / 1000) % 60

  insertCount ({ days, hours, minutes, secunds })
}

const handleCountDownDisplay = () => {
  nextLoading.remove()
  countContainer.style.display = 'flex';
}

setInterval(handleCountDownDisplay, 1000);

setInterval(updateCountDown, 1000);


updateCountDown()