USE api_rest;

CREATE TABLE IF NOT EXISTS alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    curso VARCHAR(100) NOT NULL
);

INSERT INTO alunos (nome, curso)
SELECT 'Bruno', 'ADS'
WHERE NOT EXISTS (SELECT 1 FROM alunos WHERE nome = 'Bruno' AND curso = 'ADS');

INSERT INTO alunos (nome, curso)
SELECT 'Maria', 'ADS'
WHERE NOT EXISTS (SELECT 1 FROM alunos WHERE nome = 'Maria' AND curso = 'ADS');
