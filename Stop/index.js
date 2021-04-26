const alphabet = 'abcdefghijklmnopqrstuvwxyz';

let actualRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
let pRandomLetra = document.getElementById('randomLetra');
let pTiempoRestante = document.getElementById('tiempoRestante');
let pResultado = document.getElementById('result');
let time = 0.5 * 60;
const urlApiDiccionario = 'http://localhost:4000/api/';
const buttonCheck = document.getElementById('checkWords');
let userWords = {};

pRandomLetra.innerHTML = 'Letra: ' + actualRandomLetter.toUpperCase();

const intervalTime = setInterval(() => {
  time--;
  pTiempoRestante.innerHTML = time + 's';
  if (!time) {
    validateWords();
  }
}, 1000);

function typingValue(element) {
  userWords[element.id] = element.innerHTML;
}

async function validateWords() {
  let evaluateWords = {};
  clearInterval(intervalTime);
  for (const iterator in userWords) {
    userWords[iterator][0] === actualRandomLetter &&
    (await validateDictionaryWord(userWords[iterator]))
      ? (evaluateWords[iterator] = 100)
      : (evaluateWords[iterator] = 0);
  }
  evaluateWords.total = Object.values(evaluateWords).reduce(
    (acum, actual) => acum + actual
  );
  pResultado.innerHTML = 'puntaje obtenido: ' + evaluateWords.total;
  buttonCheck.disabled = true;
}

validateDictionaryWord();
async function validateDictionaryWord(text) {
  const response = await fetch(urlApiDiccionario + 'gato');
  console.dir(response.json());
}
