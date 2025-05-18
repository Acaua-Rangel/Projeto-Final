# Desafio Angular - Dashboard FORD

Este projeto é o resultado do desafio proposto na **Sprint 07 de Angular** da formação em programação Front-End, que consiste na criação de um dashboard interativo para a empresa FORD, utilizando **Angular** e **TypeScript**.

## Objetivo

Desenvolver uma aplicação Angular com foco em componentes reativos e consumo de API REST, seguindo boas práticas de arquitetura e interatividade. O projeto simula um painel administrativo com funcionalidades de login, visualização de dados e gráficos relacionados aos veículos da empresa.

---

## Estrutura do Projeto

O projeto está dividido em dois diretórios principais:

- `web/`: Aplicação Angular responsável pelo front-end.
- `api-angular-ford/`: Back-end em Node.js fornecido para simulação da API REST.

---

## Funcionalidades

### Login
- Formulário de autenticação com validação simples.
- Usuário e senha fixos:  
  - **Usuário**: `admin`  
  - **Senha**: `123`

### Página Home
- Boas-vindas personalizadas.
- Opção de logout.
- Imagem de fundo.
- Link para o dashboard.

### Dashboard
- Campo de busca por modelo de veículo.
- Cartões com:
  - Total de vendas.
  - Veículos conectados.
  - Veículos com software atualizado.
- Imagem do veículo selecionado.
- Tabela com busca por código e exibição de dados detalhados.

---

## Tecnologias Utilizadas

- [Angular CLI 19.2.7](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://rxjs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Concurrently](https://www.npmjs.com/package/concurrently)

---

## Instalação e Execução

1. **Clone este repositório:**

```bash
git clone https://github.com/Acaua-Rangel/Desafio-Angular.git
cd Desafio-Angular
````

2. **Baixe e instale as dependências:**

```bash
npm run build:api       # Clona a API
npm run install         # Instala as dependências da API e do Front-end
```

3. **Inicie o projeto:**

```bash
npm run start           # Inicia simultaneamente a API e o front-end
```

* Acesse o front-end em: `http://localhost:4200`
* A API estará disponível em: `http://localhost:3001`

---

## Endpoints Utilizados

* `GET /vehicle`: Lista de veículos
* `GET /vehicleData`: Dados detalhados dos veículos

---

## Critérios Avaliados

* Uso correto de módulos, componentes e serviços Angular.
* Implementação de diretivas como `*ngIf`, `*ngFor`, `ngModel`.
* Integração com API REST.
* Utilização de RxJS com operadores como `map`, `filter`, `debounceTime`, etc.
* Boas práticas com TypeScript e Bootstrap.

---

## Observações

Este projeto foi desenvolvido com fins educacionais, com base na proposta da empresa FORD fornecida pela instituição.
