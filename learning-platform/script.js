function loadCourse(course){

let video=document.getElementById("courseVideo")

if(course==="html"){
video.src="https://www.youtube.com/embed/qz0aGYrrlhU"
}

if(course==="python"){
video.src="https://www.youtube.com/embed/rfscVS0vtbw"
}

if(course==="ai"){
video.src="https://www.youtube.com/embed/2ePf9rue1Ao"
}

updateProgress(40)

}



function checkAnswer(correct){

let result=document.getElementById("result")

if(correct){
result.innerHTML="Correct Answer!"
updateProgress(100)
}else{
result.innerHTML="Wrong Answer"
}

}



function updateProgress(value){

let bar=document.getElementById("progressBar")

bar.style.width=value+"%"
bar.innerHTML=value+"%"

localStorage.setItem("progress",value)

}



window.onload=function(){

let saved=localStorage.getItem("progress")

if(saved){

let bar=document.getElementById("progressBar")

bar.style.width=saved+"%"
bar.innerHTML=saved+"%"

}

}