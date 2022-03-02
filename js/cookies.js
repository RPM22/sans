// sansundertale.cf COOKIES SCRIPT
// use cookie clicker to make more cookies

// html loader thing


// ok the actual cookies now
var themevalue = Cookies.get("sans1");
var themevalue2 = Cookies.get("sans2");
var eqvalue = Cookies.get("eq1");
var keyvalue = Cookies.get("key1");
var sourcevalue = Cookies.get("source1");
var ytvalue = Cookies.get("ytshow");
var setval = Cookies.get("setvalue");
var gs1 = Cookies.get("gs1");
var gs2 = Cookies.get("gs2");
var rs1 = Cookies.get("rs1");
var threedshoww = Cookies.get("3dshow");
var oldval = Cookies.get("sanscount");
var auto = document.getElementById("stitle4");
var colorchangetext = document.getElementById("stitle22");

$(document).ready(function () {
    $(document).scrollTop(0);
    if (typeof Cookies.get('connected') === 'undefined') {
        Cookies.set('connected', '0', {
            expires: 365,
            path: '/'
        })
    };
    if (typeof Cookies.get('gs1') === 'undefined') {
        Cookies.set('gs1', '0', {
            expires: 365,
            path: '/'
        })
    };
    if (typeof Cookies.get('gs2') === 'undefined') {
        Cookies.set('gs2', '1', {
            expires: 365,
            path: '/'
        })
    };
    if (typeof Cookies.get('ytshow') === 'undefined') {
        Cookies.set('ytshow', '0', {
            expires: 365,
            path: '/'
        })
    };
    if (typeof Cookies.get('3dshow') === 'undefined') {
        Cookies.set('3dshow', '0', {
            expires: 365,
            path: '/'
        })
    };
    if (typeof Cookies.get('sanscount') === 'undefined') {
        Cookies.set('sanscount', '1', {
            expires: 365,
            path: '/'
        })
    };
    if (typeof Cookies.get('eq1') === 'undefined') {
        Cookies.set('eq1', 0, {
            expires: 365,
            path: '/'
        });
    }
    if (typeof Cookies.get('source1') === 'undefined') {
        Cookies.set('source1', 0, {
            expires: 365,
            path: '/'
        });
    }
    if (typeof Cookies.get('rs1') === 'undefined') {
        Cookies.set('rs1', 0, {
            expires: 365,
            path: '/'
        });
    }

    Cookies.set('spotlogin', 0);
    Cookies.set('spotload', 0);
    Cookies.set('setvalue', 0, {
        expires: 365,
        path: '/'
    });
    auto.innerHTML = oldval;

    if (rs1 == 0) {
        $('#r11').addClass('off');
        $('#r22').addClass('off');
        $('#rs').addClass('off');
        $('#rs').removeClass('on');
    }

    if (rs1 == 1) {
        $('#r11').removeClass('off');
        $('#r22').removeClass('off');
        $('#rs').addClass('on');
        $('#rs').removeClass('off');
    }
    if (gs1 == 0) {
        $('#h11').addClass('off');
        $('#h22').addClass('off');
        $('#hs').addClass('off');
        $('#hs').removeClass('on');
    }

    if (gs1 == 1) {
        $('#h11').removeClass('off');
        $('#h22').removeClass('off');
        $('#hs').addClass('on');
        $('#hs').removeClass('off');
    }

    if (gs2 == 0) {
        colorchangetext.innerHTML = ("EQ color (HSL):");
        $('#u11').addClass('off');
        $('#u22').addClass('off');
        $('#us').addClass('off');
        $('#us').removeClass('on');
    }

    if (gs2 == 1) {
        colorchangetext.innerHTML = ("EQ &amp; UI color (HSL):");
        $('#u11').removeClass('off');
        $('#u22').removeClass('off');
        $('#us').addClass('on');
        $('#us').removeClass('off');
    }

    if (threedshoww == 0) {
        $('#nintendo3d11').addClass('off');
        $('#nintendo3d22').addClass('off');
        $('#nintendo3ds').addClass('off');
        $('#nintendo3ds').removeClass('on');
    }

    if (threedshoww == 1) {
        $('#nintendo3d11').removeClass('off');
        $('#nintendo3d22').removeClass('off');
        $('#nintendo3ds').addClass('on');
        $('#nintendo3ds').removeClass('off');
    }

    if (eqvalue == 0) {
        $("#eqcss").empty();
        $('#eqcss').append('@import url(css/eq1.css)');
    }

    if (eqvalue == 1) {
        $("#eqcss").empty();
        $('#eqcss').append('@import url(css/eq2.css)');
    }

    if (keyvalue == 0) {
        $("#keycss").empty();
        $('#keycss').append('@import url(css/key1.css)');
    }

    if (keyvalue == 1) {
        $("#keycss").empty();
        $('#keycss').append('@import url(css/key2.css)');
    }

    if (themevalue == 0) {
        $("#songcss").empty();
        $('#songcss').append('@import url(css/song/1.css)');
    }

    if (themevalue == 1) {
        $("#songcss").empty();
        $('#songcss').append('@import url(css/song/2.css)');
    }

    if (themevalue == 2) {
        $("#songcss").empty();
        $('#songcss').append('@import url(css/song/3.css)');
    }

    if (themevalue == 3) {
        $("#songcss").empty();
        $('#songcss').append('@import url(css/song/4.css)');
    }

    if (themevalue == 4) {
        $("#songcss").empty();
        $('#songcss').append('@import url(css/song/5.css)');
    }

    if (themevalue == 5) {
        $("#songcss").empty();
        $('#songcss').append('@import url(css/song/6.css)');
    }

    if (themevalue == 6) {
        $("#songcss").empty();
        $('#songcss').append('@import url(css/song/7.css)');
    }

    if (themevalue == 8) {
        $("#songcss").empty();
        $('#songcss').append('@import url(css/song/9.css)');
    }

    if (sourcevalue == 1) {
        $("#sourcecss").empty();
        $('#sourcecss').append('@import url(css/source1.css)');
    }

    if (sourcevalue == 2) {
        $("#sourcecss").empty();
        $('#sourcecss').append('@import url(css/source2.css)');
    }

    if (sourcevalue == 3) {
        $("#sourcecss").empty();
        $('#sourcecss').append('@import url(css/source3.css)');
    }

    if (sourcevalue == 4) {
        $("#sourcecss").empty();
        $('#sourcecss').append('@import url(css/source4.css)');

        if (ytvalue == 1) {
            $("#masterplayer").addClass("show");
            yton();
        }

        if (ytvalue == 2) {
            $("#masterplayer").removeClass("show");
            ytoff();
        }
    }

    if (sourcevalue == 5) {
        $("#sourcecss").empty();
        $('#sourcecss').append('@import url(css/source5.css)');
    }

    if (ytvalue == 0) {
        $("#masterplayer").removeClass("show");
        ytoff();
    }
});

