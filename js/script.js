// sansundertale.cf / sans.rti.llc
// MASTER JS FILE
// COPYRIGHT 2022 Rory McNamee

// yes i know its messy and that jquery is slow yadda yadda shut up

var version = '5.3.2';
var versiondate = '3/1/22';
var pageurl = window.location.hostname;

// CONSOLE STUFF
// plug 100

console.log('follow me on instagram @rpm22_ epic plug');
console.log('~ LOADING PAGE...');
var itr1 = "  ____     ____    __    _    ____";
var itr2 = " / ___|   / __ \\  /  \\  | |  / ___|";
var itr3 = " \\ \\_    | |__| | |   \\ | |  \\ \\_  ";
var itr4 = "  \\_ \\   |  __  | | |\\ \\| |   \\_ \\";
var itr5 = " ___\\ \\  | |  | | | | \\   |  ___\\ \\";
var itr6 = "|_____/\  |_|  |_| |_|  \\__/ |_____/";
var itr7 = "𝙐\\  𝙉\\  𝘿\\  𝙀\\  𝙍\\  𝙏\\  𝘼\\  𝙇\\  𝙀\\";
var itr8 = "\\𝙐  \\𝙉  \\𝘿  \\𝙀  \\𝙍  \\𝙏  \\𝘼  \\𝙇  \\𝙀";
var rti0 = "𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮";
var rti05 = " _________      _________      ___";
var rti1 = "|RRRRRRRRR\\ .  |TTTTTTTTT| .  |III| .";
var rti2 = "|RRRRR̲R̲RRRR\\ . |T̲T̲TTTTTT̲T̲| .  |III| .";
var rti3 = "|RRR|..\\RRR/ .  ..|TTT| ....  |III| .";
var rti4 = "|RRR|__/RR/ .     |TTT| .     |III| .";
var rti5 = "|RRRRR̲R̲R̲RR\\ .     |TTT| .     |III| .";
var rti6 = "|RRR|...\\RR\\ .    |TTT| .     |III| .";
var rti7 = "|R̲R̲R̲|.   \\R̲R̲\\ .   |T̲T̲T̲| .     |I̲I̲I̲| .";
var rti75 = " .....     .....   ......      ......";
var rti8 = "𝙈\\       𝙀\\      𝘿\\      𝙄\\       𝘼\\";
var rti82 = "\\𝙈       \\𝙀      \\𝘿      \\𝙄       \\𝘼";
var rti85 = "-=-=+| https://www.rtimedia.net |+=-=-";
var rti87 = "-=-=+|   https://www.rti.llc    |+=-=-";
var rti89 = "~ sansundertale.cf HAS LOADED";
var rti9 = "𝘌𝘯𝘫𝘰𝘺 𝘢𝘭𝘭 𝘰𝘧 𝘵𝘩𝘦 𝘦𝘳𝘳𝘰𝘳𝘴 𝘪𝘯 𝘮𝘺 𝘮𝘦𝘴𝘴𝘺 𝘤𝘰𝘥𝘦:";

$("#text1").text(pageurl);
$(".version").text(pageurl + ' version ' + version);
$(".version2").text(pageurl + ' v' + version + ' - ' + versiondate);
var loadtext = document.getElementById("fart");
var rtieqIcon = "url(https://cdn.rti.llc/sans/load.png)";
var rtieqTimeUpdate = 1;
var rtieqAnimationSpeed = 15;

$(window).on('load', function () {
    console.log(itr1 + '\n' + itr2 + '\n' + itr3 + '\n' + itr4 + '\n' + itr5 + '\n' + itr6 + '\n' + '\n' + itr7 + '\n' + itr8 + '\n' + '\n' + rti0 + '\n' + rti05 + '\n' + rti1 + '\n' + rti2 + '\n' + rti3 + '\n' + rti4 + '\n' + rti5 + '\n' + rti6 + '\n' + rti7 + '\n' + rti75 + '\n' + '\n' + rti8 + '\n' + rti82 + '\n' + '\n' + rti85 + '\n' + rti87 + '\n' + '\n' + '𝘴𝘢𝘯𝘴𝘶𝘯𝘥𝘦𝘳𝘵𝘢𝘭𝘦.𝘤𝘧 𝘷𝘦𝘳𝘴𝘪𝘰𝘯 ' + version + '\n' + '𝘳𝘦𝘭𝘦𝘢𝘴𝘦𝘥 𝘰𝘯 ' + versiondate);
    setTimeout(function () {
        $('#plbar').addClass("loaded");
        $('#plsans').addClass("loaded");
        $('#pageload').addClass("load");
        $('#plcont').addClass("loaded");
        setTimeout(function () {
            $('#pageload').addClass("loaded");
            console.log(rti89 + '\n' + rti9);
            $(document).scrollTop(0);
        }, 500);
    }, 1250);
});

if (pageurl === "sansundertale.cf") {
    document.getElementById('warning').style.display = 'block';
}

$(function () {
    $("#htmlsect").load("../changelog.html");
});


$("#wx").click(function () {
    $('#warning').addClass("close");
});

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var setval = Cookies.get("setvalue");
    if (setval == 0) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            $('#toTop').addClass("scroll");
        } else {
            $('#toTop').removeClass("scroll");
        }
    }
}

function settingsNote() {
    $('#settingsnote').addClass("hide");
}

function scrollToTop() {
    document.getElementById('init').style.transform = "perspective(525px) translateZ(0px) rotateX(0deg) rotateY(0deg)";
    var c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 15);
    }
};

// iOS CHECKY THINGY

var iOS, $window, windowsize;

function deviceCheck() {
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    $window = $(window);
    windowsize = $window.width();

    if (iOS = true) {
        $('body').addClass("ios");
        $('#playercontainer').addClass("ios");
        $('#pasterplayer').addClass("ios");
        $('#maindiv').addClass("ios");
        $('#bgbox').addClass("ios");
        $('#rpm22icon').addClass("ios");
        $('#visualizer_render').addClass("ios");
        document.getElementById('init').style.transform = "perspective(525px) translateZ(0px) rotateX(0deg) rotateY(0deg)";
    } else {
        $('body').removeClass("ios");
        $('#playercontainer').removeClass("ios");
        $('#pasterplayer').removeClass("ios");
        $('#maindiv').removeClass("ios");
        $('#bgbox').removeClass("ios");
        $('#rpm22icon').removeClass("ios");
        $('#visualizer_render').removeClass("ios");

    }
}
deviceCheck();
window.onresize = deviceCheck;


// 3D MOUSE TRACKER


var threedshow, threeCheck, mX, mY;

$(document).mousemove(function (e) {
    threedshow = Cookies.get("3dshow");
    if ("ontouchstart" in document.documentElement) {
        document.getElementById('init').style.transform = "perspective(525px) translateZ(0px) rotateX(0deg) rotateY(0deg)";
    } else {
        e = e || window.event;
        Z = -1;
        var XRel = e.pageX;
        var YRel = e.pageY;
        mX = e.pageX;
        mY = e.pageY;
        var width = window.innerWidth;

        YAngle = -(0.5 - (XRel / width)) * 30;
        XAngle = (0.25 - (YRel / width)) * 30;
        XAngle2 = (0 - (YRel / width)) * 30;
        document.getElementById('init').style.transform = "perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)";
        if (threedshow == 1) {
            threeCheck = 1;
            document.getElementById('rtieq').style.transform = "perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle * 3 + "deg) rotateY(" + YAngle * 3 + "deg)";
            document.getElementById('eqtdemo').style.transform = "perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle * 3 + "deg) rotateY(" + YAngle * 3 + "deg)";
        }
    }
});


$("#nintendo3d1").click(function () {
    threeCheck = 0;
    document.getElementById('init').style.transform = "perspective(525px) translateZ(0px) rotateX(0deg) rotateY(0deg)";
    document.getElementById('rtieq').style.transform = "perspective(525px) translateZ(0px) rotateX(0deg) rotateY(0deg)";
    document.getElementById('eqtdemo').style.transform = "perspective(525px) translateZ(0px) rotateX(0deg) rotateY(0deg)";

});

$("#nintendo3d2").click(function () {
    threeCheck = 1;

});

$(window).mouseleave(function () {
    threedshow = Cookies.get("3dshow");
    threeCheck = 0;
    if (threedshow == 1) {
        document.getElementById('rtieq').style.transform = "perspective(525px) translateZ(0px) rotateX(0deg) rotateY(0deg)";
        document.getElementById('eqtdemo').style.transform = "perspective(525px) translateZ(0px) rotateX(0deg) rotateY(0deg)";
    }
    document.getElementById('init').style.transform = "perspective(525px) translateZ(0px) rotateX(0deg) rotateY(0deg)";
});




// BUTTON JS
// clicky buttonss!!111





var spotlogin = Cookies.get("spotlogin");

$('#changelogstart').on('click', function () {
    $('#changelogstart').toggleClass("changelog");
    $('#htmlsect').toggleClass("changelog");
});

$('#sanstrigger').click(function () {
    $("#sanscss").empty();
    $('#sanscss').append('@import url(css/active.css)');
});

$('#sansplay').click(function () {
    $("#sanscss").empty();
    $('#sanscss').append('@import url(css/active.css)');
});

$("#sansbutton0").click(function () {
    $("#songcss").empty();
    $('#songcss').append('@import url(css/song/1.css)');
});

