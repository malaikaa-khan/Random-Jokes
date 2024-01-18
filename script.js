let get = document.getElementById("get");
async function myFun(){
    let getting = await fetch ('https://icanhazdadjoke.com/',{headers:{
        accept :"application/json"
    }
})
   let joke=await getting.json();
   let data=joke.joke;
  console.log(data);
  get.innerHTML=data;
}
myFun();