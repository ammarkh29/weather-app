// index.js
import "./styles.css";
import {getWeather} from "./weather.js";

console.log("Hi")


const form = document.querySelector(".form")
const container = document.querySelector(".container")


form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop the page from reloading


    const formData = new FormData(form)

    const locationInput = formData.get("location")
    
    const weatherString = await getWeather(locationInput);

    container.textContent = weatherString
})

