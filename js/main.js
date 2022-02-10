var musicInt = 0;
function play() {
    audio.volume = 0.07;
    if (musicInt == 0) {
        audio.muted = false;
        audio.currentTime = 2;
        audio.play();
    }
    else if (musicInt%2 == 0 && musicInt != 0) {
        audio.muted = false;
    }
    else {
        audio.muted = true;
    }
    if (musicInt != 0 && audio.paused == true){
        audio.play();
        if (audio.muted == true) {
            audio.muted = false;
            musicInt=musicInt+1;
        }
    }
    audio.loop = true;
    musicInt=musicInt+1;
}

//Get the button:
mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}