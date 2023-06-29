const files = document.querySelector("#files");
const img = document.querySelector("#img");
const inputFile = document.querySelector("#boton__file");

inputFile.addEventListener('click', () => files.click())
img.addEventListener('click', () => files.click());


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