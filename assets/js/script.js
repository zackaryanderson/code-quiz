var pageContentEl = document.querySelector("#wrapper");
//load high scores

//add question arrays and answer arrays *use methods to initalize questions
var questions = [
    {
        head: "This is a question?",
        options: ['a','b','c','d'],
        answer: 'a'
    },
    {
        head: "This is a question?",
        options: ['a','b','c','d'],
        answer: 'b'
    },
    {
        head: "This is a question?",
        options: ['a','b','c','d'],
        answer: 'c'
    },
    {
        head: "This is a question?",
        options: ['a','b','c','d'],
        answer: 'd'
    },
    {
        head: "This is a question?",
        options: ['a','b','c','d'],
        answer: 'a'
    },
];

//add timer *can i use js for specific placements?
var time = 15 * questions.length; //15 seconds per question
var startTimer = document.querySelector("#start-btn");
var timer = document.querySelector("#timer");

function countDown(time) {
    var timeLeft = time;
    var timeInterval = setInterval(function() {
        if (timeLeft <= 0){
            clearInterval(timeInterval);
        } else {
            timer.textContent = timeLeft;
            timeLeft--;
            console.log(timeLeft);
        }
    }, 1000);
}

var taskButtonHandler = function (event) {
    var targetEl = event.target;
    console.log(targetEl);

    if (targetEl.matches("#start-btn")) {
        countDown(time);
    } else{
        return;
    }
}

//add pop ups at bottom of the screen for correct/wrong answers

//save highscores

//event listeners
pageContentEl.addEventListener("click",taskButtonHandler);