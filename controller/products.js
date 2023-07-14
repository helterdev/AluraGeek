const files = document.querySelector("#files");
const img = document.querySelector("#img");
const inputFile = document.querySelector("#boton__file");

files.addEventListener('change', (e) => {
    const file = e.target.files;
    fileProcessing(file)
    //drag and drog
})

const fileProcessing = (file) => {
    if(file[0]){
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = () => {
            img.src = reader.result;
        }
    }else{
        img.src = "../assets/img/img.png"
    }
}

const drop = document.querySelector(".drag");

const dropEvents = () => {
    drop.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    
    drop.addEventListener("dragleave", (e) => {
        e.preventDefault();
    })
    
    drop.addEventListener("drop", (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files;
        dropProcessing(file[0])
    })
}

dropEvents()

const dropProcessing = (file) => {
    const validExtensions = ['image/jpeg','image/jpg','image/png','image/gif' ];
    if(validExtensions.includes(file.type)){
        const read = new FileReader();
        read.readAsDataURL(file)
        read.onload = () => {
            img.src = read.result
        }

    }else{
        alert("archivo no valido");
    }
}


const inputsRegister = document.querySelectorAll(".input");
inputsRegister.forEach((input) => {
    input.addEventListener('blur', () => validateInput(input))
    
})

const validateInput = (input) => {
    let message = '';
    const name = input.name;
    if(!input.validity.valueMissing){
        validateType(input)
    }else{
        message = `El campo ${name} no debe estar vacío`;
        input.setCustomValidity(message);
        input.reportValidity();
    }
     
}

const validateType = (input) => {
    const inputType = input.name;
    const value = input.value;
    if(type[inputType]){
        type[inputType](value, input)
        
    }
}

const type = {
    "categoria": (value, input) => validateCategory(value, input),
    "producto": (value, input) => validateName(value, input),
}

 const element = () => {
    const span = document.createElement("span")
    return span
 }

const validateCategory = (value, input) => {
    const parent = input.parentElement;
    const span = element();
    if(value.length >= 20){
        span.innerText = 'No debe contener más de 20 carácteres'
        parent.append(span)
    }else{
        parent.removeChild(parent.lastChild)
    }
}

const validateName = (value, input) => {
    const parent = input.parentElement;
    const span = element();
    if(value.length >= 20){
        span.innerText = 'No debe contener más de 20 carácteres'
        parent.append(span)
    }else{
        parent.removeChild(parent.lastChild)
    }
}
const inputPrice = document.querySelector("#price");
    inputPrice.addEventListener('keyup',(e) => {
        const keyCode = e.keyCode;
        if(keyCode != 8){
            if(keyCode < 48 || keyCode > 57){
                inputPrice.setCustomValidity(`${e.key} no es un número`)
                inputPrice.reportValidity()
                console.log("no es un numero");
            }
        }else{
            inputPrice.setCustomValidity("")
            inputPrice.reportValidity()
        }
    })


