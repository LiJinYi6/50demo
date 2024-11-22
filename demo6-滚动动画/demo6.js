const boxs=document.querySelectorAll('.box')
let cnt=0;

window.addEventListener('scroll',checkBoxes);
function checkBoxes(){
    const trggerBottom=window.innerHeight/5*4
    boxs.forEach((box)=>{
        const boxTop=box.getBoundingClientRect().top
        if(boxTop<trggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}