var nombreVer=0, mailVer=0, claveVer=0, comprobarVer=0;

function verificarNombre(element){
    let nombre = document.getElementById('NombreCompleto').value;
    let devolucion = document.getElementById("devolucionNombre");
    if(nombre.length > 3){
        nombreVer = 1;
        devolucion.innerHTML = "";
    }
    else {
        devolucion.innerHTML = "el nombre debe contener más de 3 caracteres";
        nombreVer = 0;
    }
}

function verificarMail(element){
    let email = document.getElementById("Email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let devolucion = document.getElementById("devolucionMail");
    if(emailRegex.test(email)){
        devolucion.innerHTML = "";
        mailVer = 1;  
    }
    else{
        devolucion.innerHTML = "el formato no es correcto";
        mailVer = 0;
    }
}

function verificarClave(element){
    let clave = document.getElementById("Clave").value;
    let devolucion = document.getElementById("devolucionContra");
    const contieneNum = /\d/;
    const contieneLetra =  /[a-zA-Z]/g;
    if (clave.length>8 && contieneNum.test(clave) && contieneLetra.test(clave)){
        devolucion.innerHTML = "";
        claveVer = 1;
    }
    else {
        devolucion.innerHTML = "la contraseña debe contener al menos 8 caracteres, 1 número y una letra";
        claveVer = 0;
}
}

function sonIguales(element){
    let devolucion = document.getElementById("devolucionIguales");
    let clave = document.getElementById("Clave").value;
    let claveVerificar = document.getElementById("Confirmar").value;
    if(clave === claveVerificar){
        devolucion.innerHTML = "";
        comprobarVer = 1;
    }
    else{
        devolucion.innerHTML = "las contraseñas no son iguales";
        comprobarVer = 0;
    }
}

function verificar(){

        let Form =document.getElementById("Form");
        let devolucion = document.getElementById("intentoRegistrar");
        if(nombreVer == 1 && mailVer==1 && claveVer == 1 && comprobarVer == 1){
            devolucion.innerHTML = "";
        }
        else devolucion.innerHTML = "por favor, complete los datos correctamente antes de enviar";
}