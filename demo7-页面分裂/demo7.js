const box1=document.querySelector('.box1')
const box2=document.querySelector('.box2')
box1.addEventListener('mouseenter',()=>{
    box1.style.flex=`3`
    box2.style.flex=`2`
})
box2.addEventListener('mouseenter',()=>{
    box2.style.flex=`3`
    box1.style.flex=`2`
})