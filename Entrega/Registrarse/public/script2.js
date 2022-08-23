//liga con el input de la indetificacion en el html
const inputNumTarjeta = document.getElementById("plato99");
const inputFechaExpiracion = document.getElementById("ingredientes99");
const inputcvv = document.getElementById("costo99");
///////////////////////////////////////////////////////////////////////////////////
const inputcedulax = document.getElementById("txtNumero");
const inputfechaNacimientox = document.getElementById("date");
const inputtelefonox = document.getElementById("txtNumeroTelefono");
const inputcontrasenax = document.getElementById("txtcontra");
const inputetiquetax = document.getElementById("StudentGender");
///////////////////////////////////////////////////////////////////////////////////


//campos vacios
function camposVacios() {
    //alert("ojo0");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor1 [required]");
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

//validar cvv
function validarCvv() {
    //alert("Boton Presionado2!!!!!!!!!!!");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor1 [required]");
    //alert("Boton Presionado3");
    let texto_usuario = inputcvv.value;
    //alert("Boton Presionado4");
    
    //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
    let expresion_tarjeta = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]/;
    //let expresion_tarjeta2 = /.com/;
    //alert("Boton Presionado5");
        
    
    if (expresion_tarjeta.test(texto_usuario) == false) {
        error = true;
        inputNumTarjeta.classList.add("error");
        campos_requeridos[2].style.border = 'solid 2px red';
        
    } else {
        inputNumTarjeta.classList.remove("error");
        campos_requeridos[2].style.border = 'solid 1px black';
    }

    return error;
    
    
}

//&& expresion_tarjeta2 > 0

//validar cedula
function validarCedula() {
    //alert("Boton Presionado2!!!!!!!!!!!");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor1 [required]");
    //alert("Boton Presionado3");
    let texto_usuario = inputcedulax.value;
    //alert("Boton Presionado4");
    
    //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
    let expresion_tarjeta = /[0-9]{1}-[0-9]{4}-[0-9]{4}/;
    //let expresion_tarjeta2 = /.com/;
    //alert("Boton Presionado5");
        
    
    if (expresion_tarjeta.test(texto_usuario) == false) {
        error = true;
        inputNumTarjeta.classList.add("error");
        campos_requeridos[3].style.border = 'solid 2px red';
        
    } else {
        inputNumTarjeta.classList.remove("error");
        campos_requeridos[3].style.border = 'solid 1px black';
    }

    return error;
    
    
}


//validar telefono
function validarTelefono() {
    //alert("Boton Presionado2!!!!!!!!!!!");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor1 [required]");
    //alert("Boton Presionado3");
    let texto_usuario = txtNumeroTelefono.value;
    //alert("Boton Presionado4");
    
    //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
    let expresion_tarjeta = /[0-9]{4}-[0-9]{4}/;
    //let expresion_tarjeta2 = /.com/;
    //alert("Boton Presionado5");
        
    
    if (expresion_tarjeta.test(texto_usuario) == false) {
        error = true;
        inputNumTarjeta.classList.add("error");
        campos_requeridos[5].style.border = 'solid 2px red';
        
    } else {
        inputNumTarjeta.classList.remove("error");
        campos_requeridos[5].style.border = 'solid 1px black';
    }

    return error;
    
    
}

//validar clave
function validarClave() {
    //alert("Boton Presionado2!!!!!!!!!!!");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor1 [required]");
    //alert("Boton Presionado3");
    let texto_usuario = inputcontrasenax.value;
    //alert("Boton Presionado4");
    
    //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
    let expresion_tarjeta = /[0-9]{4}-[0-9]{4}/;
    //let expresion_tarjeta2 = /.com/;
    //alert("Boton Presionado5");
        
    
    if (expresion_tarjeta.test(texto_usuario) == false) {
        error = true;
        inputNumTarjeta.classList.add("error");
        campos_requeridos[6].style.border = 'solid 2px red';
        
    } else {
        inputNumTarjeta.classList.remove("error");
        campos_requeridos[6].style.border = 'solid 1px black';
    }

    return error;
    
    
}


function enviar_informacion2() {
    //alert("Boton Presionado1");
    Swal.fire('Any fool can use a computer');
    let error_campos_vacios = camposVacios();
    let error_cvv = validarCvv();
    let error_cedula = validarCedula();
    let error_telefono = validarTelefono();
    let error_clave = validarClave();

    if (error_campos_vacios) {
        //alert("ojo1");
        swal.fire({
            
            incon:"warning",
            title:"Campos Vacios",
            text: "Los campos señalados son obligatorios"
        });

    } else if (error_cvv) {
        Swal.fire({
            icon: "warning",
            title: "Email inválido",
            text: "Email inválido"
        });

    } else if (error_cedula) {
        Swal.fire({
            icon: "warning",
            title: "Cedula inválida",
            text: "Cedula inválida"
        });

    } else if (error_telefono) {
        Swal.fire({
            icon: "warning",
            title: "Telefono inválido",
            text: "Telefono inválido"
        });

    } else if (error_clave) {
        Swal.fire({
            icon: "warning",
            title: "Clave inválida",
            text: "Clave inválida"
        });

    } else {
        //alert("ojo2");
        
        let nombrex = inputNumTarjeta.value;
        let apellidosx = inputFechaExpiracion.value;
        let emailx = inputcvv.value;

        ///////////////////////////////////////////////////////////////////////////////////
        let cedulax = inputcedulax.value;
        let fechaNacimientox = inputfechaNacimientox.value;
        let telefonox = inputtelefonox.value;
        let contrasenax = inputcontrasenax.value;
        let etiquetax = inputetiquetax.value;
        ///////////////////////////////////////////////////////////////////////////////////

        //let nombrex = "w";
        //let apellidosx = "w";
        //let emailx = "1111";

        //let cedulax = "w";
        //let fechaNacimientox = "w";
        //let telefonox = "w";
        //let contrasenax = "w";
        //let etiquetax = "w";

        registrar_persona(nombrex, apellidosx, emailx, cedulax, fechaNacimientox, telefonox, contrasenax, etiquetax);

        swal.fire({
            incon:"success",
            title:"Exito",
            text: "Registro Exitoso1"
            //document,getElementById("entry_nombre_tarjeta").value = "";
            //document,getElementById("entry_numero_tarjeta").value = "";
            //document,getElementById("cvv").value = "";
            
        });
    }


}

