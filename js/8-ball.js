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
// accepts a string parameter
// checks if the user's input is not an empty string
// if the user's input is an empty string, then an error message is displayed
// if the user's input in not an empty string, then it checks if the string has a question mark
// if the user's input has a question mark, then the statement will return true
// else it will output an error message
function checkInput(string){
    const regex = /\?$/;
    if (string !== ""){
        if (regex.test(string)){
            console.log("Here");
            return true;
        }
        else {
            //console.log("sorry I cannot understand");
            let error = document.createElement('p');
            error.setAttribute("id", "error")
            let errorMessage = document.createTextNode("I am sorry, I do not understand.");
            document.body.appendChild(error);
            error.appendChild(errorMessage);
            setTimeout(function() {
                document.getElementById("error").style.display = 'none';
            }, 3000); 
            return false;
        }
    }
    else {
        //console.log('Sorry');
        let error = document.createElement('p');
        let errorMessage = document.createTextNode("I am sorry, I do not understand.");
        error.style.cssText = 'position:absolute;top:80px;width:300px;height:2rem;line-height:1.75rem;text-align:center;font-size:1.25rem;background-color:#373737;color:red;';
        document.body.appendChild(error);
        error.appendChild(errorMessage);
        
    }
    
}

/******* Change Image Source Function *******/
function changeURL() {
    let num = random(1,20)
    let magic_ball = document.getElementById('magic-8-ball');
    setTimeout(() => {
        magic_ball.style.backgroundImage = `url(${answersArray[num]})`;
        magic_ball.style.animation = "fadeIntoScreen 5s ease 1";
    }, 3000);
     
}

/******* Change image function *******/
// once the ask question button is pressed, the function checks:
// if the user input is valid
// if it is valid, then it will call the random() function to generate a number and change the image based on the number generated
// it will then use that number to create a source path using the answerArray that was generated earlier
function changeImage(){
    submit.addEventListener('click', e => {
        e.preventDefault();
        if (checkInput(question.value)){
            setTimeout(() => {
                changeURL();
            }, 3000);
        }
    });
    form.reset();
}

// call this fuction to start everything up
addElements();

// call this function to generate the appropriate images
changeImage();
