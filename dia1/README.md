# Desafio do dia 01

## Setup

Primeiro, instale as dependências do projeto e coloque o servidor para rodar em modo de desenvolvimento.

Lembre-se de, após resolver cada exercício abaixo, fazer um commit para "registrar" o ajuste.

## Exercício 01

Resolver o erro que aparece no console:

```
GET http://localhost:3000/main.js net::ERR_ABORTED 404 (Not Found)

```

* Consertei o import do arquivo JS, estava um diretorio acima

## Exercício 02

Ao resolver o primeiro erro, resolva o segundo erro que deverá aparecer no console:

```
Uncaught SyntaxError: Cannot use import statement outside a module
```
* adicionei o (type="module") na tag script para informar o HTML que o arquivo js é um modulo que pode ser importado e exportado.

## Exercício 03

Olhe novamente para o console, e resolva o próximo erro:

```
main.js:3 Uncaught TypeError: Cannot set property 'innerHTML' of null
```
* O Seletor do document.querySelector(".app") estava selecionando ID e foi definido como class no HTML.

## Exercício 04

Crie um link no HTML (fora da div `.app`), e adicione à ele um evento de clique.
O clique nesse botão deverá alternar a visibilidade do `.app`: se o `.app` estiver visível,
ele deverá ser escondido. Se estiver escondido, o clique deve exibí-lo.

* Selecionei o link com document.querySelector('class') e adicionei um eventListener para quando clicar no link 
    adicionar uma classe = "hidden", criei uma classe CSS com display: none.
