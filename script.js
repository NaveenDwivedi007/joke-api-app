var jokeElement = {}
const img = document.querySelector(".image")
const btn = document.querySelector(".btn")
const joke = document.querySelector(".joke")

// with .then and .catch method


const JokeApi =()=>{
  return fetch("https://icanhazdadjoke.com/",{
    method:"GET",
    headers:{
      Accept:"application/json"
    },
  })
  .then(res=>{
    return res.json()
  })
  .then(data=>{
    jokeElement=data
    joke.innerText = jokeElement.joke
  })
  .catch(err=>{
    console.log(err);
  })
}

//with async and await

 async function jokeApi(){
  const res= await fetch("https://icanhazdadjoke.com/",{
        method:"GET",
        headers:{
          Accept:"application/json"
        },
      })
    const data = await res.json()
    joke.innerText=data.joke
}


jokeApi()
btn.addEventListener("click",()=>{
  jokeApi()
  
})
