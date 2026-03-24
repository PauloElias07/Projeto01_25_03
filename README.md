# Projeto Site Institucional com Node.js

Este projeto consiste no desenvolvimento de um site institucional simples utilizando **HTML, CSS e Node.js**, com o objetivo de demonstrar conceitos básicos de **servidor HTTP, rotas e organização de arquivos em um projeto web**.

O site simula uma pequena aplicação com páginas institucionais e uma área de produtos.

---

## Tecnologias utilizadas

* HTML5
* CSS3
* Node.js
* Módulos nativos `http` e `fs`

---

## Estrutura do projeto

```
Projeto
│
├── Loja.js
├── index.html
│
├── Assets
│   └── style.css
│
├── Imagens
│   ├── Notebook.png
│   ├── Iphone.png
│   ├── Teclado.png
│   ├── Prods.png
│   ├── Interrogation.png
│   └── Doubt.png
│
├── Produtos
│   ├── principal.html
│   ├── prod1
│   │   └── iphone.html
│   ├── prod2
│   │   └── notebook.html
│   └── prod3
│       └── novo.html
│
├── QuemSou
│   └── quemSou.html
│
├── Perguntas
│   └── perguntas.html
│
└── Error
    └── 404.html
```

---

## Funcionalidades

* Página inicial do site
* Página de listagem de produtos
* Páginas individuais de produtos
* Página institucional "Quem Somos"
* Página de perguntas frequentes (FAQ)
* Página personalizada de erro 404
* Servidor HTTP criado com Node.js
* Rotas configuradas manualmente para navegação entre páginas

---

## Como executar o projeto

### 1️⃣ Instalar o Node.js

Faça o download do Node.js:
https://nodejs.org

### 2️⃣ Clonar o repositório

```
git clone https://github.com/PauloElias07/Projeto01_25_03.git
```

### 3️⃣ Acessar a pasta do projeto

```
cd suapasta
```

### 4️⃣ Executar o servidor

```
node Loja.js
```

### 5️⃣ Acessar no navegador

```
http://localhost:3000
```

---

## Objetivo do projeto

Este projeto foi desenvolvido com fins educacionais para praticar:

* criação de servidores com Node.js
* manipulação de arquivos com `fs`
* criação de rotas HTTP
* estruturação de projetos web
* estilização com CSS

---

## Autor

Paulo Roberto Santos Elias
