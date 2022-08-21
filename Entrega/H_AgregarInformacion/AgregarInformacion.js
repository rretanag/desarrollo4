let Diagnostico=document.getElementById("diagnosticoactual");
let Tratamiento=document.getElementById("Tratamientoactual");
let Recomendaciones= document.getElementById("Recomendacionesactual");
let Seguimiento=document.getElementById("Seguimiento");
let error= document.getElementById("error");
let error2= document.getElementById("error2");

error.style.color="red";
error2.style.color="red";

var form=document.getElementById('ActualCita');
    form.addEventListener('submit',function(evt){
         evt.preventDefault();
         var mensajesError=[];

         if(Diagnostico.value === null || Diagnostico.value ===''){
             mensajesError.push('Ingresa el diagnostico de la mascota',);
         }
         if(Tratamiento.value === null || Tratamiento.value ===''){
             mensajesError.push('Ingresa el tratamiento de la mascota');
         }
         if(Recomendaciones.value === null || Recomendaciones.value ===''){
            mensajesError.push('Ingresa la recomendaciones para la mascota');
        }

         error.innerHTML=mensajesError.join('  ');
});

var form=document.getElementById('Segui');
    form.addEventListener('submit',function(evet){
         evet.preventDefault();
        var mensajesError2=[];

         if(Seguimiento.value === null || Seguimiento.value ===''){
             mensajesError2.push('Debe rellenar el campo de "Seguimiento"',); 
           }
        error2.innerHTML=mensajesError2.join('  ');
});