$("#sansbutton1").click(function () {
    $("#songcss").empty();
    $('#songcss').append('@import url(css/song/2.css)');
});

$("#sansbutton2").click(function () {
    $("#songcss").empty();
    $('#songcss').append('@import url(css/song/3.css)');
});

$("#sansbutton3").click(function () {
    $("#songcss").empty();
    $('#songcss').append('@import url(css/song/4.css)');
});

$("#sansbutton4").click(function () {
    $("#songcss").empty();
    $('#songcss').append('@import url(css/song/5.css)');
});

$("#sansbutton5").click(function () {
    $("#songcss").empty();
    $('#songcss').append('@import url(css/song/6.css)');
});

$("#sansbutton6").click(function () {
    $("#songcss").empty();
    $('#songcss').append('@import url(css/song/9.css)');
});

$("#sansbutton7").click(function () {
    $("#songcss").empty();
    $('#songcss').append('@import url(css/song/10.css)');
});

$("#sansbutton8").click(function () {
    $("#songcss").empty();
    $('#songcss').append('@import url(css/song/11.css)');
});

$("#filebutton").click(function () {
    $("#songcss").empty();
    $('#songcss').append('@import url(css/song/7.css)');
});

$("#animbutton0").click(function () {
    $("#animcss").empty();
    $('#animcss').append('@import url(css/animation1.css)');
});

$("#animbutton1").click(function () {
    $("#animcss").empty();
    $('#animcss').append('@import url(css/animation2.css)');
});

$("#animbutton2").click(function () {
    $("#animcss").empty();
    $('#animcss').append('@import url(css/animation3.css)');
});

$("#animbutton3").click(function () {
    $("#animcss").empty();
    $('#animcss').append('@import url(css/animation4.css)');
});

$("#animbutton4").click(function () {
    $("#animcss").empty();
    $('#animcss').append('@import url(css/animation5.css)');
});

$("#animbutton5").click(function () {
    $("#animcss").empty();
    $('#animcss').append('@import url(css/animation6.css)');
});

$("#content1").click(function () {
    $("#sourcecss").empty();
    $('#sourcecss').append('@import url(css/source1.css)');
    $("#songcss").empty();
    loadSRC();
    Cookies.set('spotlogin', 0);
    sansAudioPause();
    rpm22icon.css({
        'animation-duration': '0.75s'
    });
    Cookies.set('playerstatus', 0);
    $("#rpm22icon").addClass("pause");
    convertSpotify();
});

$("#content2").click(function () {
    $("#sourcecss").empty();
    $('#sourcecss').append('@import url(css/source2.css)');
    Cookies.set('spotlogin', 0);
    sansAudioPause();
    rpm22icon.css({
        'animation-duration': '0.75s'
    });
    Cookies.set('playerstatus', 0);
    $("#rpm22icon").addClass("pause");
    convertSpotify();
});

$("#content3").click(function () {
    $("#sourcecss").empty();
    $('#sourcecss').append('@import url(css/source3.css)');
    Cookies.set('spotlogin', 0);
    sansAudioPause();
    rpm22icon.css({
        'animation-duration': '0.75s'
    });
    Cookies.set('playerstatus', 0);
    $("#rpm22icon").addClass("pause");
    convertSpotify();
    rtieqURL = 'null';
});

window.setInterval(function () {

    var spotlogin = Cookies.get("spotlogin");
    if (spotlogin == 1) {
        $("#spot1").addClass("login");
        $("#spot11").addClass("login");
        $("#spotinfo").addClass("login");
    } else if (spotlogin == 0) {
        $("#spot1").removeClass("login");
        $("#spot11").removeClass("login");
        $("#spotinfo").removeClass("login");
    }
}, 250);

window.setInterval(function () {
    var spotload = Cookies.get("spotload");

    if (spotload == 1) {
        Cookies.set('spotload', 0);
        initSpotify();
    }
}, 250);

$("#content4").click(function () {
    $("#sourcecss").empty();
    $('#sourcecss').append('@import url(css/source4.css)');
    Cookies.set('spotlogin', 0);
    sansAudioPause();
    rpm22icon.css({
        'animation-duration': '0.75s'
    });
    Cookies.set('playerstatus', 0);
    $("#rpm22icon").addClass("pause");
    convertSpotify();
});

$("#content5").click(function () {
    $("#sourcecss").empty();
    $('#sourcecss').append('@import url(css/source5.css)');
    Cookies.set('spotlogin', 0);
    sansAudioPause();
    rpm22icon.css({
        'animation-duration': '0.75s'
    });
    Cookies.set('playerstatus', 0);
    $("#rpm22icon").addClass("pause");
    convertSpotify();
});

var eqval;

$("#eqm1").click(function () {
    $("#eqmodecss").empty();
    $('#eqmodecss').append('@import url(css/eqm1.css)');
    eqval = 1;
    updateEQ();
});


$("#eqm2").click(function () {
    $("#eqmodecss").empty();
    $('#eqmodecss').append('@import url(css/eqm2.css)');
    eqval = 2;
    updateEQ();
});


$("#eqm3").click(function () {
    $("#eqmodecss").empty();
    $('#eqmodecss').append('@import url(css/eqm3.css)');
    eqval = 3;
    updateEQ();
});


$("#eqm4").click(function () {
    $("#eqmodecss").empty();
    $('#eqmodecss').append('@import url(css/eqm4.css)');
    eqval = 4;
    updateEQ();
});



$(".smi1").click(function () {
    smiRemove();
    $(".smi1").addClass("smactive");
    $("#scont5").addClass("active");

});

$(".smi2").click(function () {
    smiRemove();
    $(".smi2").addClass("smactive");
    $("#scont0").addClass("active");

});

$(".smi3").click(function () {
    smiRemove();
    $(".smi3").addClass("smactive");
    $("#scont1").addClass("active");

});

$(".smi4").click(function () {
    smiRemove();
    $(".smi4").addClass("smactive");
    $("#scont3").addClass("active");

});

$(".smi5").click(function () {
    smiRemove();
    $(".smi5").addClass("smactive");
    $("#scont4").addClass("active");

});

$(".smi6").click(function () {
    smiRemove();
    $(".smi6").addClass("smactive");
    $("#scont6").addClass("active");

});

function smiRemove() {
    $(".smi1").removeClass("smactive");
    $(".smi2").removeClass("smactive");
    $(".smi3").removeClass("smactive");
    $(".smi4").removeClass("smactive");
    $(".smi5").removeClass("smactive");
    $(".smi6").removeClass("smactive");
    $("#scont0").removeClass("active");
    $("#scont1").removeClass("active");
    $("#scont3").removeClass("active");
    $("#scont4").removeClass("active");
    $("#scont5").removeClass("active");
    $("#scont6").removeClass("active");

};



$('#exit').click(function () {
    $('input:checked').removeAttr('checked');
});

$("#soundbutton1").mouseup(function () {
    $("#soundbutton11").addClass("active");
    $("#soundbutton1").removeClass("active");
    $("#soundbutton1").addClass("pass");
    $("#bar1").addClass("active");
    setTimeout(function () {
        $("#bar1").removeClass("active");
    }, 300);
});

$("#soundbutton11").mouseup(function () {
    $("#soundbutton12").addClass("active");
    $("#soundbutton11").removeClass("active");
    $("#bar1").addClass("active");
    setTimeout(function () {
        $("#bar1").removeClass("active");
    }, 300);
});

$("#soundbutton12").mouseup(function () {
    $("#soundbutton13").addClass("active");
    $("#soundbutton12").removeClass("active");
    $("#bar1").addClass("active");
    setTimeout(function () {
        $("#bar1").removeClass("active");
    }, 300);
});

$("#soundbutton13").mouseup(function () {
    $("#soundbutton1").addClass("active");
    $("#soundbutton13").removeClass("active");
    $("#bar1").addClass("active");
    setTimeout(function () {
        $("#bar1").removeClass("active");
    }, 300);
});

$("#soundbutton2").mouseup(function () {
    $("#bar2").addClass("active");
    setTimeout(function () {
        $("#bar2").removeClass("active");
    }, 250);
});

$("#soundbutton3").mouseup(function () {
    $("#bar3").addClass("active");
    setTimeout(function () {
        $("#bar3").removeClass("active");
    }, 300);
});

$("#soundbutton4").mouseup(function () {
    $("#bar4").addClass("active");
    setTimeout(function () {
        $("#bar4").removeClass("active");
    }, 400);
});

$('#apply1').on('click', function () {
    location.reload();
});

function playSound5() {
    var gs1 = Cookies.get("gs1");
    if (gs1 == 1) {
        var sound = document.getElementById("sanstalk");
        sound.currentTime = 0;
        sound.play();
    }
}

function playSound6() {
    var sound = document.getElementById("sanstalk2");
    sound.currentTime = 0;
    sound.play();
}

function playSound55() {
    var sound = document.getElementById("sansaudio5");
    sound.currentTime = 0;
    sound.play();
}

function m1m() {
    var sound = document.getElementById("m1");
    sound.currentTime = 0;
    sound.play();
}

function m11m() {
    var sound = document.getElementById("m11");
    sound.currentTime = 0;
    sound.play();
}

function m12m() {
    var sound = document.getElementById("m12");
    sound.currentTime = 0;
    sound.play();
}

function m13m() {
    var sound = document.getElementById("m13");
    sound.currentTime = 0;
    sound.play();
}

