//liga con el input de la indetificacion en el html
const txtUser = document.getElementById("txtCedula");
const btnEnviar = document.querySelector("#btnEnviar");

//campos vacios
const validar_campos_vacios = () => {
    let error = false;
    let campos_requeridos = document.querySelectorAll("#Busqueda [required]");
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

const limpiar = () => {
    txtUser.value = "";
}

const enviar_datos = () => {
    let error_campos_vacios = validar_campos_vacios();
    let error_usuario = validar_usuario();


    if (error_campos_vacios) {
        Swal.fire({           
            icon:"warning",
            title:"Campos Vacios",
            text: "El campo señalado es obligatorio"
        });

    } else if (error_usuario) {
        Swal.fire({
            icon: "warning",
            title: "Usuario inválido",
            text: "El formato permitido es 1-1111-1111"
        });        

    } else {
        Swal.fire({
            icon:"success",
            title:"Exito",
            html: '<a href="/C_Secre_Calendar_Hotel/CalendarSecreHotel.html">Click</a>'
        });

        limpiar();
    }


}


btnEnviar.addEventListener("click", enviar_datos);

"use strict";