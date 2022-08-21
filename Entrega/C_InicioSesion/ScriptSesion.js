//liga con el input de la indetificacion en el html
const txtUser = document.getElementById("txtUser");
const txtPassword = document.getElementById("txtPassword");
const btnEnviar = document.querySelector("#btnEnviar");

//campos vacios
const validar_campos_vacios = () => {
    let error = false;
    let campos_requeridos = document.querySelectorAll("#InicioSesion [required]");
    for (let i = 0; i < campos_requeridos.length; i++) {
        if (campos_requeridos[i].value == "") {
            error = true;
            campos_requeridos[i].classList.add("error");
            campos_requeridos[i].style.border = 'solid 2px red';

        } else {
            campos_requeridos[i].classList.remove("error");
            campos_requeridos[i].style.border = 'solid 1px black';

        }
    }
    return error;
}

const validar_usuario = () => {
    let error = false;
    let texto = txtUser.value;  
    let expresion = /[0-1]{1}-[0-9]{4}-[0-9]{4}/;
    if (expresion.test(texto) == false) {
        txtUser.classList.add("error");
        error = true;
    } else {
        txtUser.classList.remove("error");
    }
    return error;      
}

const validar_password = () => {
    let error = false;
    let texto = txtPassword.value;
    let expresion= /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if (expresion.test(texto) == false) {
        error = true;
        txtPassword.classList.add("error");
    } else {
        txtPassword.classList.remove("error");
    }

    return error;    
}

const limpiar = () => {
    txtUser.value = "";
    txtPassword.value = "";
}

const enviar_datos = () => {
    let error_campos_vacios = validar_campos_vacios();
    let error_usuario = validar_usuario();
    let error_password = validar_password();

    if (error_campos_vacios) {
        Swal.fire({           
            icon:"warning",
            title:"Campos Vacios",
            text: "Los campos señalados son obligatorios"
        });

    } else if (error_usuario) {
        Swal.fire({
            icon: "warning",
            title: "Usuario inválido",
            text: "El formato permitido es 1-1111-1111"
        });
        
    } else if (error_password) {
        Swal.fire({
            icon: "warning",
            title: "Contraseña inválida",
            html: 'La contraseña debe tener:<br>'+ 
            '<br>-Entre 8 y 16 caracteres.'+
            '<br>-Al menos un dígito (0-9).'+
            '<br>-Al menos una minúscula (a-z).'+ 
            '<br>-Al menos una mayúscula (A-Z).'+ 
            '<br>-Al menos un caracter no alfanumérico (@#!?)',
        });

    } else {
        Swal.fire({
            icon:"success",
            title:"Exito",
            html: 'Inicio de Sesion Exitoso <br>'+ '<a href="/C_Main_Secretaria/MainSecre.html">Main</a>'
        });

        limpiar();
    }


}


btnEnviar.addEventListener("click", enviar_datos);

"use strict";

const menu = document.getElementById("icono_menu");//icono
const contenedor_menu = document.getElementById("mobile")//vinculado con el meno mobil


/* toggle permite intercambiar entre clases*/
function desplegarMenuMovil (){
    contenedor_menu.classList.toggle("hidden");
}


menu.addEventListener("click", desplegarMenuMovil);