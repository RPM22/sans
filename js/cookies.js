// sansundertale.cf COOKIES SCRIPT
// use cookie clicker to make more cookies

// html loader thing


// ok the actual cookies now
var themevalue = $.cookie("sans1");
var themevalue2 = $.cookie("sans2");
var eqvalue = $.cookie("eq1");
var keyvalue = $.cookie("key1");
var sourcevalue = $.cookie("source1");
var ytvalue = $.cookie("ytshow");
var setval = $.cookie("setvalue");
var gs1 = $.cookie("gs1");
var gs2 = $.cookie("gs2");
var rs1 = $.cookie("rs1");
var threedshoww = $.cookie("3dshow");
var oldval = $.cookie("sanscount");
var auto = document.getElementById("stitle4");
var colorchangetext = document.getElementById("stitle22");

$(document).ready(function () {
    $(document).scrollTop(0);

    jQuery.cookie('connected', 0, {
        expires: 365,
        path: '/'
    });

    if (typeof $.cookie('gs1') === 'undefined') {
        jQuery.cookie('gs1', 0, {
            expires: 365,
            path: '/'
        });
    }
    if (typeof $.cookie('gs2') === 'undefined') {
        jQuery.cookie('gs2', 1, {
            expires: 365,
            path: '/'
        });
    }
    if (typeof $.cookie('ytshow') === 'undefined') {
        jQuery.cookie('ytshow', 0, {
            expires: 365,
            path: '/'
        });
    }
    if (typeof $.cookie('3dshow') === 'undefined') {
        jQuery.cookie('3dshow', 0, {
            expires: 365,
            path: '/'
        });
    }
    if (typeof $.cookie('sanscount') === 'undefined') {
        jQuery.cookie('sanscount', 1, {
            expires: 365,
            path: '/'
        });
    }
    if (typeof $.cookie('eq1') === 'undefined') {
        jQuery.cookie('eq1', 0, {
            expires: 365,
            path: '/'
        });
    }
    if (typeof $.cookie('source1') === 'undefined') {
        jQuery.cookie('source1', 0, {
            expires: 365,
            path: '/'
        });
    }
    if (typeof $.cookie('rs1') === 'undefined') {
        jQuery.cookie('rs1', 0, {
            expires: 365,
            path: '/'
        });
    }

    jQuery.cookie('spotlogin', 0);
    jQuery.cookie('spotload', 0);
    jQuery.cookie('setvalue', 0, {
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
    jQuery.cookie('rs1', 0, {
        expires: 365,
        path: '/'
    });
    $('#r11').addClass('off');
    $('#r22').addClass('off');
    $('#rs').addClass('off');
    $('#rs').removeClass('on');
});

$("#r2").click(function () {
    jQuery.cookie('rs1', 1, {
        expires: 365,
        path: '/'
    });
    $('#r11').removeClass('off');
    $('#r22').removeClass('off');
    $('#rs').addClass('on');
    $('#rs').removeClass('off');
});

$("#h1").click(function () {
    jQuery.cookie('gs1', 0, {
        expires: 365,
        path: '/'
    });
    $('#h11').addClass('off');
    $('#h22').addClass('off');
    $('#hs').addClass('off');
    $('#hs').removeClass('on');
});

$("#h2").click(function () {
    jQuery.cookie('gs1', 1, {
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
    jQuery.cookie('gs2', 0, {
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
    jQuery.cookie('gs2', 1, {
        expires: 365,
        path: '/'
    });
    $('#u11').removeClass('off');
    $('#u22').removeClass('off');
    $('#us').addClass('on');
    $('#us').removeClass('off');
});

$("#nintendo3d1").click(function () {
    jQuery.cookie('3dshow', 0, {
        expires: 365,
        path: '/'
    });
    $('#nintendo3d11').addClass('off');
    $('#nintendo3d22').addClass('off');
    $('#nintendo3ds').addClass('off');
    $('#nintendo3ds').removeClass('on');
});

$("#nintendo3d2").click(function () {
    jQuery.cookie('3dshow', 1, {
        expires: 365,
        path: '/'
    });
    $('#nintendo3d11').removeClass('off');
    $('#nintendo3d22').removeClass('off');
    $('#nintendo3ds').addClass('on');
    $('#nintendo3ds').removeClass('off');
});

$("#eqbutton2").click(function () {
    jQuery.cookie('eq1', 0, {
        expires: 365,
        path: '/'
    });
    $("#eqcss").empty();
    $('#eqcss').append('@import url(css/eq1.css)');
});

$("#eqbutton1").click(function () {
    jQuery.cookie('eq1', 1, {
        expires: 365,
        path: '/'
    });
    $("#eqcss").empty();
    $('#eqcss').append('@import url(css/eq2.css)');
});

$("#keybutton1").click(function () {
    jQuery.cookie('key1', 0, {
        expires: 365,
        path: '/'
    });
    $("#keycss").empty();
    $('#keycss').append('@import url(css/key1.css)');
});

$("#keybutton2").click(function () {
    jQuery.cookie('key1', 1, {
        expires: 365,
        path: '/'
    });
    $("#keycss").empty();
    $('#keycss').append('@import url(css/key2.css)');
});

$("#sansbutton0").click(function () {
    jQuery.cookie('sans1', 0, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton1").click(function () {
    jQuery.cookie('sans1', 1, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton2").click(function () {
    jQuery.cookie('sans1', 2, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton3").click(function () {
    jQuery.cookie('sans1', 3, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton4").click(function () {
    jQuery.cookie('sans1', 4, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton5").click(function () {
    jQuery.cookie('sans1', 5, {
        expires: 365,
        path: '/'
    });
});

$("#filebutton").click(function () {
    jQuery.cookie('sans1', 6, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton6").click(function () {
    jQuery.cookie('sans1', 8, {
        expires: 365,
        path: '/'
    });
});

$("#sansbutton7").click(function () {
    jQuery.cookie('sans1', 9, {
        expires: 365,
        path: '/'
    });
});


$("#sansbutton8").click(function () {
    jQuery.cookie('sans1', 10, {
        expires: 365,
        path: '/'
    });
});

$("#content1").click(function () {
    jQuery.cookie('ytshow', 0, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").removeClass("show");
    ytoff();
    jQuery.cookie('source1', 1, {
        expires: 365,
        path: '/'
    });
});

$("#content2").click(function () {
    var ytvalue = $.cookie("ytshow");
    if (ytvalue == 1) {
        $("#masterplayer").addClass("show");
        yton();
    }

    if (ytvalue == 2) {
        $("#masterplayer").removeClass("show");
        ytoff();
    }
    jQuery.cookie('source1', 2, {
        expires: 365,
        path: '/'
    });
});

$("#content3").click(function () {
    jQuery.cookie('ytshow', 0);
    $("#masterplayer").removeClass("show");
    ytoff();
    jQuery.cookie('source1', 3, {
        expires: 365,
        path: '/'
    });
});

$("#content4").click(function () {
    var ytvalue = $.cookie("ytshow");
    if (ytvalue == 1) {
        $("#masterplayer").addClass("show");
        yton();
    }

    if (ytvalue == 2) {
        $("#masterplayer").removeClass("show");
        ytoff();
    }
    jQuery.cookie('source1', 4, {
        expires: 365,
        path: '/'
    });
});

$("#content5").click(function () {
    jQuery.cookie('ytshow', 0, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").removeClass("show");
    ytoff();
    jQuery.cookie('source1', 5, {
        expires: 365,
        path: '/'
    });
});

$("#ytbutton1").click(function () {
    jQuery.cookie('ytshow', 1, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").addClass("show");
    yton();
});

$("#ytbutton2").click(function () {
    jQuery.cookie('ytshow', 2, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").removeClass("show");
    ytoff();
});

$("#ytbutton11").click(function () {
    jQuery.cookie('ytshow', 1, {
        expires: 365,
        path: '/'
    });
    $("#masterplayer").addClass("show");
    yton();
});

$("#ytbutton22").click(function () {
    jQuery.cookie('ytshow', 2, {
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
