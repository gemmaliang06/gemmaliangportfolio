var i = 0;
var txt = "Hello! Welcome to Gemma's Portfolio! Sit back, relax, and enjoy some art in 3... 2... 1... "; /* The text */
var speed = 110; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("loading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    button.style.visibility = "hidden";
  } else if (i = txt.length) {
    
    setTimeout(function() {
      window.location.href = "https://gemmaliang06.github.io/gemmaliangportfolio/Midterm/Home/index.html";
    }, 500);
  }
}

