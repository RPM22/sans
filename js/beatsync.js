// RTIBeatSync JS File
// For all of your beatsensing needs

console.log('RTIBeatSync: v1.0');

var turnedTheFuckOn = 0;


$('#beatsyncstart').on('click', function () {
    beatStart();
});

function beatStart() {
    if (turnedTheFuckOn == 0) {
        $('#beatsyncstart').addClass("visible");
        $('#beatsyncmain').addClass("visible");
        turnedTheFuckOn = 1;
    } else if (turnedTheFuckOn == 1) {
        $('#beatsyncstart').removeClass("visible");
        $('#beatsyncmain').removeClass("visible");
        turnedTheFuckOn = 0;
        audioStop();
    }
}

dragElement(document.getElementById("beatsyncmain"));

function dragElement(elmnt) {
    var fuck1 = 0,
        fuck2 = 0,
        fuck3 = 0,
        fuck4 = 0;
    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        fuck3 = e.clientX;
        fuck4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        fuck1 = fuck3 - e.clientX;
        fuck2 = fuck4 - e.clientY;
        fuck3 = e.clientX;
        fuck4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - fuck2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - fuck1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

var avg, bpm, bpm2, bpm3, bpm4, buffer, fillbs, ohYeahYeah;
var i = 0;
var speed = 1;
var bsaudio1 = document.getElementById('beatsync1');
var bsaudio2 = document.getElementById('beatsync2');
var bsaudio3 = document.getElementById('beatsync3');
var bsaudio4 = document.getElementById('beatsync4');
var bpmoutput = document.getElementById("beatsyncb1");
var bsfresh = $('#bsfresh');
var bsfresh2 = document.getElementById("bsfresh");
bpm4 = 500;


$(window).keydown((function (e) {
    var history = [],
        last = +new Date();

    return function (e) {
        if (e.which == 66) {
            var startvar = Cookies.get("start1");
            if (startvar == 1) {
                if (turnedTheFuckOn == 0) {
                    beatStart();
                } else if (turnedTheFuckOn == 1) {
                    var cur = (e.timeStamp - last);
                    history.push(cur);
                    if (i == 0 || i >= 17) {
                        history.shift();
                    }
                    if (i >= 17) {
                        i--
                    }
                    if (i >= 0) {
                        $('#bsc' + i).addClass("fill");
                    }
                    if (cur > (4 * avg)) {
                        history = [];
                        i = 0;
                        $('#bsc1').removeClass("fill");
                        $('#bsc2').removeClass("fill");
                        $('#bsc3').removeClass("fill");
                        $('#bsc4').removeClass("fill");
                        $('#bsc5').removeClass("fill");
                        $('#bsc6').removeClass("fill");
                        $('#bsc7').removeClass("fill");
                        $('#bsc8').removeClass("fill");
                        $('#bsc9').removeClass("fill");
                        $('#bsc10').removeClass("fill");
                        $('#bsc11').removeClass("fill");
                        $('#bsc12').removeClass("fill");
                        $('#bsc13').removeClass("fill");
                        $('#bsc14').removeClass("fill");
                        $('#bsc15').removeClass("fill");
                        $('#bsc16').removeClass("fill");
                    }
                    i++;
                    last = e.timeStamp;
                    var histTotal = history.reduce(function (sum, value) {
                        return sum + value;
                    }, 0);
                    avg = histTotal / (i - 1);
                    bpm = Math.round(10 * (60000 / avg)) / 10;
                    bpm2 = Math.trunc(bpm);
                    bpm3 = Math.round(Math.abs(bpm - bpm2) * 10);
                    bpm4 = ((60 / bpm) * 4) * 1000;
                    speed = Math.round(1000 * (bpm / 120)) / 1000;
                    audioPing();
                }
            }
        }
    };
}()));

function bsnu() {
    bpm = Math.round(10 * (bpm + 0.1)) / 10;
    bpm2 = Math.trunc(bpm);
    bpm3 = Math.round(Math.abs(bpm - bpm2) * 10);
    bpm4 = ((60 / bpm) * 4) * 1000;
    speed = Math.round(1000 * (bpm / 120)) / 1000;
    audioUpdate();

}

function bsnuloop() {
    bsnuInterval = setInterval(bsnu, 75);
}

function bsnustop() {
    clearInterval(bsnuInterval);
}

function bsnd() {
    bpm = Math.round(10 * (bpm - 0.1)) / 10;
    bpm2 = Math.trunc(bpm);
    bpm3 = Math.round(Math.abs(bpm - bpm2) * 10);
    bpm4 = ((60 / bpm) * 4) * 1000;
    speed = Math.round(1000 * (bpm / 120)) / 1000;
    audioUpdate();

}

function bsndloop() {
    bsndInterval = setInterval(bsnd, 75);
}

function bsndstop() {
    clearInterval(bsndInterval);
}

function audioPing() {
    if (turnedTheFuckOn == 1) {
        window.clearInterval(ohYeahYeah);
        bsfresh2.style.webkitAnimation = 'none';
        setTimeout(function () {
            bsfresh2.style.webkitAnimation = '';
        }, 10);
        if (isNaN(bpm4)) {
            bpm4 = 500;
        }
        audioUpdate();
        bsaudio1.currentTime = 10;
        bsaudio2.currentTime = 10;
        bsaudio3.currentTime = 10;
        bsaudio4.currentTime = 10;
        audioPlay();
        window.clearInterval(ohYeahYeah);
        window.setTimeout(audioPlay, bpm4);
        fillbs = document.getElementsByClassName("fill");
        for (var i = 0, max = fillbs.length; i < max; i++) {
            fillbs[i].style.webkitAnimation = 'none';
        }
        setTimeout(function (i) {
            for (var i = 0, max = fillbs.length; i < max; i++) {
                fillbs[i].style.webkitAnimation = '';
                fillbs[i].style.animationDuration = (4 * avg) + 'ms';
            }
        }, 10);
    } else {};
}

function audioPlay() {
    if (turnedTheFuckOn == 1) {
        window.clearInterval(ohYeahYeah);
        ohYeahYeah = window.setTimeout(audioPlay, bpm4);
        bsaudio1.currentTime = 0;
        bsaudio1.play();
        setTimeout(function () {
            bsaudio2.currentTime = 0;
            bsaudio2.play();
        }, (bpm4 / 4.02));
        setTimeout(function () {
            bsaudio3.currentTime = 0;
            bsaudio3.play();
        }, (bpm4 * (7 / 16)));
        setTimeout(function () {
            bsaudio4.currentTime = 0;
            bsaudio4.play();
        }, (bpm4 * (11 / 16)));
    }
};

function audioStop() {
    window.clearInterval(ohYeahYeah);
    bsaudio1.currentTime = 0;
    bsaudio1.pause();
    bsaudio2.currentTime = 0;
    bsaudio2.pause();
    bsaudio3.currentTime = 0;
    bsaudio3.pause();
    bsaudio4.currentTime = 0;
    bsaudio4.pause();
};

function audioUpdate() {
    console.log('RTIBeatSync: AvgBPM = ' + bpm + ', Speed = ' + speed);
    console.log(bpm4);
    setTimeout(function () {
        bsfresh.css({
            'animation-duration': (4 * Math.round(10 * (60000 / bpm)) / 10) + 'ms'
        });
    }, 10);
    bpmoutput.innerHTML = bpm2 + '<span id="smol">.' + bpm3 + '</span>';
    if (isNaN(speed)) {
        bpmoutput.innerHTML = '<span id="smol">More!</span>';
        speed = 1;
    }
    bsaudio1.playbackRate = speed;
    bsaudio2.playbackRate = speed;
    bsaudio3.playbackRate = speed;
    bsaudio4.playbackRate = speed;

}

$("#sansbutton4").click(function () {
    audioPing();
});
