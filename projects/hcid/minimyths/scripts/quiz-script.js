// EVENT LISTENERS //
document.querySelector(".quiz-main-button").addEventListener("click", setQuiz);


// global variables so can be used for loadQuestions, setQuiz, checkAnswers
// array of multiple choice questions and answers for radio box styled questions
var quizMCOptions;
// array of free response questions and answers for text box question
var quizTextOptions;
// get questions and answers from json file and set global variables with data
// in the json file:
// question = question being asked
// answers = multiple choice options, correct = which option from the array of answers is the correct one
// answer = correct free response answer
// json validated with https://jsonlint.com/
fetch('https://inm316.raveenajain.repl.co/quiz.json') // public file from coursework submission
  .then((response) => response.json())
  .then((data) => {
    quizMCOptions = data[0];
    quizTextOptions = data[1];
    // load in data for user
    loadQuestions();
  })
  .catch((error) => {
    console.error('Quiz Error:', error);
  });

// keeps track of which random questions were selected in order to avoid repeat questions showing on screen
var randoms = [];

// randomly select 5 questions and corresponding answers from the variable arrays above to be added to the quiz page
function loadQuestions() {
  // subtract 1 because last question is not multiple choice
  // using query selector and length in case more questions are added
  var numberOfQ = document.querySelector('form').querySelectorAll('li').length - 1;
  // pick random multiple choice questions
  for (var i = 0; i < numberOfQ; i++) {
    // given a max number (i.e. the number of multiple choice questions listed in the json), produce a random number
    var rand = Math.floor(Math.random() * quizMCOptions.length);
    // check for repeat numbers to avoid repeating questions
    // if the number has already been used, don't count this loop (i.e. subtract 1)
    // else add the random question and its correspinding options to the html
    if (randoms.length >= 1 && randoms.includes(rand)) {
      i = i - 1;
    } else {
      randoms.push(rand);
      // selected random multiple choice question
      document.querySelector('.quiz-main-q' + i + '-question').textContent = quizMCOptions[rand].question;
      // answers for selected random question
      document.querySelector('.quiz-main-inner-q' + i + '-option0').textContent = quizMCOptions[rand].answers[0];
      document.querySelector('.quiz-main-inner-q' + i + '-option1').textContent = quizMCOptions[rand].answers[1];
      document.querySelector('.quiz-main-inner-q' + i + '-option2').textContent = quizMCOptions[rand].answers[2];
    }
    // reset any selected radio boxes (for refresh or if the user wants to play again)
    document.querySelector('.quiz-main-q' + i + '-option0').checked = false;
    document.querySelector('.quiz-main-q' + i + '-option1').checked = false;
    document.querySelector('.quiz-main-q' + i + '-option2').checked = false;
  }
  // pick a random text based question
  // given a max number (i.e. the number of free response questions listed in the json), produce a random number
  var textRand = Math.floor(Math.random() * quizTextOptions.length);
  randoms.push(textRand);
  // selected random free response question
  document.querySelector('.quiz-main-q4-question').textContent = quizTextOptions[textRand].question;
  // reset user input (for refresh or if the user wants to play again)
  document.querySelector('.quiz-main-q4-input').value = "";
}

// if the user is submitting their answers, it checks the number of correct answers, displays their score, and changes submit to a play again button
// if the user wants to play again, it clears everything and displays a new set of random questions (by calling loadQuestions()), and changes play again to a submit button
function setQuiz() {
  var curButton = document.querySelector('.quiz-main-button').textContent; // submit or play again button
  var scoreID = document.querySelector('.quiz-main-score');
  // if the user is pressing the sumbit button to get their score:
  if (curButton.includes('Submit')) {
    // change the button text
    curButton = document.querySelector('.quiz-main-button').textContent = 'Play Again';
    // check their answers and display their score
    // score as a percentage = (correct answers / number of questions) * 100
    var score = Math.round((checkAnswers() / randoms.length) * 100); // length of randoms = number of questions
    if (score >= 80) {
      scoreID.textContent = 'Congrats! You scored ' + score + '% :)';
    } else if (score >= 50 && score < 80) {
      scoreID.textContent = 'You scored ' + score + '% - not too bad!'
    } else if (score < 50 && score > 0) {
      scoreID.textContent = 'You scored ' + score + '%.'
    } else {
      scoreID.textContent = 'You have scored a 0% :(';
    }
    // changing visibility instead of display or adding an element so the spacing stays consistent
    scoreID.style.visibility = 'visible';
  // else the user is pressing the button to play again:
  } else {
    // change the button text
    curButton = document.querySelector('.quiz-main-button').textContent = 'Submit';
    // hide the section that displays scores
    scoreID.style.visibility = 'hidden';
    // reset and load in new questions
    randoms = [];
    loadQuestions();
  }
}

// checks the users answers and returns the number of questions they got right
function checkAnswers() {
  var correct = 0;
  for (var i = 0; i < randoms.length; i++) {
    var q = randoms[i];
    // the last number in randoms will always be the free response question
    if (i === randoms.length - 1) {
      // checks if the user input matches the correct answer
      // the free response answers in the json file are all in lower case
      if (document.querySelector('.quiz-main-q4-input').value.trim().toLowerCase()  == quizTextOptions[q].answer) {
        correct++;
      }
    } else {
      // gets the correct answer option (as a number) for the qth multiple choice question
      var a = quizMCOptions[q].correct;
      // checks if the correct option is the one the user selected
      var allAnswers = document.querySelectorAll('li')[i];
      var answer = allAnswers.querySelectorAll('input')[a - 1].checked;
      if (answer) {
        correct++;
      }
    }
  }
  return correct;
}
