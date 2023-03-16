const body = document.querySelector('body');
const checkBTN = document.querySelector('.check');
const inputValue = document.querySelector('.guess');
const russMsg = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
let generatedNum = Math.trunc(Math.random() * 20) + 1;
const againBtn = document.querySelector('.again');
const startOverBtn = document.querySelector('.over');

againBtn.addEventListener('click', () => {
  generatedNum = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  inputValue.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  checkBTN.disabled = false;
  russMsg.textContent = 'Start guessing...';
  console.log(generatedNum);
});

startOverBtn.addEventListener('click', () => {
  window.location.reload();
});

checkBTN.addEventListener('click', () => {
  const value = Number(inputValue.value);
  // basic validation
  if (value < 0 || value === 0 || value > 20) {
    russMsg.textContent = `value must be between 1 and 20 `;
  }
  // When guess is correct
  else if (value === generatedNum) {
    russMsg.textContent = `correct guess 🎉!`;
    score.textContent = Number(score.textContent) + 5;
    number.textContent = generatedNum;
    body.style.backgroundColor = '#19A7CE';
    number.style.width = '30rem';
  }
  // When guess is too high
  else if (value > generatedNum) {
    russMsg.textContent = `too high 📈!`;
    score.textContent = Number(score.textContent) - 1;
  }
  // When guess is too low
  else if (value < generatedNum) {
    russMsg.textContent = `too low 📉!`;
    score.textContent = Number(score.textContent) - 1;
  }
  // When guess is wrong
  else {
    russMsg.textContent = `wrong guess 🥲!`;
  }
  // When score is 0
  if (score.textContent === '0') {
    russMsg.textContent = `you lost the game 😢!`;
    body.style.backgroundColor = '#E21818';
    checkBTN.disabled = true;
  }
});
