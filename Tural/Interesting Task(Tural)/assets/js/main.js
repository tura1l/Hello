const div = document.getElementById("box");
const kubik = document.getElementById("object");
const body = document.body
var left = 0;
var up = 0;
var steps = 50;
let isShiftPressing = false;

window.addEventListener("keypress", function(e){
    if(e.keyCode == 16){
        isShiftPressing = true;
        steps = 100;
    }
})

window.addEventListener("keyup",function(e){
    isShiftPressing = false;
    steps = 50;
})

window.addEventListener('keydown',function(e){

    if (e.keyCode == 39) { 
        // clearInterval(moveToRight)
        // clearInterval(movingUp)
        // clearInterval(movingLeft)
        // clearInterval(movingDown)
        // setInterval(moveToRight,1000)
        moveToRight()
    }
    else if (e.keyCode == 38) {
        // clearInterval(moveToRight)
        // clearInterval(movingUp)
        // clearInterval(movingLeft)
        // clearInterval(movingDown)
        // setInterval(movingUp,1000)
        movingUp()
    }
    else if (e.keyCode == 37) {
        // clearInterval(moveToRight)
        // clearInterval(movingUp)
        // clearInterval(movingLeft)
        // clearInterval(movingDown)
        // setInterval(movingLeft,1000)
        movingLeft()
    }
    else if (e.keyCode == 40) {
        // clearInterval(moveToRight)
        // clearInterval(movingUp)
        // clearInterval(movingLeft)
        // clearInterval(movingDown)
        // setInterval(movingDown,1000)
        movingDown()
    }
    else if (e.keyCode == 16 && e.keyCode == 40) {
        largeObject()
    }
}

)
function movingUp() {
    if (up>0) {
    up -= parseFloat(steps);  
    kubik.style.marginTop = up + 'px';
    }
    
}
function moveToRight() {
    left += parseFloat(steps); 
    kubik.style.marginLeft = left + 'px';  
    
}
function movingLeft() {
    if (left > 0) {
    left -= parseFloat(steps); 
    kubik.style.marginLeft = left + 'px';
    }
}

function movingDown() {
    up += parseFloat(steps); 
    kubik.style.marginTop = up + 'px';  
}
function largeObject() {
    steps = 100;
}