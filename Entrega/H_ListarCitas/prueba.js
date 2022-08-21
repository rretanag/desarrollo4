let nombre_meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let fecha_actual = new Date();
let dia_actual = fecha_actual.getDate();
let mes_numero = fecha_actual.getMonth();
let ano_actual = fecha_actual.getFullYear();

let fecha = document.getElementById("fecha");
let mes = document.getElementById('mes');
let ano = document.getElementById("ano");

let mes_previo = document.getElementById('mes_previo');
let mes_siguiente = document.getElementById('mes_siguiente');

mes.textContent = nombre_meses[mes_numero];
ano.textContent = ano_actual;

mes_previo.addEventListener('click',()=>lastmonth());
mes_siguiente.addEventListener('click',()=>nextmonth());

escribirmes(mes_numero);

function escribirmes(mes){
    for(let i = starday(); i>0 ; i--){
        fecha.innerHTML +=`<div>${gettotaldays(mes_numero-1)-(i)+1}</div>`;
    }
    
    for(let i=1; i<=gettotaldays(mes);i++){
        if(i===fecha_actual){
            fecha.innerHTML +=`<div id="hoy">${i}</div>`;
        }else{
            fecha.innerHTML +=`<div'>${i}</div>`;
            }

    }

}

function gettotaldays(mes){
    if (mes===-1)mes=11;
    if (mes==0||mes==2||mes==4||mes==6||mes==7||mes==9||mes==11){
        return 31;
    }else if(mes==3||mes==5||mes==8||mes==10){
        return 30;
    }else{
        isLeap()?29:28;
    }

}

function isLeap(){
    return (ano_actual%400===0);
    
}

function starday(){
    let star= new Date(ano_actual,mes_numero,1);
    return ((star.getDate()-1)===1)? 6: star.getDay()-1;
}

function lastmonth(){
    if (mes_numero!==0){
        mes_numero--;
    }else{
    mes_numero=11;
    ano_actual--;
    }
    setnewdate();

}

function nextmonth(){
    if (mes_numero!==11){
        mes_numero++;
    }else{
    mes_numero=0;
    ano_actual++;
    }
    setnewdate();
}

function setnewdate(){
    fecha_actual.setFullYear(ano_actual,mes_numero,dia_actual);
    mes.textContent= nombre_meses[mes_numero];
    ano.textContent=ano_actual.toString();
    fecha.textContent=""
    escribirmes(mes_numero)
}