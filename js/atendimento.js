function enviarRequisicao(url, metodo, dados = null) {
    const opcoes = {
        method: metodo,
        headers: { "Content-Type": "application/json" },
    };

    if (dados) opcoes.body = JSON.stringify(dados);

    return fetch(url, opcoes)
        .then((resposta) => {
            if (!resposta.ok) {
                return resposta.json().then((erro) => {
                    throw new Error(erro.message || "Erro na requisição");
                });
            }
            return resposta.json();
        })
        .catch((erro) => {
            console.error(`Erro (${metodo}) em ${url}:`, erro);
            throw erro;
        });
}
function obterDadosAtendimento() {
    return {
        nome: document.getElementById("nome").value,
        idPaciente: document.getElementById("IdPaciente").value,
        idProfessor: document.getElementById("IdProfessor").value,
        data: document.getElementById("Data").value,
        realizado: document.getElementById("done").value === "true",
        dataRetorno: document.getElementById("DataDeRetorno").value || null,
        descricao: document.getElementById("descricao").value,
    };
}
function adicionarAtendimento() {
    enviarRequisicao("https://fasiclin-backend.vercel.app/", "POST", obterDadosAtendimento())
        .then(() => {
            alert("Atendimento adicionado com sucesso!");
            listarAtendimentos();
        })
        .catch(() => {
            alert("Erro ao adicionar atendimento.");
        });
}
function listarAtendimentos() {
    enviarRequisicao("https://fasiclin-backend.vercel.app/", "GET")
        .then((atendimentos) => {
            const tabela = document.getElementById("listaAtendimentos");
            tabela.innerHTML = atendimentos
                .map(
                    (atendimento) => `
                    <tr>
                        <td>${atendimento.id}</td>
                        <td>${atendimento.nome_completo}</td>
                        <td>${atendimento.id_paciente}</td>
                        <td>${atendimento.id_professor}</td>
                        <td>${atendimento.data_hora}</td>
                        <td>${atendimento.realizado ? "Sim" : "Não"}</td>
                        <td>${atendimento.data_retorno || "N/A"}</td>
                        <td>${atendimento.descricao}</td>
                        <td>
                            <button onclick="editarAtendimento(${atendimento.id})">Editar</button>
                            <button onclick="deletarAtendimento(${atendimento.id})">Deletar</button>
                        </td>
                    </tr>`
                )
                .join("");
        })
        .catch(() => {
            alert("Erro ao listar atendimentos.");
        });
}
function atualizarAtendimento(id) {
    enviarRequisicao(`${id}`, "PUT", obterDadosAtendimento())
        .then(() => {
            alert("Atendimento atualizado com sucesso!");
            listarAtendimentos();
        })
        .catch(() => {
            alert("Erro ao atualizar atendimento.");
        });
}
