function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }

  //on change
  function change() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }
  //onfocus
  function myFunction(x) {
    x.style.background = "purple";
  }
  //extra
  function extra() {
    window.location.href = "https://www.youtube.com/watch?v=hAq443fhyDo";
  }