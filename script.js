var score = 0;
var timer = 10;
var btn = document.getElementById("btn");

function count() {
	score++;
	document.getElementById("score").innerHTML = "Score: " + score;
}

function countdown() {
	timer--;
	if (timer == 0) {
		alert("Time's up! Your final score is " + score);
		btn.disabled = true;
	}
	else {
		document.getElementById("score").innerHTML = "Score: " + score + " | Time left: " + timer + " seconds";
		setTimeout(countdown, 1000);
	}
}

countdown();
