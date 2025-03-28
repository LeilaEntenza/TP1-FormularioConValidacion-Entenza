var nombreVer=0, mailVer=0, claveVer=0, comprobarVer=0;
var usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
let cambiar=document.getElementById('cambiar');
let labelCambiar = document.getElementById('labelCambiar');
cambiar.addEventListener('change',(event)=>{
    let checked=event.target.checked;
    document.querySelector('form').classList.toggle('dark');
    if(checked==true){
        labelCambiar.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M11 5V1h2v4zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425zM19 13v-2h4v2zm-8 10v-4h2v4zM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75zM1 13v-2h4v2zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7zM12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18"/></svg>';
    }
    else{
        labelCambiar.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M9.272 2.406a1 1 0 0 0-1.23-1.355C6.59 1.535 5.432 2.488 4.37 3.55a11.4 11.4 0 0 0 0 16.182c4.518 4.519 11.51 4.261 15.976-.205c1.062-1.062 2.014-2.22 2.498-3.673A1 1 0 0 0 21.55 14.6c-3.59 1.322-7.675.734-10.433-2.025C8.35 9.808 7.788 5.744 9.272 2.406"/></svg>';
    }
})

const verificarNombre = (element) => {
    let nombre = document.getElementById('NombreCompleto').value;
    let devolucion = document.getElementById("devolucionNombre");
    if(nombre.length > 3){
        nombreVer = 1;
        devolucion.innerHTML = '<img width="5%" src="images/Correcto.png">';
    }
    else {
        devolucion.innerHTML = `<img width="4%" src="images/Mal.png"> el nombre debe contener más de 3 caracteres`;
        nombreVer = 0;
    }
}

const verificarMail = (element) =>{
    let email = document.getElementById("Email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let devolucion = document.getElementById("devolucionMail");
    if(emailRegex.test(email)){
        devolucion.innerHTML = '<img width="5%" src="images/Correcto.png">';
        mailVer = 1;  
    }
    else{
        devolucion.innerHTML = `<img width="4%" src="images/Mal.png"> el formato no es correcto`;
        mailVer = 0;
    }
}

const verificarClave = (element) =>{
    let clave = document.getElementById("Clave").value;
    let devolucion = document.getElementById("devolucionContra");
    const contieneNum = /\d/;
    const contieneLetra =  /[a-zA-Z]/g;
    if (clave.length>8 && contieneNum.test(clave) && contieneLetra.test(clave)){
        devolucion.innerHTML = '<img width="5%" src="images/Correcto.png">';
        claveVer = 1;
    }
    else {
        devolucion.innerHTML = `<img width="4%" src="images/Mal.png"> la contraseña debe contener al menos 8 caracteres, 1 número y una letra`;
        claveVer = 0;
    }
    sonIguales();
}

const sonIguales = (element) => {
    let devolucion = document.getElementById("devolucionIguales");
    let clave = document.getElementById("Clave").value;
    let claveVerificar = document.getElementById("Confirmar").value;
    if(clave === claveVerificar){
        devolucion.innerHTML = '<img width="5%" src="images/Correcto.png">';
        comprobarVer = 1;
    }
    else{
        devolucion.innerHTML = `<img width="4%" src="images/Mal.png"> las contraseñas no son iguales`;
        comprobarVer = 0;
    }
}

const verificar = () => {
        let nombre = document.getElementById('NombreCompleto').value;
        let email = document.getElementById("Email").value;
        let clave = document.getElementById("Clave").value;
        let Form =document.getElementById("Form");
        let devolucion = document.getElementById("intentoRegistrar");
        if(nombreVer == 1 && mailVer==1 && claveVer == 1 && comprobarVer == 1){
            let usuario = {
                Nombre: nombre,
                Email: email,
                Clave: clave 
            }
            usuarios.push(usuario);
            localStorage.setItem("Usuarios", JSON.stringify(usuarios));
            mostrarUsuarios();
        }
        else devolucion.innerHTML = "por favor, complete los datos correctamente antes de enviar";
}

const mostrarUsuarios = () => {
    var nombres = [];
    let mostrar = document.getElementById("mostrar");
    let mostrarInput = document.getElementById("usuarios");
    mostrarInput.value = "Ocultar usuarios";
    mostrarInput.setAttribute("onclick", "ocultarUsuarios()");    
    if(usuarios != null){
        
        for (let i = 0; i < usuarios.length; i++){
            nombres+=`<li>${usuarios[i].Nombre} <img width="7%" onclick="borrar(${i})" src="images/Tacho.png"></li>`;
        }
        mostrar.innerHTML = `<h1>Usuarios registrados:</h1><ul>${nombres}</ul>`;
        
    }
}

const mostrarContra = (campo) => {
    let clave = document.querySelector(`${campo}`);
    if(clave.type === "password"){
        clave.type = "text";
    }
    else clave.type = "password";
}

const ocultarUsuarios = () => {
    let mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = "";

    let mostrarInput = document.getElementById("usuarios");
    mostrarInput.value = "Mostrar usuarios";
    mostrarInput.setAttribute("onclick", "mostrarUsuarios()");
}

const borrar = (indice) => {
    usuarios.splice(indice, 1);
    localStorage.setItem("Usuarios", JSON.stringify(usuarios));
    mostrarUsuarios();
}