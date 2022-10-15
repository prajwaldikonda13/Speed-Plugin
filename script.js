$(document).ready(function () {
    //$("body").append("<div id='snackbar'>Notification here.</div><div id='wrapper'></div>");
    //$("#wrapper").on("dblclick", function () {
    //    $("video")[0].requestFullscreen();
    //});
    $(window).bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            //alert('scrolled up');
            document.getElementsByTagName("video")[0].currentTime += 2;

        } else {
            //alert('scrolled down');
            document.getElementsByTagName("video")[0].currentTime -= 2;

        }
    });
});
window.onkeypress = function (e)
{
    //e.preventDefault()
    // alert(e.keyCode + '')

     if (e.keyCode == 43) {
        document.getElementsByTagName("video")[0].currentTime += 1;
    }
    else if (e.keyCode == 45) {
        document.getElementsByTagName("video")[0].currentTime -= 1;
    }
}
window.onkeyup = function (e) {
     //alert(e.keyCode + '')
    //97 115 100
    if (e.keyCode == 49 || e.keyCode == 65) {
        document.getElementsByTagName("video")[0].playbackRate = 1
        $("#snackbar").text("Current Speed : 1")
    }
    else if (e.keyCode == 50 || e.keyCode == 83) {
        document.getElementsByTagName("video")[0].playbackRate = 2
        $("#snackbar").text("Current Speed : 2")

    }
    else if (e.keyCode == 51 || e.keyCode == 68) {
        document.getElementsByTagName("video")[0].playbackRate = 3
        $("#snackbar").text("Current Speed : 3")


    }
    else if (e.keyCode == 52) {
        document.getElementsByTagName("video")[0].playbackRate = 4
        $("#snackbar").text("Current Speed : 4")


    }
    else if (e.keyCode == 53) {
        document.getElementsByTagName("video")[0].playbackRate = 5
        $("#snackbar").text("Current Speed : 5")


    }
    else if (e.keyCode == 54) {
        document.getElementsByTagName("video")[0].playbackRate = 6
        $("#snackbar").text("Current Speed : 6")


    }
    else if (e.keyCode == 55) {
        document.getElementsByTagName("video")[0].playbackRate = 7
        $("#snackbar").text("Current Speed : 7")


    }
    else if (e.keyCode == 56) {
        document.getElementsByTagName("video")[0].playbackRate = 8
        $("#snackbar").text("Current Speed : 8")


    }
    else if (e.keyCode == 57) {
        document.getElementsByTagName("video")[0].playbackRate = 9
        $("#snackbar").text("Current Speed : 9")


    }
    else if (e.keyCode == 58) {
        document.getElementsByTagName("video")[0].playbackRate = 0
        $("#snackbar").text("Current Speed : 0")


    }

    else if (e.keyCode == 81) {
        document.getElementsByTagName("video")[0].playbackRate = 1.5
        $("#snackbar").text("Current Speed : 1.5")


    }
    else if (e.keyCode == 87) {
        document.getElementsByTagName("video")[0].playbackRate = 2.5
        $("#snackbar").text("Current Speed : 2.5")


    }
    else if (e.keyCode == 69) {
        document.getElementsByTagName("video")[0].playbackRate = 3.5
        $("#snackbar").text("Current Speed : 3.5")


    }
    else if (e.keyCode == 82) {
        document.getElementsByTagName("video")[0].playbackRate = 4.5
        $("#snackbar").text("Current Speed : 4.5")


    }
    else if (e.keyCode == 84) {
        document.getElementsByTagName("video")[0].playbackRate = 5.5
        $("#snackbar").text("Current Speed : 5.5")


    }
    else if (e.keyCode == 89) {
        document.getElementsByTagName("video")[0].playbackRate = 6.5
        $("#snackbar").text("Current Speed : 6.5")


    }
    else if (e.keyCode == 85) {
        document.getElementsByTagName("video")[0].playbackRate = 7.5
        $("#snackbar").text("Current Speed : 7.5")


    }
    else if (e.keyCode == 73) {
        document.getElementsByTagName("video")[0].playbackRate = 8.5
        $("#snackbar").text("Current Speed : 8.5")


    }
    else if (e.keyCode == 79) {
        document.getElementsByTagName("video")[0].playbackRate = 9.5
        $("#snackbar").text("Current Speed : 9.5")


    }
    else if (e.keyCode == 80) {
        document.getElementsByTagName("video")[0].playbackRate = 0.5
        $("#snackbar").text("Current Speed : 0.5")


    }

    else if (e.keyCode == 37) {
        document.getElementsByTagName("video")[0].currentTime -= 20;
    }
    else if (e.keyCode == 38) {
        document.getElementsByTagName("video")[0].currentTime += 10;
    }
    else if (e.keyCode == 39) {
        document.getElementsByTagName("video")[0].currentTime += 20;
    }
    else if (e.keyCode == 40) {
        document.getElementsByTagName("video")[0].currentTime -= 10;
    }
   
}

