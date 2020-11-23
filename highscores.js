var highScore = localStorage.getItem("highscore");
if (highScore === null) {
    highScore = 0;
}
var name = localStorage.getItem("highname");
if (name === null) {
    name = "N/A";
}
var score = localStorage.getItem("score");
if (score === null) {
    score = 0;
}
var name = localStorage.getItem("name")