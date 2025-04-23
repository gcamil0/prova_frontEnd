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

function calcValue() {
    const table = document.getElementById('table');
    const tableItens = table.getElementsByTagName('tbody')[0];
    this.resultValue = document.querySelector('#result-number');

    const total = Array.from(tableItens.rows)
        .map(row => parseFloat(row.cells[1].textContent.replace("R$", "").trim()) || 0)
        .reduce((sum, valor) => sum + valor, 0);
        
        console.log(`Total de gastos: R$ ${total.toFixed(2)}`);

        this.resultValue.textContent = total;
}
