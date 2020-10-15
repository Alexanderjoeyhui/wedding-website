
var deadline = new Date("Mar 28, 2021 11:00:00").getTime();

var x = setInterval(function() {
var now = new Date().getTime();
var timeLeft = deadline - now;
var days = Math.floor(timeLeft/(1000 * 60 * 60 * 24));
var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";
document.getElementById("right-frame").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";
if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "It's Today!";
    document.getElementById("right-frame").innerHTML = "It's Today!";
    }
}, 1000);