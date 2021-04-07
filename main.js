const input = document.querySelector("input");
const button = document.querySelector("button");
const text = document.querySelector("h3");
const form = document.querySelector("form");

form.addEventListener("submit", myFunction);

function myFunction(e) {
  e.preventDefault();
  text.innerHTML = input.value;
}
