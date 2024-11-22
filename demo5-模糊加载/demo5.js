const load=document.querySelector('.loading-text')
const bg=document.querySelector('.bg')
let ld=0

let inte=setInterval(()=>{
    ld++
    if(ld>99){
        clearInterval(inte)
    }
    load.innerText=`${ld}%`
    load.style.opacity=1-ld/100
    bg.style.filter=`blur(${(1-ld/100)*30}px)`
},30)