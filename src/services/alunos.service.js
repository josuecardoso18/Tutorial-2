const repository = require('../repositories/alunos.repository');

function validarDados({ nome, curso }) {
  if (typeof nome !== 'string' || !nome.trim()) {
    const erro = new Error('O campo nome é obrigatório.');
    erro.status = 400;
    throw erro;
  }
  if (typeof curso !== 'string' || !curso.trim()) {
    const erro = new Error('O campo curso é obrigatório.');
    erro.status = 400;
    throw erro;
  }
}

function validarId(id) {
  const numero = Number(id);
  if (!Number.isInteger(numero) || numero < 1) {
    const erro = new Error('O ID deve ser um número inteiro positivo.');
    erro.status = 400;
    throw erro;
  }
  return numero;
}

async function listarTodos() {
  return repository.listarTodos();
}

async function buscarPorId(id) {
  const aluno = await repository.buscarPorId(validarId(id));
  if (!aluno) {
    const erro = new Error('Aluno não encontrado.');
    erro.status = 404;
    throw erro;
  }
  return aluno;
}

async function criar(dados) {
  validarDados(dados);
  return repository.criar({
    nome: dados.nome.trim(),
    curso: dados.curso.trim()
  });
}

async function atualizar(id, dados) {
  validarDados(dados);
  const aluno = await repository.atualizar(validarId(id), {
    nome: dados.nome.trim(),
    curso: dados.curso.trim()
  });
  if (!aluno) {
    const erro = new Error('Aluno não encontrado.');
    erro.status = 404;
    throw erro;
  }
  return aluno;
}

async function excluir(id) {
  const removido = await repository.excluir(validarId(id));
  if (!removido) {
    const erro = new Error('Aluno não encontrado.');
    erro.status = 404;
    throw erro;
  }
}

module.exports = { listarTodos, buscarPorId, criar, atualizar, excluir };
