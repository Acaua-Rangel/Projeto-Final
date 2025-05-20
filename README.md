# Projeto Final - FORD Enter

**Projeto Final — Programa Ford Enter | Front-End Angular**

Este repositório apresenta o **Ford Experience**, um projeto desenvolvido como **atividade final do programa Ford Enter**, com foco em **desenvolvimento Front-End utilizando Angular**. A aplicação simula um painel moderno e interativo voltado à experiência digital de usuários da Ford, com funcionalidades reais de autenticação, visualização de veículos, comparação entre modelos e contato com a empresa.

---

## Objetivo do Projeto

O objetivo principal foi aplicar, de forma prática, os conhecimentos adquiridos ao longo da formação, utilizando tecnologias modernas como Angular, HTML, CSS, JavaScript, TypeScript e metodologias ágeis como **Scrum**.

Além disso, o projeto aborda aspectos importantes da **LGPD (Lei Geral de Proteção de Dados)**, como exibição de termos de uso e política de privacidade, garantindo uma navegação segura e transparente para os usuários.

---

## Funcionalidades

* **Login com autenticação simulada**

  * Usuário: `admin`
  * Senha: `123456`

* **Página Inicial personalizada**

  * Boas-vindas ao usuário logado
  * Botão de acesso aos modelos
  * Interface limpa, responsiva e intuitiva

* **Visualização de veículos**

  * Modelos em destaque
  * Consulta por nome ou código
  * Dados detalhados (software, conectividade, vendas)

* **Comparação entre veículos**

  * Seleção dinâmica de dois veículos
  * Visualização lado a lado de suas especificações

* **Termos de Uso e Política de Privacidade**

  * Informações claras sobre tratamento de dados
  * Alinhado à LGPD

* **Formulário de Contato**

  * Envio de dúvidas e sugestões
  * Validação de campos

---

## Tecnologias e Ferramentas

* [Angular 19.2.7](https://angular.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [RxJS](https://rxjs.dev/)
* [Bootstrap](https://getbootstrap.com/)
* [Node.js + Express (API simulada)](https://expressjs.com/)
* [Git e GitHub](https://github.com/)
* Metodologias Ágeis com **Scrum**

---

## Estrutura do Projeto

```
Desafio-Angular/
├── web/                 # Front-end Angular
└── api/    # API REST simulada com Node.js
```

---

## Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/Acaua-Rangel/Desafio-Angular.git
cd Desafio-Angular
```

2. **Instale as dependências:**

```bash
npm run install         # Instala dependências da API e do Front-end
```

3. **Inicie a aplicação:**

```bash
npm run start           # Roda simultaneamente a API e o front-end
```

* Acesse a interface: `http://localhost:4200`
* API disponível em: `http://localhost:3001`

---

## Endpoints Utilizados

* `GET /vehicle` → Listagem dos modelos
* `GET /vehicleData` → Informações detalhadas dos veículos

---

## Critérios Técnicos

* Uso adequado de módulos, componentes e serviços no Angular
* Diretivas Angular: `*ngIf`, `*ngFor`, `ngModel`, etc.
* Boas práticas com RxJS: `map`, `filter`, `debounceTime`
* Componentização e organização do código
* Validação de formulários
* Design responsivo e acessível

---

## Considerações Finais

Este projeto foi desenvolvido com fins educacionais, como parte do programa **Ford Enter**, simulando uma solução real para uma montadora de veículos. A base de dados foi fornecida pela **API de Benjamim**, e toda a lógica e interface foram implementadas com os conhecimentos adquiridos no curso.

> O Ford Experience representa a aplicação prática de tudo o que aprendi em **HTML, CSS, JavaScript, Angular, GitHub e metodologias ágeis**, incluindo aspectos de usabilidade, acessibilidade, privacidade e performance.
