
// alert("Welcome  ")

function btnNum(x){
    document.getElementById("displayScreen").innerHTML += x  
}

function clearScreen(){
    document.getElementById("displayScreen").innerHTML = " "
}

function calculateResult(){
var result = eval(document.getElementById("displayScreen").innerHTML)
document.getElementById("displayScreen").innerHTML = result

}


function btnNumSin(){
    var inPut = document.getElementById("displayScreen").innerHTML
    var sin = eval(Math.sin( inPut * Math.PI / 180))
    document.getElementById("displayScreen").innerHTML = sin 
}

function btnSqrtRoot(){
    var inPut = document.getElementById("displayScreen").innerHTML
    var sqrtRoot = Math.pow(inPut, 2)
    document.getElementById("displayScreen").innerHTML = sqrtRoot
}

function btnNumCos(){
    var inPut = document.getElementById("displayScreen").innerHTML += x
    var cosSin = eval(Math.cos( inPut * Math.PI / 180))
    document.getElementById("displayScreen").innerHTML = cosSin
}



function btnNumLog(){
    var inPut = document.getElementById("displayScreen").innerHTML += x
    var log = eval(Math.log(inPut))
    document.getElementById("displayScreen").innerHTML = log
}
