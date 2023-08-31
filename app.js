

let passLength = document.getElementById("passLength");
let range = document.getElementById("range");
let passwordRange = range.value;
let specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


console.log(hello)

// changing range number on moving range slider
range.onchange = ()=>{
    console.log(range.value)
    passLength.innerText = range.value;
    passwordRange = range.value;
}

function randomNum (max, min){
    return Math.floor(Math.random()*(max-min)+min)
}

function randomLow (){
    return String.fromCharCode(randomNum(97, 123))
}

function randomUp (){
    return String.fromCharCode(randomNum(65, 91))
}

function specialSymb(){
    return specialChars[randomNum(0,specialChars.length)]
}