function m2m() {
    var sound = document.getElementById("m2");
    sound.currentTime = 0;
    sound.play();
}

function m3m() {
    var sound = document.getElementById("m3");
    sound.currentTime = 0;
    sound.play();
}

function m4m() {
    var sound = document.getElementById("m4");
    sound.currentTime = 0;
    sound.play();
}

$('#settingscheck').on('click', function (e) {
    $('#changelogstart').removeClass("changelog");
    $('#htmlsect').removeClass("changelog");
    $('#settingsdiv').toggleClass("active");
    $('#settingshead').toggleClass("active");
    $('#mobilespacer').toggleClass("active");
    $('#settingscheck').toggleClass("active");
    $('#sansvolcont').removeClass("active");
    $('#sansvol').removeClass("active");
    $('#linkbox').toggleClass("hide");
    $('#bgbox').toggleClass("active");
    $('#cpmain').toggleClass("active");
    $('#maindiv').toggleClass("active");
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize < 1279) {
        var startvar = Cookies.get("start1");
        if (startvar == 1) {
            $('#controlbox2').toggleClass("active");
            $('#controlbox').toggleClass("active");
            $('#sansadd').toggleClass("active");
            $('#sanscount').toggleClass("active");
            $('#sansclick').toggleClass("active");
        }
    }
    var setval = Cookies.get("setvalue");
    if (setval == 0) {
        Cookies.set('setvalue', 1);
    }

    if (setval == 1) {
        Cookies.set('setvalue', 0);
    }
    e.preventDefault();
});

$(".hovergroup1").hover(function () {
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize > 1279) {
        var start1 = Cookies.get("start1");
        if (start1 == 1) {
            $('#cpmain').removeClass("hover");
        }
    }
}, function () {
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize > 1279) {
        var start1 = Cookies.get("start1");
        if (start1 == 1) {
            $('#cpmain').addClass("hover");
        }
    }
});

$('#sanspin').on('click', function () {
    $('#cpmain').toggleClass("pin");
    $('#sanspin').toggleClass("pin");
});

$('#sanshide').on('click', function (e) {
    $('#sanshide').toggleClass("sanshide");
    $('#animationcont').toggleClass("sanshide");
    e.preventDefault();
});

function exitSettings() {
    $('#settingsdiv').removeClass("active");
    $('#settingshead').removeClass("active");
    $('#mobilespacer').removeClass("active");
    $('#settingscheck').removeClass("active");
    $('#linkbox').removeClass("hide");
    $('#bgbox').removeClass("active");
    $('#maindiv').removeClass("active");
    $('#cpmain').removeClass("active");
    if (windowsize < 1279) {
        var start1 = Cookies.get("start1");
        if (start1 == 1) {
            $('#controlbox2').removeClass("active");
            $('#controlbox').removeClass("active");
            $('#sansadd').removeClass("active");
            $('#sanscount').removeClass("active");
            $('#sansclick').removeClass("active");
        }
    }
    Cookies.set('setvalue', 0);

}
$('#exit').on('click', function () {
    exitSettings();
});

$('#settingsdiv').on('click', function (e) {
    if (e.target !== this)
        return;
    exitSettings();
});

$('#sanshide2').on('click', function () {
    $('#maindiv').addClass("hide");
    $('#linkbox').addClass("hide");
    $('#barbank').addClass("hide");
    $('#barbank2').addClass("hide");
    $('#bargap').addClass("hide");
    $('#settingscheck').addClass("hide");
    $('#cpmain').addClass("hide");
    $('#sanshide3').addClass("hide");
    $('.audio-player').addClass("hide");
});

$('#sanshide3').on('click', function () {
    exitHide();
});

$(window).keydown(function (e) {
    if (e.which == 27) {
        var setval = Cookies.get("setvalue");
        if (setval == 0) {
            exitHide();
        } else if (setval == 1) {
            exitSettings();
        }
    }
});

function exitHide() {
    $('#maindiv').removeClass("hide");
    $('#linkbox').removeClass("hide");
    $('#barbank').removeClass("hide");
    $('#barbank2').removeClass("hide");
    $('#bargap').removeClass("hide");
    $('#settingscheck').removeClass("hide");
    $('#cpmain').removeClass("hide");
    $('#sanshide3').removeClass("hide");
    $('.audio-player').removeClass("hide");
}

function initClicky() {
    $(document).keydown(function (e) {
        var setval = Cookies.get("setvalue");
        if (setval == 0) {
            if (e.which == 90) {
                if ($("#soundbutton1").hasClass("active")) {
                    m1m();
                    $("#soundbutton11").addClass("active");
                    $("#soundbutton1").removeClass("active");
                } else if ($("#soundbutton11").hasClass("active")) {
                    m11m();
                    $("#soundbutton12").addClass("active");
                    $("#soundbutton11").removeClass("active");
                } else if ($("#soundbutton12").hasClass("active")) {
                    m12m();
                    $("#soundbutton13").addClass("active");
                    $("#soundbutton12").removeClass("active");
                } else if ($("#soundbutton13").hasClass("active")) {
                    m13m();
                    $("#soundbutton1").addClass("active");
                    $("#soundbutton13").removeClass("active");
                }
                $("#soundbutton1").addClass("pass");
                $("#bar1").addClass("active");
                setTimeout(function () {
                    $("#bar1").removeClass("active");
                }, 300);
            } else if (e.which == 88) {
                m2m();
                $("#bar2").addClass("active");
                setTimeout(function () {
                    $("#bar2").removeClass("active");
                }, 250);
            } else if (e.which == 67) {
                m3m();
                $("#bar3").addClass("active");
                setTimeout(function () {
                    $("#bar3").removeClass("active");
                }, 300);
            } else if (e.which == 86) {
                m4m();
                $("#bar4").addClass("active");
                setTimeout(function () {
                    $("#bar4").removeClass("active");
                }, 400);
            } else if (e.which == 65) {
                var sound = document.getElementById("nc");
                sound.currentTime = 0;
                sound.play();
                $("#bar21").addClass("active");
                setTimeout(function () {
                    $("#bar21").removeClass("active");
                }, 300);
            } else if (e.which == 87) {
                var sound = document.getElementById("ndb");
                sound.currentTime = 0;
                sound.play();
                $("#bar21").addClass("active");
                setTimeout(function () {
                    $("#bar21").removeClass("active");
                }, 300);
            } else if (e.which == 83) {
                var sound = document.getElementById("nd");
                sound.currentTime = 0;
                sound.play();
                $("#bar22").addClass("active");
                setTimeout(function () {
                    $("#bar22").removeClass("active");
                }, 300);
            } else if (e.which == 69) {
                var sound = document.getElementById("neb");
                sound.currentTime = 0;
                sound.play();
                $("#bar22").addClass("active");
                setTimeout(function () {
                    $("#bar22").removeClass("active");
                }, 300);
            } else if (e.which == 68) {
                var sound = document.getElementById("ne");
                sound.currentTime = 0;
                sound.play();
                $("#bar23").addClass("active");
                setTimeout(function () {
                    $("#bar23").removeClass("active");
                }, 300);
            } else if (e.which == 70) {
                var sound = document.getElementById("nf");
                sound.currentTime = 0;
                sound.play();
                $("#bar24").addClass("active");
                setTimeout(function () {
                    $("#bar24").removeClass("active");
                }, 300);
            } else if (e.which == 84) {
                var sound = document.getElementById("ngb");
                sound.currentTime = 0;
                sound.play();
                $("#bar24").addClass("active");
                setTimeout(function () {
                    $("#bar24").removeClass("active");
                }, 300);
            } else if (e.which == 71) {
                var sound = document.getElementById("ng");
                sound.currentTime = 0;
                sound.play();
                $("#bar25").addClass("active");
                setTimeout(function () {
                    $("#bar25").removeClass("active");
                }, 300);
            } else if (e.which == 89) {
                var sound = document.getElementById("nab");
                sound.currentTime = 0;
                sound.play();
                $("#bar25").addClass("active");
                setTimeout(function () {
                    $("#bar25").removeClass("active");
                }, 300);
            } else if (e.which == 72) {
                var sound = document.getElementById("na");
                sound.currentTime = 0;
                sound.play();
                $("#bar26").addClass("active");
                setTimeout(function () {
                    $("#bar26").removeClass("active");
                }, 300);
            } else if (e.which == 85) {
                var sound = document.getElementById("nbb");
                sound.currentTime = 0;
                sound.play();
                $("#bar26").addClass("active");
                setTimeout(function () {
                    $("#bar26").removeClass("active");
                }, 300);
            } else if (e.which == 74) {
                var sound = document.getElementById("nb");
                sound.currentTime = 0;
                sound.play();
                $("#bar27").addClass("active");
                setTimeout(function () {
                    $("#bar27").removeClass("active");
                }, 300);
            } else if (e.which == 75) {
                var sound = document.getElementById("nc2");
                sound.currentTime = 0;
                sound.play();
                $("#bar27").addClass("active");
                setTimeout(function () {
                    $("#bar27").removeClass("active");
                }, 300);
            } else if (e.which == 79) {
                var sound = document.getElementById("ndb2");
                sound.currentTime = 0;
                sound.play();
                $("#bar28").addClass("active");
                setTimeout(function () {
                    $("#bar28").removeClass("active");
                }, 300);
            } else if (e.which == 76) {
                var sound = document.getElementById("nd2");
                sound.currentTime = 0;
                sound.play();
                $("#bar28").addClass("active");
                setTimeout(function () {
                    $("#bar28").removeClass("active");
                }, 300);
            } else if (e.which == 80) {
                var sound = document.getElementById("neb2");
                sound.currentTime = 0;
                sound.play();
                $("#bar29").addClass("active");
                setTimeout(function () {
                    $("#bar29").removeClass("active");
                }, 300);
            } else if (e.which == 186) {
                var sound = document.getElementById("ne2");
                sound.currentTime = 0;
                sound.play();
                $("#bar29").addClass("active");
                setTimeout(function () {
                    $("#bar29").removeClass("active");
                }, 300);
            } else if (e.which == 222) {
                var sound = document.getElementById("nf2");
                sound.currentTime = 0;
                sound.play();
                $("#bar210").addClass("active");
                setTimeout(function () {
                    $("#bar210").removeClass("active");
                }, 300);
            } else if (e.which == 37) {
                vct = htmlAudio.currentTime;
                htmlAudio.currentTime = vct - 5;
            } else if (e.which == 39) {
                vct = htmlAudio.currentTime;
                htmlAudio.currentTime = vct + 5;
            } else if (e.which == 189) {
                vct = htmlAudio.currentTime;
                htmlAudio.currentTime = vct - 10;
            } else if (e.which == 187) {
                vct = htmlAudio.currentTime;
                htmlAudio.currentTime = vct + 10;
            } else if (e.which == 48) {
                htmlAudio.currentTime = 0;
            } else if (e.which == 49) {
                vtt = htmlAudio.duration;
                htmlAudio.currentTime = vtt * 0.1;
            } else if (e.which == 50) {
                vtt = htmlAudio.duration;
                htmlAudio.currentTime = vtt * 0.2;
            } else if (e.which == 51) {
                vtt = htmlAudio.duration;
                htmlAudio.currentTime = vtt * 0.3;
            } else if (e.which == 52) {
                vtt = htmlAudio.duration;
                htmlAudio.currentTime = vtt * 0.4;
            } else if (e.which == 53) {
                vtt = htmlAudio.duration;
                htmlAudio.currentTime = vtt * 0.5;
            } else if (e.which == 54) {
                vtt = htmlAudio.duration;
                htmlAudio.currentTime = vtt * 0.6;
            } else if (e.which == 55) {
                vtt = htmlAudio.duration;
                htmlAudio.currentTime = vtt * 0.7;
            } else if (e.which == 56) {
                vtt = htmlAudio.duration;
                htmlAudio.currentTime = vtt * 0.8;
            } else if (e.which == 57) {
                vtt = htmlAudio.duration;
                htmlAudio.currentTime = vtt * 0.9;
            }
        }
    });
}
$('#sanstrigger').click(function () {
    $('#warning').addClass("close");
    initClicky();
    Cookies.set('start1', 1);
});
$('#sansplay').click(function () {
    initClicky();
    Cookies.set('start1', 1);
});




