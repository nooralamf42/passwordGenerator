let passLength = document.getElementById("passLength");
let range = document.getElementById("range");
let passwordRange = range.value;
let checkboxes = document.querySelectorAll("[type='checkbox']");
let password = "";

//// changing range number on moving range slider
range.onchange = ()=>{
    passLength.innerText = range.value;
    passwordRange = range.value;
}

//// functions to genrate random numbers and chars etc

function randomNum (max, min){
    return Math.floor(Math.random()*(max-min)+min)
}

function randomNumber (){
    return Math.floor(Math.random()*(10-0)+0)
}

function randomLow (){
    return String.fromCharCode(randomNum(97, 123))
}

function randomUp (){
    return String.fromCharCode(randomNum(65, 91))
}

function randomSymb(){
    let specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    return specialChars[randomNum(0,specialChars.length)]
}

let randomObject = {
    lower : randomLow,
    upper : randomUp,
    numbers : randomNumber,
    specialChar : randomSymb
}

//// function to check which checkboxes are checked

// function check(event){
//     if(event.currentTarget.checked==true){
//         password += randomObject[event.currentTarget.id]()
//         console.log(password)
//     }
// }

function checkCheckBoxes (){
    password = ""
    checkboxes.forEach(box => {
     if(box.checked){
        password += randomObject[box.id]()
     }
    })
    console.log(password)
}

checkboxes.forEach(checkbox=>{
    checkbox.addEventListener("click", checkCheckBoxes)
})


