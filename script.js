// Lista de dicas
const dicas = [
    "Beba pelo menos 2 litros de água por dia.",
    "Durma 8 horas por noite para manter sua mente saudável.",
    "Pratique pelo menos 30 minutos de atividade física diariamente.",
    "Evite alimentos ultraprocessados e prefira naturais.",
    "Medite por 10 minutos para aliviar o estresse.",
    "Mantenha contato com a natureza sempre que possível.",
    "Faça pausas durante o trabalho para relaxar a mente."
];

// Função para mostrar uma dica aleatória
function mostrarDica() {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    const dicaSelecionada = dicas[indiceAleatorio];
    document.getElementById("dica").textContent = dicaSelecionada;
}

// Captura o envio do formulário
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formDica");
    const resposta = document.getElementById("resposta");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o recarregamento da página

        const input = form.querySelector("input");
        const valor = input.value.trim();

        if (valor !== "") {
            resposta.textContent = `Obrigado por sua dica: "${valor}"`;
            input.value = ""; // Limpa o campo
        } else {
            resposta.textContent = "Por favor, escreva uma dica antes de enviar.";
        }
    });
});
