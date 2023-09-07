$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

const header = document.getElementById("header");
header.style.position = "sticky";
header.style.top = "0px";
header.style.zIndex = "100";
