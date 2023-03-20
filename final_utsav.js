
var match = 1;
const cross = document.getElementById("cross");
const circle = document.getElementById("circle");
var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
const checkif = [
    ['00', '11', '22'],//d1
    ['02', '11', '20'],//d2
    ['00', '01', '02'], //r1
    ['10', '11', '12'], //r2
    ['20', '21', '22'], //r3
    ['00', '10', '20'], //c1
    ['01', '11', '21'], //c2
    ['02', '12', '22'], //c3
];
var p1 = {
    name: "Player 1",
    fill: 'x',
    wins:0
};
var p2 = {
    name: "Player 2",
    fill: 'o',
    wins:0
};
var tie = {
    fill: '-',
    name: '----'
};
function reset_board() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
}
function remove_clicking() {
    var tds = document.querySelectorAll(`td.face${match}`)
    for (let i of tds) {
        i.onclick = null;
    }
}
function display_score(winner) {
    var score_board = document.querySelector('.score');
    console.log(score_board);
    var tr = document.createElement("tr");
    tr.setAttribute("class", "rounds")
    var i = match;
    // tr.onclick= function(){
    //     turn_cube(i);
    // }
    console.log(tr);
    var rnd = document.createElement("td");
    rnd.setAttribute("class", `face${match}`);
    rnd.innerHTML = match;

    var wnr = document.createElement("td");
    wnr.innerHTML = winner.fill;

    var name = document.createElement("td");
    name.innerHTML = winner.name;
    score_board.append(tr);
    tr.append(rnd);
    tr.append(wnr);
    tr.append(name);
    if (match == 6) {
        console.log(match)
        var temp = document.querySelectorAll('.rounds')
        for (let i = 0; i < temp.length; i++) {
            // console.log(temp);
            temp[i].onclick = function () {
                console.log("clicked");
                turn_cube(i+1);
            }
        }
    }
}
function next_match(p) {
    remove_clicking();
    reset_board();
    display_score(p);
    match++;
    turn = 0;
    turn_cube(match);
    start_();
}
function turn_cube(r) {
    var rx, ry;
    if (r <= 6) {
        var main = document.querySelector(".main");
        // console.log(main)
        switch (r) {
            case 1:
                ry = 0;
                rx = 0;
                break;
            case 2:
                ry = 100;
                rx = 10;
                break;
            case 3:
                ry = 200;
                rx = -10;
                break;
            case 4:
                ry = 280;
                rx = 20;
                break;
            case 5:
                ry = 340;
                rx = 90;
                break;
            case 6:
                ry = 350;
                rx = 290;
                break;
            default:
                rx = 360 * 3;
                ry = 360 * 2;
                break;
        }
        main.style.transform = `rotatey(${-ry}deg) rotatex(${-rx}deg)`
    }
}
function stop_cube_animation() {
    var cube = document.querySelector(".main");
    // console.log(cube)
    cube.style.animation = 'none';
}
function is_winner(p) {
    for (let i of checkif) {
        var a = 0;
        for (let j of i) {
            if (board[j.charAt(0)][j.charAt(1)] === p.fill)
                a++;
        }
        if (a == 3) {
            // console.log(`player ${p.fill} won!`)
            next_match(p);
            return true;
        }
    }
    return false;
}
function start_() {
    stop_cube_animation();
    var turn = 0;
    var tds = document.querySelectorAll(`td.face${match}`);
    for (var i of tds) {
        i.onclick = function () {
            var res;
            if (turn % 2 == 0) {
                res = X(this);
            }
            else {
                res = O(this);
            }
            if (res == true) {
                turn++;
            }
            if (turn == 9) {
                console.log("tie");
                next_match(tie);
            }
        };
    }
}
function X(ele) {
    var ch = board[ele.id.charAt(0)][ele.id.charAt(1)];
    if (ch == '') {
        board[ele.id.charAt(0)][ele.id.charAt(1)] = 'x';

        var c = cross.cloneNode(true);
        c.removeAttribute("hidden");

        ele.append(c);

        if (is_winner(p1) == true) {
            console.log(`player ${p1.fill} won!`)
            return false;
        }
        return true;
    }

}
function O(ele) {
    var ch = board[ele.id.charAt(0)][ele.id.charAt(1)];
    if (ch == '') {
        board[ele.id.charAt(0)][ele.id.charAt(1)] = 'o';

        var c = circle.cloneNode(true);
        c.removeAttribute("hidden");

        ele.append(c);
        if (is_winner(p2) == true) {
            console.log(`player ${p2.fill} won!`)
            return false;
        }
        return true;
    }
}



