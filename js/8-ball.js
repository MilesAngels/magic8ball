let eight_ball_img = document.getElementsByClassName("magic-8-ball-img");
let submit = document.getElementById("submit_button");
let question = document.getElementById("user_question");
let resultsArray = [];
function random(){
    let randomNumber = Math.floor(Math.random() * 20);
    return randomNumber;
}
