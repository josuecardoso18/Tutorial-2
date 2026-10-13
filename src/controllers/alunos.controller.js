const service = require('../services/alunos.service');

function tratarErro(res, erro) {
  return res.status(erro.status || 500).json({
    erro: erro.status ? erro.message : 'Erro interno do servidor'
  });
}

async function listar(req, res) {
  try {
    res.status(200).json(await service.listarTodos());
  } catch (erro) {
    tratarErro(res, erro);
  }
}

async function buscar(req, res) {
  try {
    res.status(200).json(await service.buscarPorId(req.params.id));
  } catch (erro) {
    tratarErro(res, erro);
  }
}

async function criar(req, res) {
  try {
    const aluno = await service.criar(req.body);
    res.status(201).json(aluno);
  } catch (erro) {
    tratarErro(res, erro);
  }
}

async function atualizar(req, res) {
  try {
    res.status(200).json(await service.atualizar(req.params.id, req.body));
  } catch (erro) {
    tratarErro(res, erro);
  }
}

async function excluir(req, res) {
  try {
    await service.excluir(req.params.id);
    res.status(200).json({ mensagem: 'Aluno excluído com sucesso.' });
  } catch (erro) {
    tratarErro(res, erro);
  }
}

module.exports = { listar, buscar, criar, atualizar, excluir };
