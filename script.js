const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "As áreas rurais têm uma população mais concentrada que as áreas urbanas? ",

        alternativas: [
            {
                texto: "Verdadeiro",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Falso",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual a porcentagem da população brasileira que vive em área rural, segundo o MDA?",
        alternativas: [
            {
                texto: "62%",
                afirmacao: "Falso"
            },
            {
                texto: "36%",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "24%",
                afirmacao: "Falso"
            },
            {
                texto: "16%",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "As áreas rurais são mais propensas a ter paisagens naturais preservadas?",
        alternativas: [
            {
                texto: "Verdadeiro",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Falso",
                afirmacao: "Falso"
            }     
        ]
    },
    {
        enunciado: "Qual das alternativas não é considerada uma produção em área rural?",
        alternativas: [
            {
                texto: "Agricultura",
                afirmacao: "Falso"
            },
            {
                texto: "Pecuária",
                afirmacao: "Falso"
            },
            {
                texto: "Extrativismo",
                afirmacao: "Falso"
            },
            {
                texto: "Comércio",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "As áreas rurais são mais propensas a ter uma qualidade de ar melhor?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Não",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual é o nome dado ao movimento migratório em que a pessoa se desloca da área urbana para a rural?",
        alternativas: [
            {
                texto: "Sedentarismo",
                afirmacao: "Falso"
            },
            {
                texto: "Êxodo rural",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Migração",
                afirmacao: "Falso"
            },
            {
                texto: "Êxodo urbano",
                afirmacao: "Falso"
            }
        ]
    },    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    if (contagemAfirmacoes == {}) {
        caixaPerguntas.textContent = "Parabéns pela tentativa. De 6 questões, você acertou: ";
        const afimMaisEscolhida = Object.keys(contagemAfirmacoes).reduce((a, b) => contagemAfirmacoes[a] > contagemAfirmacoes[b] ? a : b);
        textoResultado.textContent = contagemAfirmacoes['Verdadeiro'];
        caixaAlternativas.textContent = "";
    } else {
        caixaPerguntas.textContent = "Parabéns pela tentativa. De 6 questões, você acertou: ";
        const afimMaisEscolhida = Object.keys(contagemAfirmacoes).reduce((a, b) => contagemAfirmacoes[a] > contagemAfirmacoes[b] ? a : b);
        textoResultado.textContent = 0;
        caixaAlternativas.textContent = "";
    }

}