$("#r1").click(function () {
    Cookies.set('rs1', 0, {
        expires: 365,
        path: '/'
    });
    $('#r11').addClass('off');
    $('#r22').addClass('off');
    $('#rs').addClass('off');
    $('#rs').removeClass('on');
});

$("#r2").click(function () {
    Cookies.set('rs1', 1, {
        expires: 365,
        path: '/'
    });
    $('#r11').removeClass('off');
    $('#r22').removeClass('off');
    $('#rs').addClass('on');
    $('#rs').removeClass('off');
});

$("#h1").click(function () {
    Cookies.set('gs1', 0, {
        expires: 365,
        path: '/'
    });
    $('#h11').addClass('off');
    $('#h22').addClass('off');
    $('#hs').addClass('off');
    $('#hs').removeClass('on');
});

$("#h2").click(function () {
    Cookies.set('gs1', 1, {
        expires: 365,
        path: '/'
    });
    $('#h11').removeClass('off');
    $('#h22').removeClass('off');
    $('#hs').addClass('on');
    $('#hs').removeClass('off');
});

$("#u1").click(function () {
    colorchangetext.innerHTML = ("EQ color (HSL):");
    Cookies.set('gs2', 0, {
        expires: 365,
        path: '/'
    });
    $('#u11').addClass('off');
    $('#u22').addClass('off');
    $('#us').addClass('off');
    $('#us').removeClass('on');
});

$("#u2").click(function () {
    colorchangetext.innerHTML = ("EQ &amp; UI color (HSL):");
    Cookies.set('gs2', 1, {
        expires: 365,
        path: '/'
    });
    $('#u11').removeClass('off');
    $('#u22').removeClass('off');
    $('#us').addClass('on');
    $('#us').removeClass('off');
});

$("#nintendo3d1").click(function () {
    Cookies.set('3dshow', 0, {
        expires: 365,
        path: '/'
    });
    $('#nintendo3d11').addClass('off');
    $('#nintendo3d22').addClass('off');
    $('#nintendo3ds').addClass('off');
    $('#nintendo3ds').removeClass('on');
});

