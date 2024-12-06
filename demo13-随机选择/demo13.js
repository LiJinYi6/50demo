const textarea=document.getElementById('textarea')
const tags=document.getElementById('tags')
textarea.focus()
textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key==='Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)
        randomSelect()
    }
})
function createTags(input){
    const tagArr=input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim())
    tags.innerHTML=''
    tagArr.forEach(tag=>{
        const tagEl=document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText=tag
        tags.appendChild(tagEl)
    })
}
function randomSelect(){
    const times=30
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag()
        if(randomTag){
            highlight(randomTag)
            setTimeout(()=>{
                unhighlight(randomTag)
            },100)
        }
    },100)
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randmTag=pickRandomTag()
            highlight(randmTag)
        },100)
    },100*times)
}
function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}
function highlight(tag){
    tag.classList.add('highlight')
}
function unhighlight(tag){
    tag.classList.remove('highlight')
}