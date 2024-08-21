const btnEl = document.querySelector("#btn");

const jokeEl = document.querySelector("#joke");

const apiKey = "ONcYe266nZJHXubsdMpHPw==WyP3Oi7JxnnujAFm";

const apiURL = "https://api.api-ninjas.com/v1/dadjokes"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
}

btnEl.addEventListener("click", getJoke)

async function getJoke(){
    try {
        jokeEl.innerText = "Loading...";
        btnEl.disabled = true;
        btnEl.innerText = "Please wait...";
        const response = await fetch(apiURL,options )
        const data = await response.json() 
        jokeEl.innerText = data[0].joke
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
    
    } catch (error) {
        jokeEl.innerText = "Oops! Something went wrong!";
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
    }
   

}