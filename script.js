let diasText = document.querySelector(".dias");
let horasText = document.querySelector(".horas");
let minutosText = document.querySelector(".minutos");
let segundosText = document.querySelector(".segundos");

const dataDoEvento = new Date('November 20 2022 12:00:00');

const atualizarContagem = () => {
    const horarioAtual = new Date();
    const diferencaDasDatasEmMilissegundos = dataDoEvento - horarioAtual;

    let dias = Math.floor(diferencaDasDatasEmMilissegundos / 1000 / 60 / 60 / 24);
    let horas = Math.floor(diferencaDasDatasEmMilissegundos / 1000 / 60 / 60) % 24;
    let minutos = Math.floor(diferencaDasDatasEmMilissegundos / 1000 / 60) % 60;
    let segundos = Math.floor(diferencaDasDatasEmMilissegundos / 1000) % 60;

    if (horarioAtual <= dataDoEvento) {
        let dias = Math.floor(diferencaDasDatasEmMilissegundos / 1000 / 60 / 60 / 24);
        let horas = Math.floor(diferencaDasDatasEmMilissegundos / 1000 / 60 / 60) % 24;
        let minutos = Math.floor(diferencaDasDatasEmMilissegundos / 1000 / 60) % 60;
        let segundos = Math.floor(diferencaDasDatasEmMilissegundos / 1000) % 60;

        diasText.textContent = dias;
        horasText.textContent = horas;
        minutosText.textContent = minutos;
        segundosText.textContent = segundos;
    } else {
        diasText.textContent = 0;
        horasText.textContent = 0;
        minutosText.textContent = 0;
        segundosText.textContent = 0;
    }
};

setInterval(atualizarContagem, 1000);