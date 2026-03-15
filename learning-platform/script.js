let tasks=[]

function addTask(){

let text=document.getElementById("taskInput").value

let column=document.getElementById("todo")

if(text==="") return

let card=document.createElement("div")

card.className="kanban-task"

card.innerText=text

column.appendChild(card)

tasks.push(text)

updateStats()

}

function updateStats(){

document.getElementById("totalTasks").innerText=tasks.length

}