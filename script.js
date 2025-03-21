var nombreVer=0, mailVer=0, claveVer=0, comprobarVer=0;

function verificarNombre(element){
    let nombre = document.getElementById('NombreCompleto').value;
    if(nombre.length > 3){
        element.style.background = "Blue";
        nombreVer = 1;
    }
    else {
        element.style.background = "red";
        nombreVer = 0;
    }
}

function verificarMail(element){
    let email = document.getElementById("Email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(emailRegex.test(email)){
        element.style.background = "Blue"; 
        mailVer = 1;  
    }
    else{
        element.style.background = "red";
        mailVer = 0;
    }
}

function verificarClave(element){
    let clave = document.getElementById("Clave").value;
    const contieneNum = /\d/;
    const contieneLetra =  /[a-zA-Z]/g;
    if (clave.length>8 && contieneNum.test(clave) && contieneLetra.test(clave)){
        element.style.background = "Blue"; 
        claveVer = 1;
    }
    else {element.style.background = "red"; 
    claveVer = 0;
}
}

function sonIguales(element){
    let clave = document.getElementById("Clave").value;
    let claveVerificar = document.getElementById("Confirmar").value;
    if(clave === claveVerificar){
        element.style.background = "Blue"; 
        comprobarVer = 1;
    }
    else{
        element.style.background = "Red";
        comprobarVer = 0;
    }
}

function verificar(){

        let Form =document.getElementById("Form");
        if(nombreVer == 1 && mailVer==1 && claveVer == 1 && comprobarVer == 1){
            Form.innerHTML = "<p>Son correctos</p>";
        }
        else Form.innerHTML = "<p>No son correctos</p>";
}