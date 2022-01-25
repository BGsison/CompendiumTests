var x = 0;
function play() {
    audio.volume = 0.07;
    if (x == 0) {
        audio.muted = false;
        audio.currentTime = 2;
        audio.play();
    }
    else if (x%2 == 0 && x != 0) {
        audio.muted = false;
    }
    else {
        audio.muted = true;
    }
    if (x != 0 && audio.paused == true){
        audio.play();
        if (audio.muted == true) {
            audio.muted = false;
            x=x+1;
        }
    }
    audio.loop = true;
    x=x+1;
}
