//liga con el input de la indetificacion en el html
const txtUser = document.getElementById("txtUser");
const txtPassword = document.getElementById("txtPassword");
const btnEnviar = document.querySelector("#btnEnviar");


////////////////////////////////yo

//campos vacios
function camposVacios777() {
    //alert("ojo0");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor [required]");
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

//validar cedula
function validarCedula777() {
    //alert("Boton Presionado2!!!!!!!!!!!");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor [required]");
    //alert("Boton Presionado3");
    let texto_usuario = txtUser.value;
    //alert("Boton Presionado4");
    //alert("a");
    //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
    let expresion_tarjeta = /[0-9]{1}-[0-9]{4}-[0-9]{4}/;
    //let expresion_tarjeta2 = /.com/;
    //alert("Boton Presionado5");
    //alert("b");
    
    if (expresion_tarjeta.test(texto_usuario) == false) {
        //alert("c1");
        error = true;
        //alert("c2");
        txtUser.classList.add("error");
        //alert("c3");
        campos_requeridos[0].style.border = 'solid 2px red';
        //alert("c4");
        
    } else {
        txtUser.classList.remove("error");
        campos_requeridos[0].style.border = 'solid 1px black';
        //alert("d");
    }

    //alert("x");
    return error;
    
    
}

//validar clave
function validarClave777() {
    //alert("Boton Presionado3!!!!!!!!!!!");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor [required]");
    //alert("Boton Presionado3");
    let texto_usuario = txtPassword.value;
    //alert("Boton Presionado4");
    //alert("d1");
    //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
    let expresion_tarjeta = /[0-9]{4}-[0-9]{4}/;
    //let expresion_tarjeta2 = /.com/;
    //alert("Boton Presionado5");
        
    //alert("d2");
    if (expresion_tarjeta.test(texto_usuario) == false) {
        //alert("d3");
        error = true;
        //alert("d4");
        txtPassword.classList.add("error");
        //alert("d5");
        campos_requeridos[1].style.border = 'solid 2px red';
        //alert("d6");
        
    } else {
        txtPassword.classList.remove("error");
        campos_requeridos[1].style.border = 'solid 1px black';
    }

    return error;
    
    
}


const validarDb = async() => {
    alert("x1");

    let listado_de_usuarios = [];
    
    //liga con el input de la indetificacion en el html
    const txtUser2 = document.getElementById("txtUser");
    const txtPassword2 = document.getElementById("txtPassword");

    alert("x2");

    listado_de_usuarios = await listar_personas_BD();

    alert("x3");

    for (let i = 0; i < listado_de_usuarios.length; i++) {
        let cedulaDb = listado_de_usuarios[i]["cedula"]
        let claveDb = listado_de_usuarios[i]["contrasena"]
        let tipoDb = listado_de_usuarios[i]["etiqueta"]

        alert("x4 ");
        //alert(txtUser2, cedulaDb, "|", claveDb, txtPassword2, "|", etiqueta);

        if (txtUser2.value == cedulaDb && txtPassword2.value == claveDb && tipoDb == "Admin") {

            alert("FOUND Admin!");
            window.location.href = "../../Admin_Menu/Admin_Menu.html"
            break;
    
        } else if (txtUser2.value == cedulaDb && txtPassword2.value == claveDb && tipoDb == "Doctor") {

            alert("FOUND Doctor!");
            window.location.href = "../../H_Doctor/Interfaz_Doctor.html"
            break;
    
        } else if (txtUser2.value == cedulaDb && txtPassword2.value == claveDb && tipoDb == "Usuario") {

            alert("FOUND Usuario!");
            window.location.href = "../../H_Cliente/Interfaz_cliente.html"
            break;
    
        } else if (txtUser2.value == cedulaDb && txtPassword2.value == claveDb && tipoDb == "Secretaria") {

            alert("FOUND Secretaria!");
            window.location.href = "../../C_Main_Secretaria/MainSecre.html"
            break;
    
        } else {

            alert("NOT!");
            //window.location.href = "landingPageCliente.html"
        }

        alert("x5");


    }



    alert("x99");

};



function enviar_informacion777() {

    

    //alert("Boton Presionado1FFFFFFFFFFFF");
    //Swal.fire('Any fool can use a computer');
    let error_campos_vacios = camposVacios777();
    let error_cedula = validarCedula777();
    let error_clave = validarClave777();

    if (error_campos_vacios) {
        //alert("ojo1");
        swal.fire({
            
            incon:"warning",
            title:"Campos Vacios",
            text: "Los campos señalados son obligatorios"
        });

    } else if (error_cedula) {
        //alert("ojo2");
        Swal.fire({
            icon: "warning",
            title: "Cedula inválida",
            text: "Cedula inválida"
        });

    } else if (error_clave) {
        //alert("ojo3");
        Swal.fire({
            icon: "warning",
            title: "Clave inválida",
            text: "Clave inválida"
        });

    } else {
        //alert("ojo2");
        
        //let nombrex = inputNumTarjeta.value;
        //let apellidosx = inputFechaExpiracion.value;
        //let emailx = inputcvv.value;

        ///////////////////////////////////////////////////////////////////////////////////
        //let cedulax = inputcedulax.value;
        //let fechaNacimientox = inputfechaNacimientox.value;
        //let telefonox = inputtelefonox.value;
        //let contrasenax = inputcontrasenax.value;
        //let etiquetax = inputetiquetax.value;
        ///////////////////////////////////////////////////////////////////////////////////

        //let nombrex = "w";
        //let apellidosx = "w";
        //let emailx = "1111";

        //let cedulax = "w";
        //let fechaNacimientox = "w";
        //let telefonox = "w";
        //let contrasenax = "w";
        //let etiquetax = "w";

        //registrar_persona(nombrex, apellidosx, emailx, cedulax, fechaNacimientox, telefonox, contrasenax, etiquetax);

        swal.fire({
            incon:"success",
            title:"Exito",
            text: "Se pudo iniciar sesion",
            //document,getElementById("entry_nombre_tarjeta").value = "";
            //document,getElementById("entry_numero_tarjeta").value = "";
            //document,getElementById("cvv").value = "";
            
            
            
        });

        validarDb();
    }

    

}




////////////////////////////////yo