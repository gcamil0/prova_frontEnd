function addLine() {
    const descriptionInput = document.getElementById("description");
    const categoryInput = document.getElementById("category");
    const valueInput = document.getElementById("value");
    const tabela = document.getElementById("table").getElementsByTagName('tbody')[0];

    const descricao = descriptionInput.value;
    const categoria = categoryInput.value;
    const valor = valueInput.value;

    const novaLinha = tabela.insertRow();
    const celDescription = novaLinha.insertCell();
    const celCategory = novaLinha.insertCell();
    const celValue = novaLinha.insertCell();

    celDescription.innerHTML = descricao;
    celCategory.innerHTML = categoria;
    celValue.innerHTML = valor;
}