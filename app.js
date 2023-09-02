let passLength = document.getElementById("passLength");
let range = document.getElementById("range");
let passwordRange = range.value;
let checkboxes = document.querySelectorAll("[type='checkbox']");
let passwordDisplay = document.getElementById("passDisplay");
let clipboardBtn = document.getElementById("copyBtn");
let copyText = document.getElementById("copyText");
let generateBtn = document.getElementById("generate");

///// on rendering
let password = "";
passwordDisplay.value = "";

//// changing range number on moving range slider
range.onchange = ()=>{
    passLength.innerText = range.value;
    if(range.value>5 && range.value<16){
        if(range.value<10){
            range.classList.remove(range.className.split(" ")[Array.from(range.className.split(" ")).length - 1]);
            range.classList.add("accent-red-300")
        }
        else{
            range.classList.remove(range.className.split(" ")[Array.from(range.className.split(" ")).length - 1]);
            range.classList.add("accent-green-300")
        }
    }
    else if(range.value>15){
        range.classList.remove(range.className.split(" ")[Array.from(range.className.split(" ")).length - 1]);
        range.classList.add("accent-green-500")
    }
    else{
        range.classList.remove(range.className.split(" ")[Array.from(range.className.split(" ")).length - 1])
        range.classList.add("accent-red-500")
    }
    passwordRange = range.value;
}

//// function to copy to clipboard

clipboardBtn.addEventListener('mouseover', ()=>{
    if(password !== "")
        clipboardBtn.classList.remove("hover:cursor-not-allowed");
})

function copyToClipboard(){
    if(password !== ""){
        navigator.clipboard.writeText(password);
        copyText.innerText = "Copied";
        setTimeout(()=>{
            copyText.innerText = "Copy";
        },1000)
    }
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

let randomArray = []

//// shuffle password function

function shufflePassword(pass){
    for(let i=0; i<pass.length; i++){
        let j = Math.floor(Math.random()*(i+1));
        [pass[i], pass[j]] = [pass[j], pass[i]];
    }
    let shuffle="";
    pass.forEach(lettor=>{
        shuffle+=lettor;
    })
    password = shuffle;
    return shuffle;
}

//// create password function

function createPassword(){
    if(passwordRange<4){
        passwordRange = 4;
    }
    for(let i=password.length; i<parseInt(passwordRange);i++){
        password += randomObject[randomArray[randomNum(0,randomArray.length)]]()
    }
    passwordDisplay.value = shufflePassword(Array.from(password));
}


//// function to check which checkboxes are checked and create password

function checkCheckBoxes (){
    password = ""
    randomArray = []
    checkboxes.forEach(box => {
     if(box.checked){
        password += randomObject[box.id]()
        randomArray.push(box.id)
     }
    })

    if(range.value<4){
        passLength.innerText = 4;
        range.value = 4;
    }

    if(password === ""){
        checkboxes[0].checked = true;
        randomArray.push("upper");
    }
    createPassword()
}

//// to change color of password strength light


function changeBtnColor(count){
    if(count===2){
        generateBtn.classList.remove(generateBtn.className.split(" ")[generateBtn.className.split(" ").length - 1])
        generateBtn.classList.add("bg-green-200");
    }
    else if(count===3){
        generateBtn.classList.remove(generateBtn.className.split(" ")[generateBtn.className.split(" ").length - 1])
        generateBtn.classList.add("bg-green-400");
    }
    else if(count===4){
        generateBtn.classList.remove(generateBtn.className.split(" ")[generateBtn.className.split(" ").length - 1])
        generateBtn.classList.add("bg-green-600");
    }
    else{
        generateBtn.classList.remove(generateBtn.className.split(" ")[generateBtn.className.split(" ").length - 1])
        generateBtn.classList.add("bg-red-200");
    }
}
let checkBoxCount = 0;
checkboxes.forEach(box=>{
    box.addEventListener("click", ()=>{
        if(box.checked){
            checkBoxCount += 1;
        }
        else{
            checkBoxCount -= 1;
        }
        changeBtnColor(checkBoxCount)
    })
})


