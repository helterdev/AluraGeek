import { validateInputs } from "./validation.js";
//Selecciona los inputs email y password
const inputs = document.querySelectorAll(".login__input");
inputs.forEach((input) => {
    input.addEventListener('blur', (e) => validateInputs(e.target))
})

//Section contactenos
const inputContactenos = document.querySelectorAll(".input_");
inputContactenos.forEach((input) => {
    input.addEventListener('blur', (e) => validateInputs(e.target))
})
