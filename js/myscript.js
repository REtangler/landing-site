window.onscroll = function () {
    var st = 0;
    if ($('.sec2').visible( true ))
        st++;
    if ($('.sec3').visible( true ))
        st++;
    if(st>0)
    {
        $(".btnUp").css("display", "block");
        onclick( st = 0);
    }

    if($('.sec1').visible( true ))
       $(".btnUp").css("display", "none");
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scroll_sec1() {
    $("#sec1")[0].scrollIntoView({behavior: "smooth"});
}

function syncplay() {
    $("#title-video")[0].addEventListener("canplay", function() {
      setTimeout(function() {
        $("#title-video")[0].play();
        $("#title-blur-video")[0].play();
      }, 100);
    }); 
}