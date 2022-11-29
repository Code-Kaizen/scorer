let num1 = 1
let num0 = 0
let num2 = 2
let num3 = 3
let addPoints = document.getElementById("score-el1")

function add1(){
    num0 += num1
    addPoints.textContent = num0
}
function add2(){
    num0 += num2
    addPoints.textContent = num0
}
function add3(){
    num0 += num3
    addPoints.textContent = num0
}

let guestPoints = document.getElementById("score-el2")
function add4(){
    num0 += num1
    guestPoints.textContent = num0
}
function add5(){
    num0 += num2
    guestPoints.textContent = num0
}
function add6(){
    num0 += num3
    guestPoints.textContent = num0
}
function reset(){
    num0 = 0
    guestPoints.textContent = 0
    addPoints.textContent = 0
}