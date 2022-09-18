var top = document.getElementById("top");
var responsive = window.matchMedia("(max-width: 520px)")
top.onscroll = function () { myFunction() };
function myFunction() {




  if (top.scrollY > 3150) {
    document.getElementById("active").className = "timeline-inner-textbox";
    document.getElementById("child1").className = "timeline-inner-textbox active";
    document.getElementById("timeline-elipse").style.top = "260px";
    if (top.scrollY > 3300) {
      document.getElementById("child2").className = "timeline-inner-textbox active";
      document.getElementById("child1").className = "timeline-inner-textbox";
      document.getElementById("timeline-elipse").style.top = "470px";
    }
    if (top.scrollY > 3550) {
      document.getElementById("child3").className = "timeline-inner-textbox active";
      document.getElementById("child2").className = "timeline-inner-textbox";
      document.getElementById("timeline-elipse").style.top = "650px";
    } if (top.scrollY < 3550) {
      document.getElementById("child2").className = "timeline-inner-textbox active";
      document.getElementById("child3").className = "timeline-inner-textbox";
      document.getElementById("timeline-elipse").style.top = "470px";
    }
  }
  if (top.scrollY < 3300) {
    document.getElementById("child1").className = "timeline-inner-textbox active";
    document.getElementById("child2").className = "timeline-inner-textbox";
    document.getElementById("timeline-elipse").style.top = "260px";
  } if (top.scrollY < 3150) {
    document.getElementById("child1").className = "timeline-inner-textbox";
    document.getElementById("active").className = "timeline-inner-textbox active";
    document.getElementById("timeline-elipse").style.top = "80px";

  }


  if (responsive.matches) {
    if (top.scrollY > 2900) {
      document.getElementById("active").className = "timeline-inner-textbox";
      document.getElementById("child1").className = "timeline-inner-textbox active";
      document.getElementById("timeline-elipse").style.top = "200px";
      if (top.scrollY > 3000) {
        document.getElementById("child2").className = "timeline-inner-textbox active";
        document.getElementById("child1").className = "timeline-inner-textbox";
        document.getElementById("timeline-elipse").style.top = "320px";
      }
      if (top.scrollY > 3150) {
        document.getElementById("child3").className = "timeline-inner-textbox active";
        document.getElementById("child2").className = "timeline-inner-textbox";
        document.getElementById("timeline-elipse").style.top = "420px";
      }
      if (top.scrollY < 3150) {
        document.getElementById("child2").className = "timeline-inner-textbox active";
        document.getElementById("child3").className = "timeline-inner-textbox";
        document.getElementById("timeline-elipse").style.top = "320px";
      }
    }
    if (top.scrollY < 3000) {
      document.getElementById("child1").className = "timeline-inner-textbox active";
      document.getElementById("child2").className = "timeline-inner-textbox";
      document.getElementById("timeline-elipse").style.top = "200px";
    } if (top.scrollY < 2900) {
      document.getElementById("child1").className = "timeline-inner-textbox";
      document.getElementById("active").className = "timeline-inner-textbox active";
      document.getElementById("timeline-elipse").style.top = "80px";

    }
  }

}

myFunction(responsive) // Call listener function at run time
responsive.addListener(myFunction) // Attach listener function on state changes