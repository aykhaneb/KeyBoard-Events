let dog = document.querySelector(".dog")
let all = document.querySelector(".all")
let h1 = document.querySelector(".h1")
dog.style.left = "0px";
dog.style.top = "0px";
dog.style.position = "relative";
let x = 10
function moveLeft() {
    dog.style.left = parseInt(dog.style.left) - 5 + "px";
    dog.style.transform="rotateY(180deg)"
}
function moveUp() {
    dog.style.top = parseInt(dog.style.top) - 5 + "px";
    
}
function moveRight() {
    dog.style.left = parseInt(dog.style.left) + 5 + "px";
    if (dog.style.transform="rotateY(180deg)") {
        dog.style.transform="rotateY(0deg)"
    }
    else{
        dog.style.transform="rotateY(180deg)"
    }
}
function moveDown() {
    dog.style.top = parseInt(dog.style.top) + 5 + "px";
}

document.body.onkeydown = function (e) {
    if (e.keyCode === 37) {
        moveLeft()
    }
     if (e.keyCode === 39) {
        moveRight()
    }
     if (e.keyCode === 38) {
        moveUp()
    }
     if (e.keyCode === 40) {
        moveDown()
    }
    else if(dog.style.left>=`${90}%` && dog.style.top>=`${90}%`){
        dog.style.display = 'none'
        h1.innerHTML="GAME OVER"}
}

    // else if(){
    //     dog.style.display = 'none'
    // }
// }