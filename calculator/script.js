let screen = document.getElementById("screen")

function append(value){

screen.value += value

}

function clearScreen(){

screen.value = ""

}

function deleteLast(){

screen.value = screen.value.slice(0,-1)

}

function calculate(){

try{

screen.value = eval(screen.value)

}

catch{

screen.value = "Error"

}

}


document.addEventListener("keydown",function(e){

let key=e.key

if(!isNaN(key) || "+-*/.%".includes(key)){
append(key)
}

if(key==="Enter"){
calculate()
}

if(key==="Backspace"){
deleteLast()
}

if(key==="Escape"){
clearScreen()
}

})