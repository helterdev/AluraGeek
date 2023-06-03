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
    
}
    

//funcion que valida si esta vacio y el formato del email
const validate = (input) => {
    const value = input.value;
    const type = input.dataset.tipo;
    // console.log(type);
    if(value === ''){
        console.log("la entrada no puede estar vacio, ni en blanco");
    }else{
        if(type === 'email')
        {
            const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if(regex.test(value)){
                console.log("es valido");
            }else{
                console.log("formato no valido");
            }
        }
    }
}

    