// SLIDERS JS
// the thingys that like move jeepers




function SetVolume(val) {
    htmlAudio.volume = val / 100;
}



$("#sansvol").click(function () {
    $('#sansvolcont').toggleClass("active");
    $('#sansvol').toggleClass("active");
});

var setSliderInitial = function () {
    var themevalue = Cookies.get("sans1");
    var themevalue2 = Cookies.get("sans2");
    var slideval = Cookies.get("sans3");
    if (typeof Cookies.get('sans3') === 'undefined') {
        output.innerHTML = (100 * 0.1).toFixed(1);
        document.getElementById("slider").value = 100;
        Cookies.set('sans3', 100);
    } else {
        setSpeedInital();
    };
    if (typeof Cookies.get('sans1') === 'undefined') {
        Cookies.set('sans1', 0);
    } else {
        setSpeedInital();
    };
    if (typeof Cookies.get('sans2') === 'undefined') {
        Cookies.set('sans2', 0);
    } else {
        setSpeedInital();
    };
};

var rangeSelector = $('#slider');
var mover = $('#mover');
var rpm22icon = $('#rpm22icon');
var settingscheck = $('#settingscheck');
var themevalue = Cookies.get("sans1");
var themevalue2 = Cookies.get("sans2");
var slideval = Cookies.get("sans3");
var cookie = Cookies.get("cookie");
var slider = document.getElementById("slider");
var sliderfour = document.getElementById("slider4");
var output = document.getElementById("rangeval2");
var outputfour = document.getElementById("rangeval3");
var sansbutton = document.getElementsByClassName("sansbutton");

output.innerHTML = (rangeSelector.val() * 0.1).toFixed(1);

$(document).on("input", slider, function () {
    setSpeedValue();
    output.innerHTML = (rangeSelector.val() * 0.1).toFixed(1);
    Cookies.set('sans3', rangeSelector.val());
});
$(document).on("input", sliderfour, function () {
    var sansX = $('.x');
    var sansY = $('.y');
    var sliderfourval = sliderfour.value;
    if (sliderfourval == 1) {
        outputfour.innerHTML = 0.0000023;
        sansY.css({
            'animation-duration': rangeSelector.val() * 0.04397 + 's'
        });
    } else if (sliderfourval == 2) {
        outputfour.innerHTML = 0.11;
        sansY.css({
            'animation-duration': rangeSelector.val() * 0.045 + 's'
        });
    } else if (sliderfourval == 3) {
        sansY.css({
            'animation-duration': rangeSelector.val() * 0.04 + 's'
        });
        outputfour.innerHTML = 20;
    } else if (sliderfourval == 4) {
        sansY.css({
            'animation-duration': rangeSelector.val() * 0.05 + 's'
        });
        outputfour.innerHTML = 50;
    } else if (sliderfourval == 5) {
        sansY.css({
            'animation-duration': rangeSelector.val() * 0.1 + 's'
        });
        outputfour.innerHTML = 100;
    } else {};
    Cookies.set('sans2', sliderfourval);
});

var constvar;

function setSpeedValue() {
    var sansX = $('.x');
    var sansY = $('.y');
    var sliderfourval = sliderfour.value;
    if (sliderfourval == 1) {
        sansY.css({
            'animation-duration': rangeSelector.val() * 0.04397 + 's'
        });
    } else if (sliderfourval == 2) {
        sansY.css({
            'animation-duration': rangeSelector.val() * 0.045 + 's'
        });
    } else if (sliderfourval == 3) {
        sansY.css({
            'animation-duration': rangeSelector.val() * 0.04 + 's'
        });
    } else if (sliderfourval == 4) {
        sansY.css({
            'animation-duration': rangeSelector.val() * 0.05 + 's'
        });
    } else if (sliderfourval == 5) {
        sansY.css({
            'animation-duration': rangeSelector.val() * 0.1 + 's'
        });
    }
    sansX.css({
        'animation-duration': rangeSelector.val() * 0.1 + 's'
    });
    mover.css({
        'animation-duration': rangeSelector.val() * 0.1 * 2 + 's'
    });

    /**constVar = rangeSelector.val() * 1 / 120;
    constloop = clearInterval();
    constloop = setInterval(constLooper, constVar);**/

    var sourcevalue = Cookies.get("source1");
    if (sourcevalue == 3) {
        rpm22icon.css({
            'animation-duration': '0.75s'
        });
    } else {
        rpm22icon.css({
            'animation-duration': rangeSelector.val() * 0.1 + 's'

        });
    }
};


var fired = 1;
var as1 = document.getElementById("slideras1");
var asc2 = document.getElementById("asc2");
var as, as2;
as = 1;
as2 = 1;

$(document).on("input", as1, function () {
    setAudioSpeed();
});

function setAudioSpeed() {
    var asval = as1.value;
    if (asval <= 100) {
        as = ((asval / 110) + 0.091);
    } else if (asval > 100) {
        as = (((asval - 100) / 25) + 1);
    } else {};
    as2 = as.toFixed(2);
    asc2.innerHTML = as2;
    htmlAudio.playbackRate = as2;

}

$("#sansadd").click(function () {
    addSans();
});

function addSans() {

    var start = Cookies.get("start1");
    if (start == 1) {
        var auto = document.getElementById("stitle4");
        var divx = document.createElement("div");
        var divy = document.createElement("div");
        divx.appendChild(divy);
        document.getElementById("animationcont").appendChild(divx);
        divy.classList.add("y");
        divx.classList.add("x");
        setSpeedValue();
        fired++;
        console.log('SansCount: ' + fired);
        var sanscount = document.getElementById("sanscount");
        sanscount.innerHTML = fired;
        var oldval = Cookies.get("sanscount");
        if (oldval < fired) {
            Cookies.set('sanscount', fired, {
                expires: 365,
                path: '/'
            });
            $('#sanscount').addClass("record");
            auto.innerHTML = fired;

        } else {
            $('#sanscount').removeClass("record");
        }
    }
}

var autotoggle = 0;
var timeset = 100;
var t;
var autoinput = document.getElementById("autoinput");

$("#sansclick").click(function () {
    autoclick();

});

function autoclick() {

    timeset = autoinput.value;

    if (autotoggle == 0) {
        autotoggle = 1;
        t = setInterval(addSans, timeset);
        $('#sansclick').addClass("clicking");
    } else {
        autotoggle = 0;
        clearInterval(t);
        $('#sansclick').removeClass("clicking");
    }

};

