const button = document.querySelector("button");

button.addEventListener("click", function () {

    const city = document.getElementById("city").value;

    document.getElementById("result").innerHTML = "You searched for: " + city;

});
