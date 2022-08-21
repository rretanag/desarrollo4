let nombre=document.getElementById("nombre");
let Edad=document.getElementById("Edad");
let Especie= document.getElementById("Especie");
let Raza=document.getElementById("Raza")
let error= document.getElementById("error");

error.style.color="red";

var form=document.getElementById('registro');
    form.addEventListener('submit',function(evt){
         evt.preventDefault();
         var mensajesError=[];

         if(nombre.value === null || nombre.value ===''){
             mensajesError.push('Ingresa el nombre de la mascota',);
         }
         if(Edad.value === null || Edad.value ===''){
             mensajesError.push('Ingresa la edad de la mascota');
         }
         if(Especie.value === null || Especie.value ===''){
            mensajesError.push('Ingresa la especie de la mascota');
        }
        if(Raza.value === null || Raza.value ===''){
            mensajesError.push('Ingresa la raza de la mascota');
        }

         error.innerHTML=mensajesError.join('  ');
});