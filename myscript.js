// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnUp").style.display = "block";
       
    }
    else {
        document.getElementById("btnUp").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Changing bg color of field
function myFunction(x) {
  x.style.background = "burlywood";
}

function text_alert(){
    alert("I am an alert box!");
}

function scroll_sec1() {
    var el = document.getElementById("sec1");
    el.scrollIntoView({behavior: "smooth"});
    // window.scrollTo(0,document.getElementById("sec1"));
}