//liga con el input de la indetificacion en el html
const inputNumTarjeta = document.getElementById("plato99");
const inputFechaExpiracion = document.getElementById("ingredientes99");
const inputcvv = document.getElementById("costo99");
///////////////////////////////////////////////////////////////////////////////////
const inputcedulax = document.getElementById("costo991");
const inputfechaNacimientox = document.getElementById("costo992");
const inputtelefonox = document.getElementById("costo993");
const inputcontrasenax = document.getElementById("costo994");
const inputetiquetax = document.getElementById("costo995");
///////////////////////////////////////////////////////////////////////////////////

let nombre22 = localStorage.getItem("nombre");
//console.log(nombre22);
alert("###########################################");
alert(nombre22);

let _id;

const llenar_campos = async() => {
    let persona999 = await obtener_persona_nombre(nombre22);

    _id = persona999[0]._id;

    //console.log(persona999);
    //console.log(persona999[0].foto);
    inputNumTarjeta.value = persona999[0].nombre;
    inputFechaExpiracion.value = persona999[0].apellidos;
    inputcvv.value = persona999[0].email;
    inputcedulax.value = persona999[0].cedula;
    inputfechaNacimientox.value = persona999[0].fechaNacimiento;
    inputtelefonox.value = persona999[0].telefono;
    inputcontrasenax.value = persona999[0].contrasena;
    inputetiquetax.value = persona999[0].etiqueta;

}


//campos vacios
function camposVacios2() {
    alert("ojo0 KAMPOS VACIOS");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor1 [required]");
    for (let i = 0; i < campos_requeridos.length; i++) {
        if (campos_requeridos[i].value == "") {
            error = true;
            campos_requeridos[i].classList.add("error");
            campos_requeridos[i].style.border = 'solid 2px orange';

        } else {
            campos_requeridos[i].classList.remove("error");
            campos_requeridos[i].style.border = 'solid 1px black';

        }
    }
    return error;
}

//validar cvv
function validarCvv2() {
    alert("ojo0 KORREO");
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
function validarCedula2() {
    alert("ojo0 CEDULA");
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
function validarTelefono2() {
    alert("ojo0 TELEFONO");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor1 [required]");
    //alert("Boton Presionado3");
    let texto_usuario = inputtelefonox.value;
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
function validarClave2() {
    alert("ojo0 KLAVE");
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

function enviar_informacion222() {
    alert("ojo0 INFORMACION222");
    //Swal.fire('Any fool can use a computer');
    let error_campos_vacios2 = camposVacios2();
    let error_cvv2 = validarCvv2();
    let error_cedula2 = validarCedula2();
    let error_telefono2 = validarTelefono2();
    let error_clave2 = validarClave2();

    if (error_campos_vacios2) {
        alert("ojo1FFFFF");
        swal.fire({
            
            incon:"warning",
            title:"Campos Vacios",
            text: "Los campos señalados son obligatorios"
        });

    } else if (error_cvv2) {
        Swal.fire({
            icon: "warning",
            title: "Email inválido",
            text: "Email inválido"
        });

    } else if (error_cedula2) {
        Swal.fire({
            icon: "warning",
            title: "Cedula inválida",
            text: "Cedula inválida"
        });

    } else if (error_telefono2) {
        Swal.fire({
            icon: "warning",
            title: "Telefono inválido",
            text: "Telefono inválido"
        });

    } else if (error_clave2) {
        Swal.fire({
            icon: "warning",
            title: "Clave inválida",
            text: "Clave inválida"
        });

    } else {
        alert("ojo2kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
        
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

        modificar_persona(nombrex, apellidosx, emailx, _id, cedulax, fechaNacimientox, telefonox, contrasenax, etiquetax);

        swal.fire({
            incon:"success",
            title:"Exito",
            text: "Registro Exitoso"
            //document,getElementById("entry_nombre_tarjeta").value = "";
            //document,getElementById("entry_numero_tarjeta").value = "";
            //document,getElementById("cvv").value = "";
            
            
        });
    }


}

const eliminar = () => {
    eliminar_persona(_id);
}


llenar_campos();



