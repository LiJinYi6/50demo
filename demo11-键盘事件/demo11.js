const div1=document.getElementById('div1')
const div2=document.getElementById('div2')
const div3=document.getElementById('div3')
document.addEventListener('keydown',function(event){
    div1.innerText=`${event.key}`
    div2.innerText=`${event.keyCode}`
    div3.innerText=`${event.code}`
})