# 🔐 Sistema de Login com Node, React e MySQL

## 📌 Descrição
Este é um sistema de login simples e eficiente, desenvolvido utilizando **Node.js** para o backend, **React** para o frontend, e **MySQL** para o banco de dados. O sistema permite autenticação de usuários com e-mail e senha, e validação de token para segurança adicional.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - **React**: Biblioteca para a criação da interface do usuário.
  
- **Backend**:
  - **Node.js**: Ambiente de execução JavaScript para o backend.
  - **Express.js**: Framework para construção de APIs RESTful.
  
- **Banco de Dados**:
  - **MySQL**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar informações de login.
  - **Sequelize**: ORM (Object-Relational Mapping) utilizado para interagir com o banco de dados.

- **Outras Tecnologias**:
  - **JWT (JSON Web Tokens)**: Usado para autenticação e validação de tokens.
  - **Bcrypt**: Usado para criptografar senhas no banco de dados.

---

## 📦 Dependências

As dependências do projeto são as seguintes:

### Backend

- **bcrypt**: Para criptografar senhas.
- **cors**: Para permitir que o backend aceite requisições de diferentes origens.
- **dotenv**: Para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **express**: Framework para o servidor web.
- **jsonwebtoken**: Para criar e verificar tokens JWT.
- **mysql2**: Cliente MySQL para Node.js.
- **nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.
- **sequelize**: ORM para interagir com o banco de dados.
- **sqlite3**: Biblioteca para usar o banco de dados SQLite (caso deseje usar no lugar do MySQL).

---

## 🎯 Funcionalidades

- **Autenticação com e-mail e senha**: Os usuários podem se registrar e fazer login utilizando e-mail e senha.
  
- **Validação de token**: Após o login, o sistema gera um **token JWT** que é utilizado para autenticar futuras requisições, garantindo que apenas usuários autenticados possam acessar áreas protegidas.

---
