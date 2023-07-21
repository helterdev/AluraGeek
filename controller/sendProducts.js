import { api } from "../services/api.js";

const formProducts = document.querySelector("#products");
formProducts.addEventListener("submit", (e) => {
    console.log(e);
    e.preventDefault();
    sendProducts(formProducts);
    
});

const sendProducts = (form) => {
    const newFormProducts = new FormData(form);
    const dataObjectForm = Object.fromEntries(newFormProducts);
    api.sendFormProducts(dataObjectForm).then((response) => {
        if(!response.ok){
            throw new Error("Bad server response")
        }
    })
}