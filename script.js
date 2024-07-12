const formulario = document.querySelector("#formulario");
const texto = document.querySelector("#texto");
const lista_resultado = document.querySelector("#lista_resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    // Criação dos elementos
    const novo_item = document.createElement("li");
    const checkbox = document.createElement("input");
    const novo_elemento = document.createElement("span");
    const botao_excluir = document.createElement("button");

    // Configuração do checkbox
    checkbox.type = "checkbox";
    novo_item.appendChild(checkbox);

    // Configuração do span com o texto digitado
    novo_elemento.textContent = texto.value;
    novo_item.appendChild(novo_elemento);

    // Configuração do botão de excluir
    botao_excluir.textContent = "Excluir";
    botao_excluir.addEventListener("click", () => {
        novo_item.remove(); // Remove o li quando o botão é clicado
    });
    novo_item.appendChild(botao_excluir);

    // Adiciona o novo item à lista
    lista_resultado.appendChild(novo_item);

    // Limpa o campo de texto e foca nele novamente
    texto.value = "";
    texto.focus();
});