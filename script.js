const dias = document.querySelector("#dias");
const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");



function contagem (){
    const moment = new Date("19 dec 2022");
    const dataAtual = new Date();

    const diferencaSegundos = (moment - dataAtual)/ 1000;
    const totalSegundos = Math.floor(diferencaSegundos % 60);
    const totalminutos = Math.floor((diferencaSegundos / 60) % 60);
    const totalhoras = Math.floor((diferencaSegundos / 60) % 24);
    const totaldias = Math.floor((diferencaSegundos / (60*60)) / 24);

    dias.innerHTML = formatTime(totaldias);
    horas.innerHTML = formatTime(totalhoras);
    minutos.innerHTML = formatTime(totalminutos);
    segundos.innerHTML = formatTime(totalSegundos);

}

function formatTime(time){
    var timer = time < 10 ? `0${time}`: time;
    return timer
}

alert("Eu sei que está morrendo de Saudades!")

setInterval(contagem,1000)


