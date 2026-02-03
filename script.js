let noCount=0;
let noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{
if(noCount>=1){
let x=Math.random()*200-100;
let y=Math.random()*200-100;
noBtn.style.transform=`translate(${x}px,${y}px)`;
}
});

function noClick(){
noCount++;
}

function typeWriter(text){
let i=0;
let target=document.getElementById("typeText");
target.innerHTML="";
function typing(){
if(i<text.length){
target.innerHTML+=text.charAt(i);
i++;
setTimeout(typing,80);
}
}
typing();
}

function yesClick(){
document.getElementById("title").style.display="none";
document.getElementById("btnRow").style.display="none";

typeWriter("You made me happiest 💕\n\nI love you ❤️");

let music=document.getElementById("music");
music.play();

document.getElementById("cd").style.animationPlayState="running";
}
