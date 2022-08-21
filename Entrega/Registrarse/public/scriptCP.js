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

function enviar_informacion2() {
    //alert("Boton Presionado1");
    //Swal.fire('Any fool can use a computer');
    let error_campos_vacios = camposVacios();

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