# API Express + MySQL + Docker

Projeto didático de Programação Web II: API REST de alunos com Express, MySQL e Docker Compose.

## Requisitos
- Node.js instalado
- Docker Desktop instalado e aberto
- Git (para publicar no GitHub, opcional)

## 1. Configurar variáveis
Copie `.env.example` para `.env`. No PowerShell:

```powershell
Copy-Item .env.example .env
```

## 2. Iniciar o MySQL
Na pasta do projeto:

```powershell
docker compose up -d
docker ps
```

O container deve aparecer como `mysql-api-rest`. O banco criado é `api_rest`, usuário `api_user`, senha didática `api123`.

## 3. Instalar dependências e iniciar API
```powershell
npm.cmd install
npm.cmd run dev
```

A API estará em `http://localhost:3000`.

## 4. Rotas CRUD
- `GET /alunos` — lista todos
- `GET /alunos/1` — busca pelo ID
- `POST /alunos` — cria aluno
- `PUT /alunos/1` — atualiza aluno
- `DELETE /alunos/1` — exclui aluno

Para POST/PUT, envie JSON como:
```json
{
  "nome": "Josué",
  "curso": "ADS"
}
```

## 5. Criar tabela manualmente (se necessário)
O arquivo `schema.sql` documenta a tabela. Se precisar executá-lo:

```powershell
docker exec -it mysql-api-rest mysql -u root -p
```

Senha: `root123`. Dentro do MySQL, cole os comandos do arquivo `schema.sql` (sem repetir `USE` se já estiver no banco).

## Comandos úteis
```powershell
docker compose ps
docker compose logs mysql
docker compose stop
docker compose start
docker compose down
```

`docker compose down -v` remove também o volume de dados; use somente se quiser apagar os dados do banco.
