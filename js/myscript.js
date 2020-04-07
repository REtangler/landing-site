// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    document.getElementById("btnUp").style.display = "none";
    if (document.body.scrollTop > 970 || document.documentElement.scrollTop > 970 ) {
        document.getElementById("btnUp").style.display = "block";
       
    }
}
// When the user clicks on the button, scroll to the top of the document
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

// function syncplay() {
//     var video = document.getElementById("title-video")
//     video.oncanplay = document.getElementById("title-blur-video").onplay();
// }
function syncplay() {   //якшо передній відос повністю займає екран, задній не запускати
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