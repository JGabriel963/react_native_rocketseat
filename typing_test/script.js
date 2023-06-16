const texto = document.getElementById('texto')
const entrada = document.getElementById('entrada')
const reiniciar = document.getElementById('reiniciar')
const result = document.getElementById('resultado')
const historico = document.getElementById('historico')
const tema = document.getElementById('alterar-tema')

const sentences = [
    "Exemplo de texto para digitar.",
    "Outro exemplo de texto para digitar",
    "Mais um exemplo de texto para digitar",
    "Digite isso.",
    "Você pode digitar isso aqui.",
];

function newText() {
    const index = Math.floor(Math.random() * sentences.length)
    texto.textContent = sentences[index]
}

function updatText() {
    init();

    if (entrada.value === texto.textContent) {
        verificar();
    }
}

function init() {
    const statTest = JSON.parse(localStorage.getItem("testeEmAndamento"))


    if (!statTest) {
        localStorage.setItem("tempoInicial", new Date().getTime());
        localStorage.setItem("testeEmAndamento", true)
    }
}

function verificar() {
    const tempoFinal = new Date().getTime()
    const tempoInicial = Number(localStorage.getItem('tempoInicial'))
    const tempoGasto = (tempoFinal - tempoInicial) / 1000;

    result.textContent = `Parabéns! Você levou ${tempoGasto} segundos :)`

    addHistorico(texto.textContent, tempoGasto);

    localStorage.setItem("testeEmAndamento", false);
    entrada.value = "";
    newText();
}

function addHistorico(textoDigitado, tempo) {
    const itemHistorico = document.createElement('p')

    itemHistorico.textContent = `Texo "${textoDigitado}" - Tempo: ${tempo} segundos`

    historico.appendChild(itemHistorico);
}

function reiniciarTest() {
    entrada.value = "";
    result.textContent = "";
    newText();
    localStorage.setItem("testeEmAndamento", false);
    historico.innerHTML = "";
}

newText();
entrada.addEventListener('keyup', updatText)
reiniciar.addEventListener('click', reiniciarTest)
