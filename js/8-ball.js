let eight_ball_img = document.getElementsByClassName("outer-sphere");
let submit = document.getElementById("answer");
let question = document.getElementById("user_question");

/******* Array of image source paths *******/
//declares an array and create an array of source paths for the images
let answersArray = [];
for (let i = 1; i <= 20; i++){
    let source = `../img/magic8ball_${i}.png`;
    answersArray.push(source);
}

/******* Randomize number function *******/
// returns a number with min inclusive and max inclusive 
function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;;
    return randomNumber;
}

/******* Create and Append function *******/
// creates a div that will serve as the outer ball of the actual magic 8-ball
// creates a div to display the starting image of the magic 8-ball
// appends the sphere div to form itself
// appends the starting image div to the sphere div
// sets attribute for both the sphere and the newImage div
// sets the background image of the newImage dive to the starting image of the magic 8-ball
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

/******* Validate Input *******/
function checkInput(string){
    const regex = /\?$/;
    if (string !== ""){
        if (regex.test(string)){
            console.log("Here");
            return true;
        }
        else {
            //console.log("sorry I cannot understand");
            return false;
        }
    }
    else {
        console.log('Sorry');
        let error = document.createElement('p');
        let errorMessage = document.createTextNode("I am sorry, I do not understand.");
        error.style.cssText = 'position:absolute;top:80px;width:300px;height:2rem;line-height:1.75rem;text-align:center;font-size:1.25rem;background-color:#373737;color:red;';
        document.body.appendChild(error);
        error.appendChild(errorMessage);
    }
}

function changeImage(){
    submit.addEventListener('click', e => {
        e.preventDefault();
        if (checkInput(question.value)){
            let num = random(1,20)
            let magic_ball = document.getElementById('magic-8-ball');
            magic_ball.style.backgroundImage = `url(${answersArray[num]})`;
            console.log("yay!");
        }
        
    })
}

addElements();
changeImage();
