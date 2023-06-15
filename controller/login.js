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
    const span = document.querySelector(".mensaje");
    data.forEach(({user, password}) => {
        if(user === email && password === password_){
            span.textContent = " "
            window.location.href = "/index.html";
            
        }else{
            
            span.textContent = "usuario no registrado"
        }
        
    })

}


