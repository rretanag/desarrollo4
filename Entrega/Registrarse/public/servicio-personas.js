const registrar_persona = async(pcedula, pcorreo, pnombre, pcedulax, pfechaNacimientox, ptelefonox, pcontrasenax, petiquetax) => {
    alert("ojo3333333333333333333");
    await axios({
        method: "post",
        url: "http://localhost:3000/api/registrar",
        responseType: "json",
        data: {
            //nombre:"11",
            //apellidos:"22",
            //email: "444444444443333333333333333"
            nombre:pcedula,
            apellidos:pcorreo,
            email:pnombre,
            cedula:pcedulax,
            fechaNacimiento:pfechaNacimientox,
            telefono:ptelefonox,
            contrasena:pcontrasenax,
            etiqueta:petiquetax


        }
    }).
    then((res) => {
        alert("ojo444444444444444");
        if (res.data.resultado == false) {
            switch (res.data.error.code) {
                case 11000:
                    Swal.fire({
                        title: "No se completo el registro",
                        text: "Ya existe un usuario con esa identificación",
                        icon: "warning"
                    });
                    break;


            }
        } else {
            Swal.fire({
                title: "Registro exitoso",
                text: "Persona guardad en BDx",
                icon: "success"
            });
        }
    }).
    catch((err) => {
        console.log(err);
    });

}

const listar_personas_BD = async() => {
    let lista_usuarios = [];

    await axios({
            method: "get",
            url: "http://localhost:3000/api/listar",
            responseType: "json",
        })
        .then((res) => {
            lista_usuarios = res.data.lista;
        })
        .catch((err) => {
            console.log(err);
        });
    
    alert("ojoFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
    alert(lista_usuarios);
    return lista_usuarios;
}


const obtener_persona_nombre = async(nombre) => {
    let persona666;
    alert("ojo555wwwwwwwwwwwwwwwwwwwww");
    alert(nombre);

    try {
        const respuesta = await axios({
            method: "get",
            params: { nombre: nombre },
            url: "http://localhost:3000/api/buscar-persona-nombre",
            responseType: "json"
        });
        persona666 = respuesta.data.persona;
        return persona666
    } catch (error) {
        console.log(error);
    }
}


const modificar_persona = async(pcedulax, pcorreox, pnombrex, p_idx, pcedulax1, pfechaNacimientox1, ptelefonox1, pcontrasenax1, petiquetax1) => {
    await axios({
        method: "put",
        url: "http://localhost:3000/api/modificar",
        responseType: "json",
        data: {
            nombre: pcedulax,
            apellidos: pcorreox,
            email: pnombrex,
            _id: p_idx,
            cedula: pcedulax1,
            fechaNacimiento: pfechaNacimientox1,
            telefono: ptelefonox1,
            contrasena: pcontrasenax1,
            etiqueta: petiquetax1
        }
    }).then((res) => {
        Swal.fire({
            title: "Actualización exitosa",
            text: "Usuario actualizado exitosamente",
            icon: "success"
            

        });
        window.location.href="platillos.html";

    }).then(() => {
        window.location.href = "platillos.html"
    }).catch((err) => {
        console.log(err);
    })
}

const eliminar_persona = async(pid) => {
    await axios({
        method: "delete",
        url: "http://localhost:3000/api/eliminar",
        data: {
            _id: pid
        },
        responseType: "json"
    }).then((res) => {
        Swal.fire({
            title: "Operación exitosa",
            text: "Usuario eliminado exitosamente",
            icon: "success"
        });
    }).then(() => {
        window.location.href = "inicio.html"
    }).catch((err) => {
        console.log(err);
    })
}



