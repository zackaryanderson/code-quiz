var highScore = localStorage.getItem("highscore");
if (highScore === null) {
    highScore = 0;
}
var name = localStorage.getItem("name");
if (name === null) {
    name = "N/A";
}

var highScores = document.querySelector("#highscores");

var scoreLog = document.createElement("li");
scoreLog.textContent = "High Score: " + highScore;
scoreLog.className = "plain";
highScores.appendChild(scoreLog);

var nameLog = document.createElement("li");
nameLog.textContent = "Initials: " + name;
nameLog.className = "plain";
highScores.appendChild(nameLog);

