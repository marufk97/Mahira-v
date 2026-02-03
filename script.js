let noCount=0;
let noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{
if(noCount>=1){
let x=Math.random()*220-110;
let y=Math.random()*220-110;
noBtn.style.transform=`translate(${x}px,${y}px)`;
}
});

function noClick(){
noCount++;
if(noCount==1){ msg.innerHTML="😢 Really?"; }
else if(noCount==2){ msg.innerHTML="Think again…"; }
else{ msg.innerHTML="You can't do that with me 😢"; }
}

function typeWriter(text,callback){
let i=0;
let speed=70;
let target=document.getElementById("typeText");
target.innerHTML="";

function typing(){
if(i<text.length){
target.innerHTML+=text.charAt(i);
i++;
setTimeout(typing,speed);
}else{
if(callback) callback();
}
}
typing();
}

function yesClick(){

document.getElementById("title").style.display="none";
document.getElementById("btnRow").style.display="none";
document.getElementById("msg").style.display="none";

typeWriter("You made me happiest 💕\n\nI love you Mahira ❤️",()=>{

document.getElementById("music").play();
document.getElementById("cd").style.animationPlayState="running";
document.getElementById("gallery").classList.add("show");

});

}
