
const alunos = [];

function adicionarAluno() {
    const aluno = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        ra: document.getElementById("ra").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        nascimento: document.getElementById("nascimento").value,
        endereco: document.getElementById("endereco").value,
        cidade: document.getElementById("cidade").value,
        uf: document.getElementById("uf").value,
        idade: document.getElementById("idade").value,
        curso: document.getElementById("curso").value,
        semestre: document.getElementById("semestre").value,
        genero: document.querySelector('input[name="genero"]:checked').value,
        observacoes: document.getElementById("observacoes").value,
    };

    alunos.push(aluno);
    atualizarTabela();
    document.getElementById("formAluno").reset();
}

function atualizarTabela() {
    const tbody = document.querySelector("#tabelaAlunos tbody");
    tbody.innerHTML = "";

    alunos.forEach((aluno, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.cpf}</td>
            <td>${aluno.ra}</td>
            <td>${aluno.email}</td>
            <td>${aluno.telefone}</td>
            <td>${aluno.nascimento}</td>
            <td>${aluno.endereco}</td>
            <td>${aluno.cidade}</td>
            <td>${aluno.uf}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.semestre}</td>
            <td>${aluno.genero}</td>
            <td>${aluno.observacoes}</td>
            <td>
                <button onclick="editarAluno(${index})">Editar</button>
                <button onclick="deletarAluno(${index})">Deletar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function editarAluno(index) {
    const aluno = alunos[index];
    document.getElementById("nome").value = aluno.nome;
    document.getElementById("cpf").value = aluno.cpf;
    document.getElementById("ra").value = aluno.ra;
    document.getElementById("email").value = aluno.email;
    document.getElementById("telefone").value = aluno.telefone;
    document.getElementById("nascimento").value = aluno.nascimento;
    document.getElementById("endereco").value = aluno.endereco;
    document.getElementById("cidade").value = aluno.cidade;
    document.getElementById("uf").value = aluno.uf;
    document.getElementById("idade").value = aluno.idade;
    document.getElementById("curso").value = aluno.curso;
    document.getElementById("semestre").value = aluno.semestre;
    document.querySelector(`input[name="genero"][value="${aluno.genero}"]`).checked = true;
    document.getElementById("observacoes").value = aluno.observacoes;

    alunos.splice(index, 1); // Remove o aluno atual para re-adicionar após edição
    atualizarTabela();
}

function deletarAluno(index) {
    alunos.splice(index, 1);
    atualizarTabela();
}
