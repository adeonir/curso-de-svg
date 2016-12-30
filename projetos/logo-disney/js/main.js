var shape = document.getElementsByTagName("svg")[0];

window.onresize = function() {
  if (window.innerWidth < 600 && window.innerWidth > 486) {
    shape.setAttribute("viewBox", "0 0 300 135");
  } else {
    shape.setAttribute("viewBox", "0 0 215 135");
  }
}
