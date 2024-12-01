const jokeEl=document.getElementById('joke')
const btn=document.getElementById('btn')
const jokes=['sdfladjklfa','asdfklasd','adslfasdkldf']
async function getjoke(){

    const config={
        headers:{
            Accept:'application/json',

        }
    }
    const res=await fetch('https://icanhazdadjoke.com',config)
    const data=await res.json()
    jokeEl.innerHTML=data.joke
}
getjoke();
btn.addEventListener('click',getjoke)