$("#nintendo3d2").click(function () {
    Cookies.set('3dshow', 1, {
        expires: 365,
        path: '/'
    });
    $('#nintendo3d11').removeClass('off');
    $('#nintendo3d22').removeClass('off');
    $('#nintendo3ds').addClass('on');
    $('#nintendo3ds').removeClass('off');
});

$("#eqbutton2").click(function () {
    Cookies.set('eq1', 0, {
        expires: 365,
        path: '/'
    });
    $("#eqcss").empty();
    $('#eqcss').append('@import url(css/eq1.css)');
});

$("#eqbutton1").click(function () {
    Cookies.set('eq1', 1, {
        expires: 365,
        path: '/'
    });
    $("#eqcss").empty();
    $('#eqcss').append('@import url(css/eq2.css)');
});

$("#keybutton1").click(function () {
    Cookies.set('key1', 0, {
        expires: 365,
        path: '/'
    });
    $("#keycss").empty();
    $('#keycss').append('@import url(css/key1.css)');
});

$("#keybutton2").click(function () {
    Cookies.set('key1', 1, {
        expires: 365,
        path: '/'
    });
    $("#keycss").empty();
    $('#keycss').append('@import url(css/key2.css)');
});

$("#sansbutton0").click(function () {
    Cookies.set('sans1', 0, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton1").click(function () {
    Cookies.set('sans1', 1, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton2").click(function () {
    Cookies.set('sans1', 2, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton3").click(function () {
    Cookies.set('sans1', 3, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton4").click(function () {
    Cookies.set('sans1', 4, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton5").click(function () {
    Cookies.set('sans1', 5, {
        expires: 365,
        path: '/'
    });
});

$("#filebutton").click(function () {
    Cookies.set('sans1', 6, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton6").click(function () {
    Cookies.set('sans1', 8, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton7").click(function () {
    Cookies.set('sans1', 9, {
        expires: 365,
        path: '/'
    });
});


$("#sansbutton8").click(function () {
    Cookies.set('sans1', 10, {
        expires: 365,
        path: '/'
    });
});

$("#content1").click(function () {
    Cookies.set('ytshow', 0, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").removeClass("show");
    ytoff();
    Cookies.set('source1', 1, {
        expires: 365,
        path: '/'
    });
});

$("#content2").click(function () {
    var ytvalue = Cookies("ytshow");
    if (ytvalue == 1) {
        $("#masterplayer").addClass("show");
        yton();
    }

    if (ytvalue == 2) {
        $("#masterplayer").removeClass("show");
        ytoff();
    }
    Cookies.set('source1', 2, {
        expires: 365,
        path: '/'
    });
});

$("#content3").click(function () {
    Cookies.set('ytshow', 0);
    $("#masterplayer").removeClass("show");
    ytoff();
    Cookies.set('source1', 3, {
        expires: 365,
        path: '/'
    });
});

$("#content4").click(function () {
    var ytvalue = Cookies("ytshow");
    if (ytvalue == 1) {
        $("#masterplayer").addClass("show");
        yton();
    }

    if (ytvalue == 2) {
        $("#masterplayer").removeClass("show");
        ytoff();
    }
    Cookies.set('source1', 4, {
        expires: 365,
        path: '/'
    });
});

$("#content5").click(function () {
    Cookies.set('ytshow', 0, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").removeClass("show");
    ytoff();
    Cookies.set('source1', 5, {
        expires: 365,
        path: '/'
    });
});

$("#ytbutton1").click(function () {
    Cookies.set('ytshow', 1, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").addClass("show");
    yton();
});

$("#ytbutton2").click(function () {
    Cookies.set('ytshow', 2, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").removeClass("show");
    ytoff();
});

$("#ytbutton11").click(function () {
    Cookies.set('ytshow', 1, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").addClass("show");
    yton();
});

$("#ytbutton22").click(function () {
    Cookies.set('ytshow', 2, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").removeClass("show");
    ytoff();
});

function ytoff() {
    $('#yvs').addClass('off');
    $('#yv1').addClass('off');
    $('#yv2').addClass('off');
    $('#yvss').addClass('off');
    $('#yv11').addClass('off');
    $('#yv22').addClass('off');

}

function yton() {
    $('#yvs').removeClass('off');
    $('#yv1').removeClass('off');
    $('#yv2').removeClass('off');
    $('#yvss').removeClass('off');
    $('#yv11').removeClass('off');
    $('#yv22').removeClass('off');

}

// if (goingToCrashIntoEachOther) {
//     dont();
// }
