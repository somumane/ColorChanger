const body=document.querySelector('body')
const start=document.querySelector('.start')
const Stop=document.querySelector('.stop')

let interval;
function changeColor(){
    const random1=parseInt(Math.random()*255)
    const random2=parseInt(Math.random()*255)
    const random3=parseInt(Math.random()*255)
    body.style.backgroundColor=`rgb(${random1},${random2},${random3})`
 }
const startChangingColor=function(){
  interval=setInterval(changeColor,1000)
}

start.addEventListener('click',()=>{startChangingColor()})

Stop.addEventListener('click',()=>{
 clearInterval(interval)
})

