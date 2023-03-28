var turn = 1;
var td_content = document.getElementsByTagName("td");
var circle = document.getElementById("circle");
var cross = document.getElementById("cross");

var blank = [
  ['','',''],
  ['','',''],
  ['','','']
];

const check = [
  ['f1','f2','f3'],
  ['f4','f5','f6'],
  ['f7','f8','f9'],
  ['f1','f4','f7'],
  ['f2','f5','f8'],
  ['f3','f6','f9'],
  ['f1','f5','f9'],
  ['f3','f5','f7']
];




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