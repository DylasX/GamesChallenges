let availableWords = ['chaverra'];

let currentWord =
  availableWords[Math.floor(Math.random() * availableWords.length)];

let correctUserChar = [];

let correctChars = currentWord.split('');

let divSpaces = document.getElementById('blankSpaces');
let div = document.getElementById('result');
let divWin = document.getElementById('winDiv');
let win = false;

correctChars.forEach(() => {
  div.append('-');
});

function typingChar() {
  let value = document.getElementById('guessing').value;
  document.getElementById('guessing').value = '';
  correctChars.forEach((element, index) => {
    if (element === value) {
      correctUserChar[index] = value;
    }
  });

  div.innerHTML = '';
  for (let index = 0; index < correctChars.length; index++) {
    correctUserChar[index]
      ? div.append(correctUserChar[index])
      : div.append('-');
  }
  if (correctChars.every((el, index) => el === correctUserChar[index])) {
    win = true;
  }
  if (win) {
    divWin.append('GANASTE');
  }
}
