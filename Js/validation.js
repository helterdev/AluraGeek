export const validateInputs = (input) => {
    const typeInput = input.dataset.tipo;
    // console.log(typeInput);
    if(typeInputs[typeInput]){
        typeInputs[typeInput](input);
    }else{

    }
    
}
//objeto de inputs
const typeInputs = {
    email: (input) => validate(input),
    password: (input) => validate(input),
    nombre: (input) => validate(input),
    mensaje: (input) => validate(input),
}


//funcion que valida si esta vacio y el formato del email
const validate = (input) => {
    const value = input.value;
    const type = input.dataset.tipo;
    if(value !== ''){
        switch(type){
            case "email": validaEmail(value);
            break;
            case "nombre": validaName(value);
            break;
            case "mensaje": validaMensaje(value);
            break;
        }
    }else{
       console.log("la entrada no puede estar vacio, ni en blanco");
    }
}



//funciones de validaciones inputs y textarea
const validaEmail = (value) => {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(regex.test(value)){
        // console.log("valido");
   }else{
    //    console.log("no valido");
   }
}
const validaName = (value) => {
    if(value.length > 0 && value.length <= 40){
        // console.log("valido");
    }else{
        // console.log("invalid");
    }
}

const validaMensaje = (value) => {
    if(value.length > 0 && value.length <= 120){
        // console.log("valido");
    }else{
        // console.log("Invalid");
    }
}