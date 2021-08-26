function autoAudioPlay(elem, max, times) {
    elem.play();
    var start = 0;
    elem.addEventListener("ended", function () {
        start++;
        if (start < max) {

            setTimeout(function () { elem.play(); }, times);
        } else {
            elem.pause();
        }
    });
}

var myAuto = document.getElementById('audio1');
autoAudioPlay(myAuto, 2, 10000);