//time
const timeEl = document.getElementById("timeDay")
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    timeEl.innerHTML=  h + ":" + m + ":" + s
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
//time
const windowEl = document.getElementById("cal")
const dark=document.getElementById("dark")
const light=document.getElementById("light")
dark.addEventListener("click", ()=>{
    windowEl.classList.remove = "calculyator"
    windowEl.className= "calculyatorLight"
})
light.addEventListener("click", ()=>{
    windowEl.classList.remove = "calculyatorLight"
    windowEl.className= "calculyator"
})



const clearEl=document.getElementById("clear")
const minusClearEl=document.getElementById("littleclear")

const zeroEl=document.getElementById("zero")
const oneEl=document.getElementById("one")
const twoEl=document.getElementById("two")
const threeEl=document.getElementById("three")
const fourEl=document.getElementById("four")
const fiveEl=document.getElementById("five")
const sixEl=document.getElementById("six")
const sevenEl=document.getElementById("seven")
const eightEl=document.getElementById("eight")
const nineEl=document.getElementById("nine")

const dropEl=document.getElementById("drop")
const increaseEl=document.getElementById("increase")
const minusEl=document.getElementById("minus")
const plusEl=document.getElementById("plus")
const equalEl=document.getElementById("equal")
const dotEl=document.getElementById("dot")
const screenEl = document.getElementById("input")

const musicEl=document.getElementById("music");
const plusMusicEl=document.getElementById("plusMusic");
const equalMusicEl=document.getElementById("equalMusic");
const deletMusicEl=document.getElementById("deletMusic");


zeroEl.addEventListener("click",()=>{
    musicEl.loop = false
    musicEl.play();
    screenEl.value+='0';
})
oneEl.addEventListener("click",()=>{
    musicEl.loop = false
    musicEl.play();
    screenEl.value+='1' 
})
twoEl.addEventListener("click",()=>{
    musicEl.loop = false
    musicEl.play();
    screenEl.value+='2' 
})
threeEl.addEventListener("click",()=>{
    musicEl.loop = false
    musicEl.play();
    screenEl.value+='3' 
})
fourEl.addEventListener("click",()=>{
    musicEl.loop = false
    musicEl.play();
    screenEl.value+='4' 
})
fiveEl.addEventListener("click",()=>{
    musicEl.loop = false
    musicEl.play();
    screenEl.value+='5' 
})
sixEl.addEventListener("click",()=>{
    musicEl.loop = false
    musicEl.play();
    screenEl.value+='6' 
})
sevenEl.addEventListener("click",()=>{
    musicEl.loop = false
    musicEl.play();
    screenEl.value+='7' 
})
eightEl.addEventListener("click",()=>{
    musicEl.loop = false
    musicEl.play();
    screenEl.value+='8' 
})
nineEl.addEventListener("click",()=>{
    musicEl.loop = false
    musicEl.play();
    screenEl.value+='9' 
})


dropEl.addEventListener("click",()=>{
    plusMusicEl.loop = false
    plusMusicEl.play();
    screenEl.value+="/" 
})
increaseEl.addEventListener("click",()=>{
    plusMusicEl.loop = false
    plusMusicEl.play();
    screenEl.value+='*' 
})
minusEl.addEventListener("click",()=>{
    plusMusicEl.loop = false
    plusMusicEl.play();
    screenEl.value+='-' 
    
})
plusEl.addEventListener("click",()=>{
    plusMusicEl.loop = false
    plusMusicEl.play();
    screenEl.value+="+" 
})
dotEl.addEventListener("click",()=>{
    plusMusicEl.loop = false
    plusMusicEl.play();
    screenEl.value+="." 
})
equalEl.addEventListener("click",()=>{
    equalMusicEl.loop = false
    equalMusicEl.play();
    screenEl.value=Math.floor(eval(screenEl.value) )
})


clearEl.addEventListener("click" ,()=>{
    deletMusicEl.loop = false
    deletMusicEl.play();
    screenEl.value = ""
})

function minusclearFun(){
    screenEl.value = screenEl.value - 1
}
minusClearEl.addEventListener("click" , minusclearFun)











