document.addEventListener("DOMContentLoaded", getAllSalasTable);

function getAllSalasTable() {
  fetch("http://localhost:5000/api/v1/sala", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    // then é usado para tratar respostas
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      const salaList = document.getElementById("sala-list-tabela");
      // Limpa a lista antes de adicionar novos itens
      salaList.innerHTML = "";

      // Verifica se há usuarios retornados e os adiciona à tabela
      data.salas.forEach((sala) => {
        // cria uma nova linha
        const tr = document.createElement("tr");
        // cria células para nome, cpf e email

        const tdhorarios_disponiveis = document.createElement("td");
        tdhorarios_disponiveis.textContent = sala.horarios_disponiveis;
        tr.appendChild(tdhorarios_disponiveis);

        const tdclassificacao = document.createElement("td");
        tdclassificacao.textContent = sala.classificacao;
        tr.appendChild(tdclassificacao);

        const tdbloco = document.createElement("td");
        tdbloco.textContent = sala.bloco;
        tr.appendChild(tdbloco);

        // Adiciona a linha à tabela
        salaList.appendChild(tr);
      });
    })
    .catch((error) => {
      alert("Erro ao obter salas: " + error.message);
    });
}
