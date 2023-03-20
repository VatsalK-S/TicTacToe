var turn = 1;
var td_content = document.getElementsByTagName("td");
var circle = document.getElementById("circle");
var cross = document.getElementById("cross");
for (let i of td_content) {
  i.onclick = function () {
    if (turn % 2 == 0) {
      var copy = cross.cloneNode(true);
    } 
    else {
      var copy = circle.cloneNode(true);
    }
    copy.removeAttribute("hidden");
    i.append(copy);
    i.onclick = null;
    turn++;
  };
}
