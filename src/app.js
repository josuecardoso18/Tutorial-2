const express = require('express');
const alunosRoutes = require('./routes/alunos.routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'API Express + MySQL funcionando',
    endpoints: '/alunos'
  });
});

app.use('/alunos', alunosRoutes);

app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ erro: 'Erro interno do servidor' });
});

module.exports = app;