$(document).on("input", autoinput, function () {
    clearInterval(t);
    if (autotoggle == 0) {
        autotoggle = 1;
    } else {
        autotoggle = 0;
    }
    autoclick();
});


function isNumber(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}



$('#sanstrigger').click(function () {
    setSpeedInital();
    setSpeedValue();
});

$('#sansplay').click(function () {
    setSpeedInital();
    setSpeedValue();
});

$('#settingscheck').click(function () {
    setSpeedInital();
    setSpeedValue();
});

var setSpeedInital = function () {
    var slideval = Cookies.get("sans3");
    var slidevalTwo = Cookies.get("sans2");
    output.innerHTML = (slideval * 0.1).toFixed(1);
    document.getElementById("slider").value = slideval;
    document.getElementById("slider4").value = slidevalTwo;
    if (slidevalTwo == 1) {
        outputfour.innerHTML = 0.0000023;
    } else if (slidevalTwo == 2) {
        outputfour.innerHTML = 0.11;
    } else if (slidevalTwo == 3) {
        outputfour.innerHTML = 20;
    } else if (slidevalTwo == 4) {
        outputfour.innerHTML = 50;
    } else if (slidevalTwo == 5) {
        outputfour.innerHTML = 100;
    } else {};

};

$(document).ready(function () {
    setSliderInitial();
    setSpeedValue();
    var colorval = Cookies.get("sans4");
    document.getElementById("slider2").value = colorval;
    var colorvalTwoFive = Cookies.get("sans6");
    document.getElementById("slider25").value = colorvalTwoFive;
    var colorvalTwo = Cookies.get("sans5");
    document.getElementById("slider3").value = colorvalTwo;
    initColorSelect();
});



// SKINS JS
// wow



var skinbox = document.getElementById('filebutton3');
skinbox.onchange = function (e) {
    document.getElementById("foldername").innerHTML = "Loading...";
    console.log('SansSkin: Loading skin...');
    var flist = (skinbox.files);
    var f2list = [{
        name: 'name',
        id: 'id'
    }];
    for (var i = 0, l = flist.length; i < l; i++) {
        f2list.push({
            name: (flist[i].name),
            id: i
        });
    }
    var fsolve;
    var fcount = 0;

    function fsolver(testname) {
        fname = f2list.find(({
            name
        }) => name === testname);
        if (fname == null) {
            fsolve = 'https://cdn.rti.llc/sans/missing.png';
            fcount++;
        } else {
            fsolve = URL.createObjectURL(skinbox.files[fname.id]);
        }
    }
    var style = document.getElementById('skincss');
    var testname = "act.png"
    fsolver(testname);
    style.append('#soundbutton2{background-image:url(' + fsolve + ');}');
    var testname = "add.png"
    fsolver(testname);
    style.append('#sansadd{background-image:url(' + fsolve + ');}');
    var testname = "bar.png"
    fsolver(testname);
    style.append('.bar{background-image:url(' + fsolve + ');}');
    var testname = "bg.png"
    fsolver(testname);
    style.append('#bgbox{background-image:url(' + fsolve + ');}');
    var testname = "bg2.png"
    fsolver(testname);
    style.append('#bgbox.active{background-image:url(' + fsolve + ');}');
    var testname = "blank.png"
    fsolver(testname);
    style.append('#sanscount{background-image:url(' + fsolve + ');}');
    var testname = "center.png"
    fsolver(testname);
    style.append('#rpm22icon{background-image:url(' + fsolve + ');}');
    var testname = "centerpause.png"
    fsolver(testname);
    style.append('#rpm22icon.pause{background-image:url(' + fsolve + ');}');
    var testname = "cursor.png"
    fsolver(testname);
    style.append('a{cursor: url(' + fsolve + ') 8 8, auto;}button{cursor: url(' + fsolve + ') 8 8, auto;}input{cursor: url(' + fsolve + ') 8 8, auto;}');
    var testname = "cursor2.png"
    fsolver(testname);
    style.append('html{cursor: url(' + fsolve + ') 8 8, auto;}');
    var testname = "fight1.png"
    fsolver(testname);
    style.append('#soundbutton1.active{background-image:url(' + fsolve + ');}');
    var testname = "fight2.png"
    fsolver(testname);
    style.append('#soundbutton11.active{background-image:url(' + fsolve + ');}');
    var testname = "fight3.png"
    fsolver(testname);
    style.append('#soundbutton12.active{background-image:url(' + fsolve + ');}');
    var testname = "fight4.png"
    fsolver(testname);
    style.append('#soundbutton13.active{background-image:url(' + fsolve + ');}');
    var testname = "font.ttf"
    fsolver(testname);
    style.append('@font-face {font-family: CS;src: url(' + fsolve + ');}');
    var testname = "gear.png"
    fsolver(testname);
    style.append('#settingscheck{background-image:url(' + fsolve + ');}');
    var testname = "gear2.png"
    fsolver(testname);
    style.append('#settingscheck.active{background-image:url(' + fsolve + ');}');
    var testname = "healthbar.png"
    fsolver(testname);
    style.append('#bar{background-image:url(' + fsolve + ');}');
    var testname = "item.png"
    fsolver(testname);
    style.append('#soundbutton3{background-image:url(' + fsolve + ');}');
    var testname = "keyboard.png"
    fsolver(testname);
    style.append('#twobartwo{background-image:url(' + fsolve + ');}');
    var testname = "mercy.png"
    fsolver(testname);
    style.append('#soundbutton4{background-image:url(' + fsolve + ');}');
    var testname = "mover.png"
    fsolver(testname);
    style.append('.y{background-image:url(' + fsolve + ');}');
    var testname = "pause.png"
    fsolver(testname);
    style.append('#sanspause{background-image:url(' + fsolve + ');}');
    var testname = "pin.png"
    fsolver(testname);
    style.append('#sanspin{background-image:url(' + fsolve + ');}');
    var testname = "pin2.png"
    fsolver(testname);
    style.append('#sanspin.pin{background-image:url(' + fsolve + ');}');
    var testname = "play.png"
    fsolver(testname);
    style.append('#sansplay{background-image:url(' + fsolve + ');}#sansplay2{background-image:url(' + fsolve + ');}');
    var testname = "sanshide.png"
    fsolver(testname);
    style.append('#sanshide{background-image:url(' + fsolve + ');}');
    var testname = "sanshide2.png"
    fsolver(testname);
    style.append('#sanshide.sanshide{background-image:url(' + fsolve + ');}');
    var testname = "slider.png"
    fsolver(testname);
    style.append('input[type=range]::-webkit-slider-thumb {background:url(' + fsolve + ');}');
    var testname = "uihide.png"
    fsolver(testname);
    style.append('#sanshide2{background-image:url(' + fsolve + ');}');
    var testname = "uihide2.png"
    fsolver(testname);
    style.append('#sanshide3{background-image:url(' + fsolve + ');}');
    var testname = "volume1.png"
    fsolver(testname);
    style.append('#sansvol{background-image:url(' + fsolve + ');}');
    var testname = "volume2.png"
    fsolver(testname);
    style.append('#sansvolcont:hover #sansvol{background-image:url(' + fsolve + ');}');
    var testname = "volume3.png"
    fsolver(testname);
    style.append('#vol3{background-image:url(' + fsolve + ');}');
    var testname = "volume4.png"
    fsolver(testname);
    style.append('#vol4{background-image:url(' + fsolve + ');}');
    var fstate = 'SansSkin loaded: ' + fcount + ' assets missing.'
    console.log(fstate);
    document.getElementById("foldername").innerHTML = fstate;


};

function clearSkin() {
    skinbox.value = "";
    $("#skincss").empty();
    console.log('SansSkin: skin cleared');
    document.getElementById("foldername").innerHTML = "Select skin folder...";

}



// SCRUBBER JS
// wassup skrub




var audio = document.getElementById('masterplayer');

