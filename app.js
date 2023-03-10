
let joke = "";
let setup = "";
let delivery = "";

function dosomething() {
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
        document.querySelector("#setup").innerHTML = data.setup,
        document.querySelector("h1>p#delivery").innerHTML = data.delivery
    })
    console.log(document.querySelector("#devlivery").innerHTML);
    console.log(document.querySelector("#setup").innerHTML);
}