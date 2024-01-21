let passwordLength 
let upperCase
let lowerCase = []
let generateButton = document.querySelector(".logo")
let lengthButton = document.querySelector(".number")
let alphabetMaj = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let numbers = ["1","2","3","4","5","6","7","8","9","0"]

let signs = ["!","@","#","$","%","^","&","*","(",")",",","_","+",
"-","=","{","}","[","]","|", '\ ', ":", ";","<>",",",".","?","/"]


let check1 = document.querySelector(".paragraphe1")
let check2 = document.querySelector(".paragraphe2")
let check3 = document.querySelector(".paragraphe3")
let check4 = document.querySelector(".paragraphe4")
let inputPwd = document.querySelector(".paragraphe5")

let allPossibilities = []

let password = []
alphabetMaj.forEach(element => {
    lowerCase.push(element.toLowerCase())
});

allPossibilities = [alphabetMaj,lowerCase,numbers,signs]

// stock length
lengthButton.addEventListener('change', ()=>{
    passwordLength = lengthButton.value
    console.log(passwordLength);
})

check1.addEventListener('click', ()=>{
    if(check1.checked){
        if(!allPossibilities.includes(alphabetMaj)){
            allPossibilities.push(alphabetMaj)
        }
        
       
    }else{
        if (allPossibilities.includes(alphabetMaj)) {
            // allPossibilities = allPossibilities.filter(alphabetMaj => allPossibilities.includes(alphabetMaj))
            
            allPossibilities.splice(allPossibilities.indexOf(alphabetMaj),1)
            console.log("capital filter", allPossibilities);
            
        }else{
            console.log("No matches for CAPITAL LETTERS");
        }
        

    }
})
check2.addEventListener('click', ()=>{

    if(check2.checked){
        
        allPossibilities.push(lowerCase)
       
    }else{
        if (allPossibilities.includes(lowerCase)) {
            
            allPossibilities.splice(allPossibilities.indexOf(lowerCase),1)
            console.log("lowers filter", allPossibilities);
            // allPossibilities.splice(allPossibilities.findIndex(lowerCase),1)
        }else{
            console.log("No matches for Lowercase LETTERS");
        }
        

    }
})
check3.addEventListener('click', ()=>{
    if(check3.checked){
        
        allPossibilities.push(numbers)
        
    }else{
        if (allPossibilities.includes(numbers)) {
            allPossibilities.splice(allPossibilities.indexOf(numbers),1)
            console.log("nulbers filter", allPossibilities);
            // allPossibilities.splice(allPossibilities.findIndex(numbers),1)
        }else{
            console.log("No matches for NUMBERS");
        }
        

    }
})
check4.addEventListener('click', ()=>{
    if(check4.checked){
        
        allPossibilities.push(signs)
       
    }else{
        if (allPossibilities.includes(signs)) {
            
            allPossibilities.splice(allPossibilities.indexOf(signs),1)
            console.log("signs filter", allPossibilities);
            // allPossibilities.splice(allPossibilities.findIndex(signs),1)
        }else{
            console.log("No matches for signs");
        }
        

    }
})

let toutlesPossibilites
let typeOfletter
let randomLetter
generateButton.addEventListener('click', ()=>{
    console.log(allPossibilities);
    // toutlesPossibilites = allPossibilities.toString().replace(/,/g, "")
    // console.log(toutlesPossibilites);
    for (let index = 0; index < passwordLength; index++) {
        typeOfletter = allPossibilities[Math.floor(Math.random()*allPossibilities.length)]
        randomLetter = typeOfletter[Math.floor(Math.random()*typeOfletter.length)]
        console.log(randomLetter);
        password.push(randomLetter)
        
    }
    password = password.toString().replace(/,/g, "")
    inputPwd.value = password
    password = []
})

































// let upperChars = ["A","B","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
// let lowerChars = ["a","b","c","d","e","f","g","h","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
// let numbers = ["2","3","4","5","6","7","8","9"];
// let symbols = ["!","#","$","%","&","*","+","-","?","@"];
// let similars_lower = ["i","l","o"];
// let similars_upper = ["I","L","O"];
// let similars_numbers = ["1","0"];
// let similars_symbols = ["|"];
// let ambiguous = ["\"","'","(",")",",",".","/",":",";","<","=",">","[","\\","]","^","_","`","{","}","~"];

// function generate(){
//     let passwordLength = parseFloat(document.getElementsByClassName('number').value);
    
//     let password="";
// 	if(!isNaN(passwordLength))
//     { 
//         if(passwordLength < 4 || passwordLength > 2048)
//         {
//             document.getElementById("error").style.display = "block";
//             document.getElementById('txtPassword').value = "";
//         } else {
//             document.getElementById("error").style.display = "none";
//             password = getPassword(passwordLength);
//             document.getElementById('txtPassword').value = password;
//         }
//     }
// }