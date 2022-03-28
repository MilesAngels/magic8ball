let eight_ball_img = document.getElementsByClassName("outer-sphere");
let submit = document.getElementById("answer");
let question = document.getElementById("user_question");

let answersArray = [];
for (let i = 1; i <= 20; i++){
    let source = `./img/magic8ball_${i}.png`;
    answersArray.push(source);
}

//returns a number with min inclusive and max inclusive
function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;;
    return randomNumber;
}

console.log(random(1, 20));

function addElements () {
    let sphere = document.createElement("div");
    let newImage = document.createElement("div");
    let form = document.getElementById("form");
    form.appendChild(sphere);
    sphere.setAttribute("class", "outer-sphere");
    sphere.appendChild(newImage);
    newImage.setAttribute("id", "magic-8-ball")
    newImage.style.backgroundImage = "url('../img/magic8ball_start.png')";
}

addElements();