const pagina_atual = window.location.pathname.split("/").pop();

if (pagina_atual.includes("bloco")) {
  const bloco = pagina_atual.split(".")[0]; // Extrai "blocoA", "blocoB", etc.
  document.addEventListener("DOMContentLoaded", () => getBloco(bloco));
}

function getBloco(bloco) {
  fetch(`http://localhost:5000/Agenda-Senai/api/v1/${bloco}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      const lista_salas = document.getElementById(`tabela-${bloco}`);
      lista_salas.innerHTML = "";
      data.sala.forEach((sala) => {
        const tr = document.createElement("tr");
        const td_nome = document.createElement("td");
        td_nome.textContent = sala.nome_sala;
        tr.appendChild(td_nome);

        const descricao_sala = document.createElement("td");
        descricao_sala.textContent = sala.descricao_sala;
        tr.appendChild(descricao_sala);

        const capacidade = document.createElement("td");
        capacidade.textContent = sala.capacidade;
        tr.appendChild(capacidade);

        lista_salas.appendChild(tr);
      });
    })
    .catch((error) => {
      alert(`Erro ao obter a lista das salas: ${error.message}`);
      console.error("Erro: ", error.message);
    });
}
