window.onscroll = function () {
    var st = 0;
    if ($('.sec2').visible( true ))
    {
        st++;
    }
    if(st>0)
    {
        document.getElementById("btnUp").style.display = "block";
        onclick( st = 0);
    }
    if($('.sec1').visible( true ))
    {
        document.getElementById("btnUp").style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Changing bg color of field
// function myFunction(x) {
//   x.style.background = "burlywood";
// }

// function text_alert(){
//     alert("I am an alert box!");
// }

function scroll_sec1() {
    var el = document.getElementById("sec1");
    el.scrollIntoView({behavior: "smooth"});
    // window.scrollTo(0,document.getElementById("sec1"));
}

function syncplay() {   //якшо передній відос повністю займає екран, задній не запускати(зробити)
    var video = document.getElementById("title-video");
    // var video_blur = document.getElementById("title-blur-video");
    video.addEventListener("canplay", function() {
      setTimeout(function() {
        video.play();
        video = document.getElementById("title-blur-video");
        video.play();
      }, 100);
    }); 
}