//liga con el input de la indetificacion en el html
const inputNumTarjeta = document.getElementById("entry_numero_tarjeta");
const inputFechaExpiracion = document.getElementById("fecha_expiracion");
const inputcvv = document.getElementById("cvv");

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
    //alert("Boton Presionado2");
    let error = false;
    //alert("Boton Presionado3");
    let texto_usuario = inputcvv.value;
    //alert("Boton Presionado4");
    
    let expresion_tarjeta = /[0-9]{3}/;
    //alert("Boton Presionado5");

    if (expresion_tarjeta.test(texto_usuario) == false) {
        error = true;
        inputNumTarjeta.classList.add("error");
    } else {
        inputNumTarjeta.classList.remove("error");
    }

    return error;
    
    
}

//validar fecha expiracion
function validarFechaExpiracion() {
    //alert("Boton Presionado2");
    let error = false;
    //alert("Boton Presionado3");
    let texto_usuario = inputFechaExpiracion.value;
    //alert("Boton Presionado4");
    
    let expresion_tarjeta = /^\d{2}-\d{4}$/;
    //alert("Boton Presionado5");

    if (expresion_tarjeta.test(texto_usuario) == false) {
        error = true;
        inputNumTarjeta.classList.add("error");
    } else {
        inputNumTarjeta.classList.remove("error");
    }

    return error;
    
    
}


//validar tarjeta
function validarTarjeta_visa_mastercard() {
    //alert("Boton Presionado2r");
    let error = false;
    //alert("Boton Presionado3r");
    let texto_usuario = inputNumTarjeta.value;
    //alert("Boton Presionado4r");
    //alert("Boton Presionado5r");
    //let expresion_tarjeta_visa_mastercard = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
    //alert("Boton Presionado6r");

    const num = texto_usuario;
    let expresion_tarjeta_visa_mastercard_primer_digito = String(num)[0];
    //alert(expresion_tarjeta_visa_mastercard_primer_digito);
    
    //&& expresion_tarjeta_visa_mastercard_primer_digito != 4 && expresion_tarjeta_visa_mastercard_primer_digito != 5
    if (expresion_tarjeta_visa_mastercard_primer_digito != 4 && expresion_tarjeta_visa_mastercard_primer_digito != 5 ) {
        error = true;
        inputNumTarjeta.classList.add("error");
    } else {
        inputNumTarjeta.classList.remove("error");
    }

    return error;
    
}


//validar tarjeta
function validarTarjeta_mastercard() {
    //alert("Boton Presionado2r");
    let error = false;
    //alert("Boton Presionado3r");
    let texto_usuario = inputNumTarjeta.value;
    //alert("Boton Presionado4r");
    //alert("Boton Presionado5r");
    let expresion_tarjeta_visa = /[5]{1}-[0-9]{4}-[0-9]{4}/;
    //alert("Boton Presionado6r");
    
    if (expresion_tarjeta_visa.test(texto_usuario) == false) {
        error = true;
        inputNumTarjeta.classList.add("error");
    } else {
        inputNumTarjeta.classList.remove("error");
    }

    return error;
    
}

//validar tarjeta
function validarTarjeta_visa() {
    //alert("Boton Presionado2z");
    let error = false;
    //alert("Boton Presionado3z");
    let texto_usuario = inputNumTarjeta.value;
    //alert("Boton Presionado4z");
    //alert("Boton Presionado5z");
    let expresion_tarjeta_visa = /[4]{1}-[0-9]{4}-[0-9]{4}/;
    //alert("Boton Presionado6z");
    
    if (expresion_tarjeta_visa.test(texto_usuario) == false) {
        error = true;
        inputNumTarjeta.classList.add("error");
    } else {
        inputNumTarjeta.classList.remove("error");
    }

    return error;
    
}

//validar tarjeta
function validarTarjeta() {
    //alert("Boton Presionado2");
    let error = false;
    //alert("Boton Presionado3");
    let texto_usuario = inputNumTarjeta.value;
    //alert("Boton Presionado4");
    let expresion_tarjeta = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
    //alert("Boton Presionado5");

    if (expresion_tarjeta.test(texto_usuario) == false) {
        error = true;
        inputNumTarjeta.classList.add("error");
    } else {
        inputNumTarjeta.classList.remove("error");
    }

    return error;
    
}

function enviar_informacion2() {
    //alert("Boton Presionado1");
    //Swal.fire('Any fool can use a computer');
    let error_campos_vacios = camposVacios();
    let error_num_tarjeta = validarTarjeta();
    let error_num_tarjeta_visa = validarTarjeta_visa();
    let error_num_tarjeta_mastercard = validarTarjeta_mastercard();
    let error_num_tarjeta_visa_mastercard = validarTarjeta_visa_mastercard();
    let error_fecha_expiracion = validarFechaExpiracion();
    let error_cvv = validarCvv();

    if (error_campos_vacios) {
        //alert("ojo1");
        swal.fire({
            
            incon:"warning",
            title:"Campos Vacios",
            text: "Los campos señalados son obligatorios"
        });

    } else if (error_num_tarjeta) {
        Swal.fire({
            icon: "warning",
            title: "Tarjeta inválida",
            text: "El formato permitido es 1111-1111-1111-1111"
        });
        
    } else if (error_num_tarjeta_visa_mastercard) {
        Swal.fire({
            icon: "warning",
            title: "Tarjeta inválida",
            text: "Solo se permite visa / mastercard"
        });

    } else if (error_fecha_expiracion) {
        Swal.fire({
            icon: "warning",
            title: "Fecha de expiracion inválida",
            text: "Fecha de expiracion inválida"
        });

    } else if (error_cvv) {
        Swal.fire({
            icon: "warning",
            title: "CVV inválido",
            text: "CVV inválido"
        });

    } else {
        //alert("ojo2");
        swal.fire({
            incon:"success",
            title:"Exito",
            text: "Registro Exitoso"
        });
    }


}