function calculateTotalValue(length) {
    var hours = Math.floor(length / 3600) % 24,
        minutes = Math.floor(length / 60) % 60,
        seconds_int = length - minutes * 60,
        seconds_str = seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = (hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

    return time;
}

function calculateCurrentValue(currentTime) {
    var current_hour = parseInt(currentTime / 3600) % 24,
        current_minute = parseInt(currentTime / 60) % 60,
        current_seconds_long = currentTime % 60,
        current_seconds = current_seconds_long.toFixed(),
        current_time = (current_hour) + ":" + (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
}

function rtieqTimeUpdateFunc() {
    var length = htmlAudio.duration;
    var current_time = htmlAudio.currentTime;
    var progressvalue = (htmlAudio.currentTime / htmlAudio.duration) || 0;

    // calculate total length of value
    var totalLength = calculateTotalValue(length);
    jQuery(".end-time").html(totalLength);

    // calculate current value time
    var currentTime = calculateCurrentValue(current_time);
    jQuery(".start-time").html(currentTime);

    var progressbar = document.getElementById('seekObj');
    progressbar.value = progressvalue;
    progressbar.addEventListener("click", seek);

    if (htmlAudio.currentTime == htmlAudio.duration) {
        $('#play-btn').removeClass('pause');
    }

    function seek(evt) {
        var percent = evt.offsetX / this.offsetWidth;
        htmlAudio.currentTime = percent * htmlAudio.duration;
        progressbar.value = percent / 100;
    }
};

// Buffer checker

var checkInterval = 200
var lastPlayPos = 0
var currentPlayPos = 0
var bufferingDetected = false

function checkBuffering() {
    currentPlayPos = htmlAudio.currentTime
    var offset = (checkInterval * 0.5) / 1000
    if (
        !bufferingDetected &&
        currentPlayPos < (lastPlayPos + offset) &&
        !htmlAudio.paused
    ) {
        console.log("SansPlayer: Buffering...");
        $('#loaddiv').addClass('loading');
        bufferingDetected = true
    }
    if (
        bufferingDetected &&
        currentPlayPos > (lastPlayPos + offset) &&
        !htmlAudio.paused
    ) {
        console.log("SansPlayer: Not buffering anymore");
        setTimeout(function () {
            $('#loaddiv').removeClass('loading');
        }, 750);
        bufferingDetected = false
    }
    lastPlayPos = currentPlayPos
}




// EQUALIZER JS
// OH MY HECK SO MUCH MATH

updateEQ();

var eqOne = document.getElementById('slidereq1');
var eqTwo = document.getElementById('slidereq2');
var eqcd1 = document.getElementById("rangevaleq1");
var eqcd2 = document.getElementById("rangevaleq2");

eqOne.oninput = function () {
    updateEQ();
}
eqTwo.oninput = function () {
    rtieqBarWidth = eqTwo.value;
    updateEQ();
}

function updateEQ() {
    if (eqval == 1) {
        rtieqBarWidth = 5;
        if ("ontouchstart" in document.documentElement) {
            rtieqBars = 200;
        } else {
            rtieqBars = 200;
        }

    } else if (eqval == 4) {
        rtieqBars = (eqOne.value * 2);
        eqcd1.innerHTML = (eqOne.value * 2);
        eqcd2.innerHTML = eqTwo.value;

    } else {

        if ("ontouchstart" in document.documentElement) {
            rtieqBars = 200;
        } else {
            rtieqBars = 200;
        }
    }
}

pause = 1;
isSeeking = 0;

Cookies.set('start1', 0);
Cookies.set('start2', 0);

var inputbox = document.getElementById('filebutton');
var inputboxtwo = document.getElementById('filebutton2');

$(document).ready(function () {
    var sourcevalue = Cookies.get("source1");
    var yturl = Cookies.get("yturl");
    var yturlold = Cookies.get("yturlold");
    var ytid = Cookies.get("ytid1");
    if (sourcevalue == 4) {
        document.getElementById('ytthumb').style.backgroundImage = 'url(https://img.youtube.com/vi/' + ytid + '/hqdefault.jpg';
        document.getElementById("ytinput").value = yturlold;
        if (ytid !== "undefined") {
            $("#ytdownload").attr("href", 'https://ytdl-back.herokuapp.com/download?quality=MP3&url=' + ytid);
            $('#ytdownload').addClass('active');
        }
    } else {};
});

function initPage() {
    console.log('SansPlayer: Starting player...');
    $("#controlbox").removeClass("active");
    $("#controlbox2").removeClass("active");
    $("#sansadd").removeClass("active");
    $("#sanscount").removeClass("active");
    $("#sansclick").removeClass("active");
    document.body.style.backgroundImage = 'inherit';
    if (windowsize < 1280) {
        $('#controlbox2').removeClass("active");
        $('#controlbox').removeClass("active");
        $('#sansadd').removeClass("active");
        $('#sanscount').removeClass("active");
        $('#sansclick').removeClass("active");
    } else {
        $('#controlbox2').addClass("pin");
        $('#controlbox').addClass("pin");
        $('#sansadd').addClass("pin");
        $('#sanspin').addClass("pin");
        $('#sanscount').addClass("pin");
        $('#sansclick').addClass("pin");

    }

    loadSRC();
    settingsNote();
    // frameDemo();
    convertSpotify();
    loadsplash();
    reloadPlayer();
    Cookies.set('playerstatus', 1);
    setInterval(checkBuffering, checkInterval);
    sansAudioPlay();

    console.log('SansPlayer: Player started sucsessfully');

};

function reloadPlayer() {
    rtieqStart();
    setSpeedValue();
    htmlAudio.setAttribute('loop', 'loop');
}

function sansAudioPlay() {
    rtieqPlay();
    console.log('SansPlayer: Play command sent to player');
}

function sansAudioPause() {
    rtieqPause();
    console.log('SansPlayer: Pause command sent to player');
}

function loadSRC() {

    var themevalue = Cookies.get("sans1");
    var sourcevalue = Cookies.get("source1");
    var yturl = Cookies.get("yturl");
    if (sourcevalue == 4) {
        rtieqURL = yturl;
    } else if (sourcevalue == 3) {
        rtieqURL = "null";
    } else if (sourcevalue == 5) {
        rtieqURL = "null";
    } else {
        if (themevalue == 0) {
            rtieqURL = "../audio/1.mp3";
        } else if (themevalue == 1) {
            rtieqURL = "../audio/2.mp3";
        } else if (themevalue == 2) {
            rtieqURL = "../audio/3.mp3";
        } else if (themevalue == 3) {
            rtieqURL = "../audio/4.mp3";
        } else if (themevalue == 4) {
            rtieqURL = "";
        } else if (themevalue == 5) {
            rtieqURL = "../audio/5.mp3";
        } else if (themevalue == 6) {
            rtieqURL = URL.createObjectURL(inputbox.files[0]);
        } else if (themevalue == 7) {
            rtieqURL = "null";
        } else if (themevalue == 8) {
            rtieqURL = "../audio/6.mp3";
        } else if (themevalue == 9) {
            rtieqURL = "../audio/7.mp3";
        } else if (themevalue == 10) {
            rtieqURL = "../audio/8.mp3";
        }
    }
    if (rtieqURL == null) {
        console.log('SansPlayer: URL placement failed');
    } else {
        console.log('SansPlayer: URL placed');
    }
}

function paste() {
    console.log('fortnite');
}


function loadsplash() {
    $('#masterplayer').on('loadstart', function (event) {
        $('#loaddiv').addClass('loading');
        convertSpotify();
    });
    $('#masterplayer').on('canplay', function (event) {
        setTimeout(function () {
            $('#loaddiv').removeClass('loading');
        }, 750);
    });
};

function convertSpotify() {
    var sourcevalue = Cookies.get("source1");
    if (sourcevalue == 3) {
        $("#rpm22icon").addClass("spotify");
        rpm22icon.css({
            'animation-duration': '0.75s'
        });
        $('#loaddiv').removeClass('loading');
    } else {
        $("#rpm22icon").removeClass("spotify");

    }
}

function initSpotify() {
    Cookies.set('sans1', 7);
    initSpotifyPlayer();
    sansAudioPause();
    rpm22icon.css({
        'animation-duration': '0.75s'
    });
    Cookies.set('playerstatus', 0);
};

function initSpotifyPlayer() {
    var spottoken = Cookies.get("spottoken");
    var spotplayer = new Spotify.Player({
        name: 'sansundertale.cf',
        getOAuthToken: cb => {
            cb(spottoken);
        }
    });

    // Error handling
    spotplayer.addListener('initialization_error', ({
        message
    }) => {
        console.error(message);
    });
    spotplayer.addListener('authentication_error', ({
        message
    }) => {
        console.error(message);
    });
    spotplayer.addListener('account_error', ({
        message
    }) => {
        console.error(message);
    });
    spotplayer.addListener('playback_error', ({
        message
    }) => {
        console.error(message);
    });

    // Playback status updates
    spotplayer.addListener('player_state_changed', state => {
        console.log('SansSpotifyPlayer: ' + state);
    });

    // Ready
    spotplayer.addListener('ready', ({
        device_id
    }) => {
        console.log('SansSpotifyPlayer: Ready with Device ID', device_id);
    });

    // Not Ready
    spotplayer.addListener('not_ready', ({
        device_id
    }) => {
        console.log('SansSpotifyPlayer: Device ID has gone offline', device_id);
    });

    // Connect to player
    spotplayer.connect();

    $(window).keydown(function (e) {
        if (e.which == 32) {
            var startvar = Cookies.get("start1");
            if (startvar == 1) {
                spotplayer.togglePlay().then(() => {
                    console.log('SansSpotifyPlayer: Toggled playback!');
                });
            }
        }
    });

    $("#sanspause").click(function () {
        spotplayer.pause().then(() => {
            console.log('SansSpotifyPlayer: Paused!');
        });
    });

    window.setInterval(function () {
        var spotlogin = Cookies.get("spotlogin");
        if (spotlogin == 0) {
            spotplayer.disconnect();
        }
    }, 250);
};

function initYT() {
    var startvar = Cookies.get("start1");

    var url = $('#ytinput').val();
    var VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    var ytid = url.match(VID_REGEX)[1];
    document.getElementById('ytthumb').style.backgroundImage = 'url(https://img.youtube.com/vi/' + ytid + '/hqdefault.jpg';
    var newurl = 'https://cors.bridged.cc/https://ytdl-back.herokuapp.com/download?quality=MP3&url=' + ytid;
    if (ytid !== "undefined") {
        $("#ytdownload").attr("href", 'https://ytdl-back.herokuapp.com/download?quality=MP3&url=' + ytid);
        $('#ytdownload').addClass('active');
    }
    Cookies.set('yturl', newurl);
    Cookies.set('ytid1', ytid);
    Cookies.set('yturlold', url);
    if (startvar == 1) {
        rtieqURL = newurl;
        reloadPlayer();
        loadsplash();
        sansAudioPlay();
        setSpeedValue();
        Cookies.set('playerstatus', 1);

    };

};


inputbox.onchange = function (e) {
    var path = this.value;
    var filename = path.replace(/^.*\\/, "");
    $("#filename").text('File: ' + filename);
    rtieqURL = URL.createObjectURL(this.files[0]);
    reloadPlayer();
    loadsplash();
    sansAudioPlay();
    setSpeedValue();
    Cookies.set('playerstatus', 1);

}

inputboxtwo.onchange = function (e) {
    var path = this.value;
    var filename = path.replace(/^.*\\/, "");
    $("#filename2").text('File: ' + filename);
    document.getElementById('bgbox').style.backgroundImage = 'url(' + URL.createObjectURL(this.files[0]) + ')';
}

$("#cbl").click(function () {
    document.getElementById('bgbox').style.backgroundImage = 'none';
    $("#filename2").text('Select Image File...');
});

$("#sanspause").click(function () {
    sansAudioPause();
    rpm22icon.css({
        'animation-duration': '0.75s'
    });
    Cookies.set('playerstatus', 0);
    $("#rpm22icon").addClass("pause");
});

$("#sansplay2").click(function () {
    if (spotlogin == 1) {
        spotplayer.resume().then(() => {
            console.log('SansSpotifyPlayer: Resumed!');
        });
    } else {
        sansAudioPlay();
    };
    setSpeedValue();
    Cookies.set('playerstatus', 1);

});

$("#sansbutton0").click(function () {

    rtieqURL = "../audio/1.mp3";
    reloadPlayer();
    loadsplash();
    sansAudioPlay();
    setSpeedValue();
    Cookies.set('playerstatus', 1);

});

$("#sansbutton1").click(function () {

    rtieqURL = "../audio/2.mp3";
    reloadPlayer();
    loadsplash();
    sansAudioPlay();
    setSpeedValue();
    Cookies.set('playerstatus', 1);

});

$("#sansbutton2").click(function () {

    rtieqURL = "../audio/3.mp3";
    reloadPlayer();
    loadsplash();
    sansAudioPlay();
    setSpeedValue();
    Cookies.set('playerstatus', 1);

});

$("#sansbutton3").click(function () {

    rtieqURL = "../audio/4.mp3";
    reloadPlayer();
    loadsplash();
    sansAudioPlay();
    setSpeedValue();
    Cookies.set('playerstatus', 1);

});

$("#sansbutton4").click(function () {

    rtieqURL = "null";
    reloadPlayer();
    loadsplash();
    sansAudioPlay();
    setSpeedValue();
    Cookies.set('playerstatus', 1);

});

$("#sansbutton5").click(function () {

    rtieqURL = "../audio/5.mp3";
    reloadPlayer();
    loadsplash();
    sansAudioPlay();
    setSpeedValue();
    Cookies.set('playerstatus', 1);

});

$("#sansbutton6").click(function () {

    rtieqURL = "../audio/6.mp3";
    reloadPlayer();
    loadsplash();
    sansAudioPlay();
    setSpeedValue();
    Cookies.set('playerstatus', 1);

});

$("#sansbutton7").click(function () {

    rtieqURL = "../audio/7.mp3";
    reloadPlayer();
    loadsplash();
    sansAudioPlay();
    setSpeedValue();
    Cookies.set('playerstatus', 1);

});

$("#sansbutton8").click(function () {

    rtieqURL = "../audio/8.mp3";
    reloadPlayer();
    loadsplash();
    sansAudioPlay();
    setSpeedValue();
    Cookies.set('playerstatus', 1);

});


/**

const times = [];
let fps, fpscalc;

function refreshLoop(analyser) {
    window.requestAnimationFrame((analyser) => {
        const now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) {
            times.shift();
        }
        times.push(now);
        fps = times.length;

        fpscalc = ((fps / 350) + 0.43);
        analyser.smoothingTimeConstant = fpscalc;
        refreshLoop(analyser);
    });
}

**/

$(window).one("keypress", function (e) {
    if (e.which == 32) {
        Cookies.set('start1', 1);
    }
});




$(window).keydown(function (e) {
    if (e.which == 32) {
        var startvar = Cookies.get("start1");
        if (startvar == 0) {
            initPage();
            initClicky();
            setSpeedInital();
            setSpeedValue();
            $("#sanscss").empty();
            $('#sanscss').append('@import url(css/active.css)');
            Cookies.set('start1', 1);

        } else if (startvar == 1) {
            if (htmlAudio.paused) {
                sansAudioPlay();
                setSpeedValue();
                Cookies.set('playerstatus', 1);

            } else {
                sansAudioPause();
                rpm22icon.css({
                    'animation-duration': '0.75s'
                });
                Cookies.set('playerstatus', 0);
                $("#rpm22icon").addClass("pause");
            }
        }
    }
});

var colorSelector = $('#slider2');
var slidercolor = document.getElementById("slider2");
var colorSelectorTwoFive = $('#slider25');
var slidercolorTwoFive = document.getElementById("slider25");
var colorSelectorTwo = $('#slider3');
var slidercolorTwo = document.getElementById("slider3");

slidercolor.oninput = function () {
    setSpeedValue();
    Cookies.set('sans4', colorSelector.val());
    initColorSelect();
}

slidercolorTwoFive.oninput = function () {
    setSpeedValue();
    Cookies.set('sans6', colorSelectorTwoFive.val());
    initColorSelect();
}

slidercolorTwo.oninput = function () {
    setSpeedValue();
    Cookies.set('sans5', colorSelectorTwo.val());
    initColorSelect();
}

$("#u2").click(function () {
    initColorSelect();
});

$("#u1").click(function () {
    removeColorSelect();
});

var gs2;

function initColorSelect() {
    document.getElementById('color2').style.backgroundImage = 'linear-gradient(to right, hsl(' + colorSelector.val() + ', ' + colorSelectorTwoFive.val() + '%, 0%), hsl(' + colorSelector.val() + ', ' + colorSelectorTwoFive.val() + '%, 50%), hsl(' + colorSelector.val() + ', ' + colorSelectorTwoFive.val() + '%, 100%))';
    document.getElementById('color15').style.backgroundImage = 'linear-gradient(to right, hsl(' + colorSelector.val() + ', 0%, ' + colorSelectorTwo.val() + '%), hsl(' + colorSelector.val() + ', 100%, ' + colorSelectorTwo.val() + '%))';
    document.getElementById('color').style.backgroundImage = 'linear-gradient(to right, hsl(0, ' + colorSelectorTwoFive.val() + '%, ' + colorSelectorTwo.val() + '%), hsl(60, ' + colorSelectorTwoFive.val() + '%, ' + colorSelectorTwo.val() + '%), hsl(120, ' + colorSelectorTwoFive.val() + '%, ' + colorSelectorTwo.val() + '%), hsl(180, ' + colorSelectorTwoFive.val() + '%, ' + colorSelectorTwo.val() + '%), hsl(240, ' + colorSelectorTwoFive.val() + '%, ' + colorSelectorTwo.val() + '%), hsl(300, ' + colorSelectorTwoFive.val() + '%, ' + colorSelectorTwo.val() + '%), hsl(360, ' + colorSelectorTwoFive.val() + '%, ' + colorSelectorTwo.val() + '%))';
    document.getElementById('color3').style.background = 'hsl(' + colorSelector.val() + ', ' + colorSelectorTwoFive.val() + '%, ' + colorSelectorTwo.val() + '%)';
    rtieqHue = colorSelector.val();
    rtieqSat = colorSelectorTwoFive.val();
    rtieqBright = colorSelectorTwo.val();
    gs2 = Cookies.get("gs2");
    if (gs2 == 1) {
        var startvar = Cookies.get("start1");
        if (startvar == 0) {
            document.body.style.backgroundImage = 'linear-gradient(45deg, hsl(' + colorSelector.val() + ', 91%, 5%) 0%, hsl(' + colorSelector.val() + ', 98%, 22%) 100%)';
        } else {
            document.body.style.backgroundImage = 'inherit';
        };
        document.getElementById('changelogstart').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('sansplay').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('sansplay2').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('sanspause').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('sanspin').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('sansadd').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('sanscount').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('sansclick').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('settingscheck').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('sanshide').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('sanshide2').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('settingsmenu').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('sans').style.filter = 'hue-rotate(' + (colorSelector.val() - 180) + 'deg)';
        document.getElementById('mover').style.background = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('c1').style.color = 'hsl(' + colorSelector.val() + ', 100%, 35%)';
        document.getElementById('c2').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('c3').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('c4').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('c5').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('c6').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('c7').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('c8').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('c9').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('sl1').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('cbl').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('filename').style.color = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
        document.getElementById('loaddiv').style.background = 'hsl(' + colorSelector.val() + ', 100%, 35%)';
        document.getElementById('mover').style.background = 'hsl(' + colorSelector.val() + ', 100%, 35%)';
    } else {
        document.body.style.backgroundImage = 'linear-gradient(45deg, rgb(1, 24, 24) 0%, rgb(1, 109, 111) 100%)';
    }

};

function removeColorSelect() {
    document.body.style.backgroundImage = 'linear-gradient(45deg, rgb(1, 24, 24) 0%, rgb(1, 109, 111) 100%)';
    document.getElementById('changelogstart').style.filter = 'hue-rotate(0deg)';
    document.getElementById('sansplay').style.filter = 'hue-rotate(0deg)';
    document.getElementById('sansplay2').style.filter = 'hue-rotate(0deg)';
    document.getElementById('sanspause').style.filter = 'hue-rotate(0deg)';
    document.getElementById('sanspin').style.filter = 'hue-rotate(0deg)';
    document.getElementById('sansadd').style.filter = 'hue-rotate(0deg)';
    document.getElementById('sanscount').style.filter = 'hue-rotate(0deg)';
    document.getElementById('sansclick').style.filter = 'hue-rotate(0deg)';
    document.getElementById('settingscheck').style.filter = 'hue-rotate(0deg)';
    document.getElementById('sanshide').style.filter = 'hue-rotate(0deg)';
    document.getElementById('sanshide2').style.filter = 'hue-rotate(0deg)';
    document.getElementById('settingsmenu').style.filter = 'hue-rotate(0deg)';
    document.getElementById('sans').style.filter = 'hue-rotate(0deg)';
    document.getElementById('mover').style.background = 'hsl(' + colorSelector.val() + ', 100%, 50%)';
    document.getElementById('c1').style.color = '#0ff';
    document.getElementById('c2').style.color = '#0ff';
    document.getElementById('c3').style.color = '#0ff';
    document.getElementById('c4').style.color = '#0ff';
    document.getElementById('c5').style.color = '#0ff';
    document.getElementById('c6').style.color = '#0ff';
    document.getElementById('c7').style.color = '#0ff';
    document.getElementById('c8').style.color = '#0ff';
    document.getElementById('c9').style.color = '#0ff';
    document.getElementById('sl1').style.color = '#0ff';
    document.getElementById('cbl').style.color = '#0ff';
    document.getElementById('filename').style.color = '#0ff';
    document.getElementById('loaddiv').style.background = '#0ff';
    document.getElementById('mover').style.background = '#0ff';
};

var bruh;
var colorval = Cookies.get("sans4");
var colorval2 = Cookies.get("sans5");
var colorval3 = Cookies.get("sans6");
var rtieqRainbow = Cookies.get("rs1");
bruh = 0;

$("#r1").click(function () {
    rtieqRainbow = 0;
});
$("#r2").click(function () {
    rtieqRainbow = 1;
});

/** EQ TRIM ADJUSTMENTS **/

var eqtlr, eqtud;
eqtlr = 0;
eqtud = 0;

var eqtd1 = document.getElementById("eqtd1");
var eqtd2 = document.getElementById("eqtd2");

$("#eqtt1").click(function () {
    if (eqtud < 10) {
        eqtud += 1;
    } else {
        eqtud == 10;
    }
    eqtd2.innerHTML = eqtud;
});

$("#eqtt2").click(function () {
    if (eqtlr > -10) {
        eqtlr -= 1;
    } else {
        eqtlr == 10;
    }
    eqtd1.innerHTML = eqtlr;
});

$("#eqtt3").click(function () {
    if (eqtud > -10) {
        eqtud -= 1;
    } else {
        eqtud == 10;
    }
    eqtd2.innerHTML = eqtud;
});

$("#eqtt4").click(function () {
    if (eqtlr < 10) {
        eqtlr += 1;
    } else {
        eqtlr == 10;
    }
    eqtd1.innerHTML = eqtlr;
});

function frameDemo() {
    canvas2.width = 300;
    canvas2.height = 300;
    var eqvalue = Cookies.get("eq1");

    if (eqvalue == 0) {

        react_x = 0;
        react_y = 0;
        intensity = 0;

        for (var i = 0; i < bars2; i++) {
            scaler = 500;
            scaler2 = 200;

            rads = Math.PI * -2 / (bars2 / 2);
            rads2 = Math.PI * 2 / (bars2 / 2);
            bar2_x = center_x2;
            bar2_y = center_y2;

            if (i % 2 == 0) {
                bar2_height = Math.min(99999, Math.max((fbc_array[i * 1 + 5] * scaler2 - 50), 0)) / scaler - 25;
                bar2_height2 = Math.min(99999, Math.max((fbc_array[(i * 1 - ((bars2 * 1) / 2)) + 5] * scaler2 - 50), 0)) / scaler - 25;
            } else {
                bar2_height = ((Math.min(99999, Math.max((fbc_array[(i - 1) * 1 + 5] * scaler2 - 50), 0)) / scaler - 25) + (Math.min(99999, Math.max((fbc_array[(i + 1) * 1 + 5] * scaler2 - 50), 0)) / scaler - 25)) / 2;
                bar2_height2 = ((Math.min(99999, Math.max((fbc_array[((i - 1) * 1 - ((bars2 * 1) / 2)) + 5] * scaler2 - 50), 0)) / scaler - 25) + (Math.min(99999, Math.max((fbc_array[((i + 1) * 1 - ((bars2 * 1) / 2)) + 5] * scaler2 - 50), 0)) / scaler - 25)) / 2;
            }
            bar2_width = 3;

            if (eqval == 4) {
                bar2_width = (eqTwo.value / 3.333);

            }

            bar2_x_term = center_x2 + Math.cos(rads / 2 * i - 1.55) * (radius + bar2_height);
            bar2_y_term = center_y2 + Math.sin(rads / 2 * i - 1.55) * (radius + bar2_height);
            bar2_x_term2 = center_x2 - Math.cos(rads2 / 2 * i - 1.55) * (radius + bar2_height2);
            bar2_y_term2 = center_y2 - Math.sin(rads2 / 2 * i - 1.55) * (radius + bar2_height2);

            ctx2.save();


            var linecolor, linecolor2;

            if (rainbow == 1) {
                lineColor = "hsl(" + ((i * 1.8 + bruh) / (bars2 / 200)) + ", 100%, 50%)";
                lineColor2 = "hsl(" + ((i * -1.8 + bruh) / (bars2 / 200) - 180) + ", 100%, 50%)";
            } else {
                lineColor = "hsl(" + (colorSelector.val() - i / 6) + ", " + colorSelectorTwoFive.val() + "%, " + colorSelectorTwo.val() + "%)";
                lineColor2 = "hsl(" + (colorSelector.val() - (i - (bars2 / 2)) / 6) + ", " + colorSelectorTwoFive.val() + "%, " + colorSelectorTwo.val() + "%)";
            }

            if (threeCheck == 1) {
                if (i <= (bars2 / 2)) {
                    ctx2.strokeStyle = lineColor;
                    ctx2.lineWidth = bar2_width;
                    ctx2.beginPath();
                    ctx2.lineTo((mX * (300 / canvas.width)), (mY * (300 / canvas.height)));
                    ctx2.lineTo(bar2_x_term, bar2_y_term);
                    ctx2.stroke();
                } else {
                    ctx2.strokeStyle = lineColor2;
                    ctx2.lineWidth = bar2_width;
                    ctx2.beginPath();
                    ctx2.lineTo((mX * (300 / canvas.width)), (mY * (300 / canvas.height)));
                    ctx2.lineTo(bar2_x_term2, bar2_y_term2);
                    ctx2.stroke();
                }
            } else {
                if (i <= (bars2 / 2)) {
                    ctx2.strokeStyle = lineColor;
                    ctx2.lineWidth = (bar2_width * 1);
                    ctx2.beginPath();
                    ctx2.lineTo(bar2_x, bar2_y);
                    ctx2.lineTo(bar2_x_term, bar2_y_term);
                    ctx2.stroke();
                } else {
                    ctx2.strokeStyle = lineColor2;
                    ctx2.lineWidth = (bar2_width * 1);
                    ctx2.beginPath();
                    ctx2.lineTo(bar2_x, bar2_y);
                    ctx2.lineTo(bar2_x_term2, bar2_y_term2);
                    ctx2.stroke();
                }
            }


            react_x += Math.cos(rads * i) * (radius + bar2_height);
            react_y += Math.sin(rads * i) * (radius + bar2_height);

            intensity = Math.round(bar2_height);
        }

        center_x2 = canvas2.width / 2;
        center_y2 = canvas2.height / 2;

        radius_old = radius;
        radius = 30 + (intensity * 0.075);

        deltarad = radius - radius_old;

        ctx2.fillStyle = "rgb(255, 255, 255)";
        ctx2.beginPath();
        ctx2.arc(center_x2, center_y2, radius * 2 + 2, 0, Math.PI * 2, false);
        ctx2.fill();

        ctx2.fillStyle = "rgb(0, 0, 0)";
        ctx2.beginPath();
        ctx2.arc(center_x2, center_y2, radius * 0.9 * 2 + 2, 0, Math.PI * 2, false);
        ctx2.fill();
    }
};

// fake loading text lol

console.log('~ SCRIPT.JS LOADED');
loadtext.innerHTML = 'main CSS file';
setTimeout(function () {
    loadtext.innerHTML = 'main JS file';
    setTimeout(function () {
        loadtext.innerHTML = 'RTICDN media files';
        setTimeout(function () {
            loadtext.innerHTML = 'CDN script library';
            setTimeout(function () {
                loadtext.innerHTML = 'main player content';
                setTimeout(function () {
                    loadtext.innerHTML = 'RTI EQ API';
                    setTimeout(function () {
                        loadtext.innerHTML = 'user settings';
                        setTimeout(function () {
                            loadtext.innerHTML = 'start page content';
                        }, 50);
                    }, 50);
                }, 200);
            }, 400);
        }, 150);
    }, 100);
}, 200);

// note to self to clean this shit up at some point
// :tm:
