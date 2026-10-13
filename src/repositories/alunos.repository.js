const db = require('../config/database');

async function listarTodos() {
  const [rows] = await db.execute(
    'SELECT id, nome, curso FROM alunos ORDER BY id'
  );
  return rows;
}

async function buscarPorId(id) {
  const [rows] = await db.execute(
    'SELECT id, nome, curso FROM alunos WHERE id = ?',
    [id]
  );
  return rows[0] || null;
}

async function criar({ nome, curso }) {
  const [result] = await db.execute(
    'INSERT INTO alunos (nome, curso) VALUES (?, ?)',
    [nome, curso]
  );
  return buscarPorId(result.insertId);
}

async function atualizar(id, { nome, curso }) {
  const [result] = await db.execute(
    'UPDATE alunos SET nome = ?, curso = ? WHERE id = ?',
    [nome, curso, id]
  );

  if (result.affectedRows === 0) return null;
  return buscarPorId(id);
}

async function excluir(id) {
  const [result] = await db.execute(
    'DELETE FROM alunos WHERE id = ?',
    [id]
  );
  return result.affectedRows > 0;
}

module.exports = { listarTodos, buscarPorId, criar, atualizar, excluir };
