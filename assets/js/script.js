var pageContentEl = document.querySelector("#wrapper");
//load high scores
//add question arrays and answer arrays *use methods to initalize questions
var questions = [
    {
        head: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        head: "String values must be enclosed within these when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        head: "Which of these is not an HTML tag",
        options: ['<h1>', '<header>', '<section>', '<hero>'],
        answer: '<hero>'
    },
    {
        head: "What brackets enclose 'if' statement conditionals?",
        options: ['()', '{}', '[]', '||'],
        answer: '()'
    },
    {
        head: "What HTML tag do you use to call a javascript file?",
        options: ['<link>', '<script>', '<a>', '<div>'],
        answer: '<script>'
    },
];

//add timer *can i use js for specific placements?
var time = 15 * questions.length - 1; //15 seconds per question
var countDown = document.querySelector("#start-btn");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var listArea = document.querySelector("#list-area");
var remove = document.querySelector("#remove");
var correctIncorrect = document.querySelector("#correct-incorrect");
var counter = 0;
var numCorrect = 0;

countDown.addEventListener("click", function () {
    //var countDown = function(time) {
    var timeInterval = setInterval(function () {
        if (time <= 0) {
            clearInterval(timeInterval);
            timer.textContent = "Time's up!"
        } else {
            timer.textContent = "Time: " + time;
            time--;
            //console.log(timeLeft);
        }
    }, 1000);
    questionDisplay(counter, questions);
});

var taskButtonHandler = function (event) {
    var targetEl = event.target;
    //console.log(targetEl);

    if (targetEl.matches("#start-btn")) {
        //countDown(time);
        //questionDisplay(questions);
        time = 15 * questions.length;
        countDown.className = "gone";
    } else {
        return;
    }
}

var questionDisplay = function (counter, questions) {
    question.innerHTML = "";
    remove.innerHTML = "";
    listArea.innerHTML = "";

    //for ( var i = 0; i < questions.length; i++){
    question.textContent = questions[counter].head;
    answers = questions[counter].options;

    for (i = 0; i < answers.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = answers[i];
        listItem.className = "cleanup"
        listArea.appendChild(listItem);
    }
    listArea.addEventListener("click", check);
    //}
}

var check = function (event) {
    var targetEl = event.target;
    correctIncorrect.innerHTML = "";
    //console.log(targetEl.innerText);

    if (targetEl.innerText == questions[counter].answer) {
        var congrats = document.createElement("div");
        congrats.textContent = "That's Correct";
        congrats.className = "correctIncorrect";
        correctIncorrect.appendChild(congrats);
        numCorrect++;
    } else {
        var wrong = document.createElement("div");
        wrong.textContent = "That is incorrect";
        wrong.className = "correctIncorrect";
        correctIncorrect.appendChild(wrong);
        time = time - 10;
    }
    counter++;
    if (counter > questions.length - 1) {
        endGame();
    }
    else {
        questionDisplay(counter, questions);
    }
}

var endGame = function () {
    console.log("game over");
    correctIncorrect.innerHTML = "";
    question.innerHTML = "GAME OVER";
    listArea.innerHTML = "";
    countDown.className = "btn";
    var score = Math.max(0, time * numCorrect);

    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }
    var name = localStorage.getItem("initials");
    if (name === null) {
        name = "N/A";
    }

    if (score > highScore) {
        var ans = window.prompt("NEW HIGH SCORE!\nPlease Enter Your Initials");
        highScore.score = score;
        highScore.name = ans;
        localStorage.setItem("highscore", JSON.stringify(highScore));
        //localStorage.setItem("highname", ans);
    }
    else{
        var ans = window.prompt("You did not beat the High Score.\nPlease Enter Your Initials");
        lowScore.score = score;
        lowScore.name = ans;
        localStorage.setItem("lowscore", JSON.stringify(lowScore));
    }

    var scoreLog = document.createElement("div");
    scoreLog.textContent = "Score: " + score;
    question.appendChild(scoreLog);
    counter = 0;
    time = 0;
    countDown.innerHTML = "Play again?"

}

//look for clicks on the screen
pageContentEl.addEventListener("click", taskButtonHandler);