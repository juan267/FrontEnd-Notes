const path = require('path')

console.log(__dirname)
console.log(__filename)

console.log(path.basename(__filename))



// usanto funciones de tiempo

var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

function writeWaitingPercent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function() {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/waitTime) * 100);
  writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function() {
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log("\n\n done \n\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);


// process.argv

function grab(flag) {
  var index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
  console.log("You Blew it!");
} else {
  console.log(`Welcome ${user}, ${greeting}`);
}

// Recibiendo inputs y emitiendo output a del usuario

var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];

var answers = [];

function ask(i) {
  process.stdout.write(`\n\n\n\n ${questions[i]}`)
  process.stdout.write("  >  ")
}

process.stdin.on('data', function(data) {

  answers.push(data.toString().trim())

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }

});

process.on('exit', function() {

  process.stdout.write("\n\n\n\n");

  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);

  process.stdout.write("\n\n\n\n");

});

ask(0);
