import { validateInputs } from "./validation.js";
//Selecciona los inputs email y password
const inputs = document.querySelectorAll(".login__input");


inputs.forEach((input) => {
    input.addEventListener('blur', (input) => validateInputs(input.target))
})