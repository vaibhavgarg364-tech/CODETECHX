function revealSections(){

const elements=document.querySelectorAll(".reveal");

elements.forEach(el=>{

const windowHeight=window.innerHeight;
const elementTop=el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll",revealSections);



var typed = new Typed(".typing", {

strings:[
"Web Developer",
"AI Project Builder",
"B.Tech CSE Student"
],

typeSpeed:60,
backSpeed:40,
loop:true

});



particlesJS("particles-js", {

particles:{
number:{value:80},
size:{value:3},
color:{value:"#ffffff"},
line_linked:{
enable:true,
distance:150,
color:"#ffffff",
opacity:0.4,
width:1
},
move:{
enable:true,
speed:2
}
},

interactivity:{
events:{
onhover:{
enable:true,
mode:"repulse"
}
}
}

});