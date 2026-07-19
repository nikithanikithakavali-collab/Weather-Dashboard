const button = document.querySelector("button");

button.addEventListener("click", function () {

    const city = document.getElementById("city").value;

    document.getElementById("result").innerHTML = "You searched for: " + city;

});
const apiKey = "fed08b4198e3073d991a959d06a551a7";

const button = document.querySelector("button");

button.addEventListener("click", function () {

    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(url);

});
