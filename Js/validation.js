
export const validateInputs = (input) => {
    // console.log(input.validity);
    const typeInput = input.target.dataset.tipo;
    // console.log(typeInput);
    // console.log(input);
    if(typeInputs[typeInput]){
        typeInputs[typeInput](input);
    }
    
}
//objeto de inputs
const typeInputs = {
    email: (input) => validaEmail(input),
    // password: (input) => valida(input),
    nombre: (input) => validaName(input),
    mensaje: (input) => validaMensaje(input),
}

//funcion que valida si esta vacio y el formato del email




//funciones de validaciones inputs y textarea
 export const validaEmail = (e) => {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const value = e.target.value;
    const target = e.target
    const span = document.querySelector(".message__error");
    if(regex.test(value)){
        target.classList.remove("notvalido")
        target.classList.add("valido")
        span.textContent = " "
   }else{
       target.classList.remove("valido")
       target.classList.add("notvalido")
       span.textContent = "el formato debe ser xxx@ejemplo.com"
   }
   
}
const validaName = (e) => {
    const value = e.target.value;
    const target = e.target
    if(value.length > 0 && value.length <= 40){
        // console.log("valido");
        target.classList.remove("notvalido")
        target.classList.add("valido_")
    }else{
        // console.log("invalid");
        target.classList.remove("valido_")
        target.classList.add("notvalido")
        
    }
}

const validaMensaje = (e) => {
    const value = e.target.value;
    const target = e.target
    if(value.length > 0 && value.length <= 120){
        // console.log("valido");
        target.classList.remove("notvalido")
        target.classList.add("valido_")
    }else{
        // console.log("Invalid");
        target.classList.remove("valido_")
        target.classList.add("notvalido")
    }
}

// switch(type){
//     case "email": validaEmail(value);
//     break;
//     case "nombre": validaName(value);
//     break;
//     case "mensaje": validaMensaje(value);
//     break;
// }