import { api } from "../services/api.js";
const formulario = document.querySelector("#form__contact");
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre_").value;
    const mensaje = document.querySelector("#mensaje").value;
    api.sendMensaje(nombre, mensaje).then(response => response).catch(err => console.log(err))
})

const formLogin = document.querySelector("#login");
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    api.users().then(data => dataUsers(data))
})

//validar usuario y contrasenia
const dataUsers = (data) => {
    const email = document.querySelector("#email").value;
    const password_ = document.querySelector("#password").value;
    data.forEach(({user, password}) => {
        if(user === email && password === password_){
            window.location.href = "/index.html";
        }else{
            console.log("usuario no resgistrado");
        }
    })

}


