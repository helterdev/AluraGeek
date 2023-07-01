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
    const value = input.value;
    if(value !== 0 && value !== ''){
        validateType(input)
    }else{
        // console.log("esta vacio");
    }
}

const validateType = (input) => {
    const inputType = input.name;
    const value = input.value;
    if(type[inputType]){
        type[inputType](value)
        
    }
}

const type = {
    "categoria": (value) => validateCategory(value),
    "producto": (value) => validateName(value),
}

const validateCategory = (value) => {
    if(value.length >= 20){
        console.log("El campo no debe tener mas de 20 carácteres");
    }else{

    }
}

const validateName = (value) => {
    if(value.length >= 20){
        console.log("El campo no debe tener mas de 20 carácteres");
    }else{

    }
}