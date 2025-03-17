function verificarNombre(value){
    let nombre = document.getElementById('NombreCompleto').value;
    if(nombre.length > 3){
        value.style.background = "Blue";
    }
    else {
        value.style.background = "red";
    }
}

function verificarMail(value){
    let email = document.getElementById("Email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)){
        value.style.background = "Blue";    }
    else{
        value.style.background = "red";
    }
}

function verificarClave(value){
    let clave = document.getElementById("Clave").value;
    if (clave.length>8 && clave.includes()){

    }
}

function sonIguales(value){
    let clave = document.getElementById("Clave").value;
    let claveVerificar = document.getElementById("Confirmar").value;
    if(clave === claveVerificar){

    }
}