// elements
const word = document.getElementById('word'); //h3
const text = document.getElementById('input_area'); // input
const endGameEl = document.getElementById('end_game');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');

const words = [
  "wishes",
  "some",
  "lesson",
  "guide",
  "typed",
  "seeks",
  "char",
  "ride",
  "npm cache",
  "path",
  "marry",
  "shame",
  "lived",
  "corrupted",
  "do",
  "vue",
  "if",
  "role",
  "hacking world",
  "tying",
  "brand",
  "shall",
  "calling",
  "back",
  "felt",
  "down",
  "end",
  "rapid",
  "empty",
  "dry",
  "refer",
  "posted",
  "advise",
  "I",
  "hat",
  "all",
  "magnitude",
  "number",
  "oil",
  "sets",
  "within",
  "now",
  "right",
  "feet",
  "leave",
  "what",
  "now",
  "facebook",
  "came",
  "live",
  "test",
  "about",
  "netflix",
  "came",
  "set",
  "were",
  "follow",
  "study",
  "day",
  "structure",
  "over",
  "why",
  "why",
  "talk",
  "soon",
  "because",
  "random",
  "watch",
  "year",
  "her",
  "any",
  "snapchat",
  "I",
  "both",
  "around",
  "book",
  "line",
  "mother",
  "open",
  "now",
  "defend",
  "mile",
  "go",
  "by",
  "found",
  "said",
  "eye",
  "come",
  "so",
  "place",
  "food",
  "got",
  "used",
  "city",
  "always",
  "these",
  "any",
  "use",
  "been",
  "awful",
  "was",
  "read",
  "their",
  "without",
  "as",
  "gotten",
  "owed",
  "typed",
  "change",
  "leave",
  "can",
  "js",
  "they",
  "those",
  "eat",
  "never",
  "no",
  "eat",
  "arm",
  "front-end",
  "thin",
  "story",
  "study",
  "flew",
  "brown",
  "try",
  "hang",
  "deduce",
  "using",
  "react",
  "dark",
  "light",
  "thus",
  "nor",
  "simpler",
  "age",
  "time",
  "omit",
  "two",
  "hid",
  "hide",
  "color",
  "background",
  "which",
  "replace",
  'ask',
  "no",
  "css",
  "bury",
  "fry",
  "none",
  "tin",
  "one",
  "roll",
  "saint",
  "about",
  "gives",
  "weight",
  "south",
  "supposedly",
  "owes",
  "arm",
  "draws",
  "head",
  "tanks",
  "gas",
  "hill",
  "weeks",
  "ditto",
  "bootstrap",
  "engineer",
  "an",
  "young",
  "bury",
  "javascript",
  "html",
  "up",
  "toast",
  "bugs",
  "bad",
  "ideas",
  "habits",
  "doors" ,
  "jobs",
  "employee",
  "locks",
  "range",
  "list",
  "not",
  "worst",
  "amuse",
  "topic"
]

let randomWord;

let score = 0;

let time = 60;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function addToDom() {
    randomWord = getRandomWord()
    word.innerHTML = randomWord;
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

function updateTime() {
    time--;
    timeEl.innerHTML = time + "s";

    if(time === 0) {
        clearInterval(timeInterval)
        gameOver();
    }
}
const timeInterval = setInterval(updateTime, 1000);

function gameOver() {
    endGameEl.innerHTML = `
        <h1>Your time is up!</h1>
        <h3>Your score: ${score}</h3>
        <button onclick="location.reload()">Update</button>
    `
    endGameEl.style.display = "flex";
}

addToDom();

text.addEventListener("input", (e) => {
    const typedText = e.target.value;

    if(typedText === randomWord){
        updateScore(); // ++1
        addToDom();
        e.target.value = "";
        updateTime();
    }
})