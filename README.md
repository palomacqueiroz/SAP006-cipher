# Cifra de César

## Índice

* [1. VOICE](#1-voice)
* [2. Cifra de César](#2-cifra-de-cesar) 
* [3. Usuários](#3-Usuários)
* [4. Planejamento e Execução](#4-planejamento-e-execução)
* [5. Interface UI e UX](#5-Interface-UI-e-UX)
* [6. Testes](#6-Testes)
* [7. Objetivos de Aprendizagem](#7-objetivos-de-aprendizagem)

***


## 1. VOICE

É uma ferramenta de mensagens internas de uma organização, criada para permitir 
que funcionários sintam-se seguros para fazerem denúncias de discriminação e 
assédio, dentro da empresa onde trabalham.
Nesta aplicação o usuário poderá cifrar e decifrar um texto indicando a chave 
secreta (_offset_) e enviar ao responsável, na empresa, por e-mail, através 
de um botão.

## 2. Cifra de César

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 3. Usuários

Será utilizado por funcionários que desejam fazer denúncia, e para que não se sintam intimidados,
com medo e deixem de falar por ter que ser pessoalmente, esta ferramenta cria um ambiente seguro
onde é possível ter "voz" e denúnciar.

## 4. Planejamento e Execução

Foi utilizado o Trello para preparar o "planning", as tarefas foram divididas em pequenas partes
para facilitar sua execução.

## 5. Interface UI e UX

A interface permitir ao usuário:

* Eleger um _offset_ (chave secreta) indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.

A cor azul foi priorizada por que transmite tranquilidade, serenidade e harmonia.

## Tela inicial

Consta informações sobre o VOICE e como usar.

*Foto

## Telas CRIPTOGRAFAR e DESCRIPTOGRAFAR

Em telas distintas, muito semelhantes, porém na tela criptografar é possível enviar a mensagem
através de um botão diretamente para o responsável na empresa.

*Foto

## 6. Testes

Foi exigido que os testes unitários cobrissem no mínimo 70% dos statements, functions e lines, 
e um mínimo de 50% de branches.
Voice passou nos testes como pode-se observar abaixo:

***

## 7. Objetivos de Aprendizagem

### HTML e CSS

* [X] [Uso de HTML semântico.](https://developer.mozilla.org/pt-BR/docs/Glossario/Semantica#Sem%C3%A2ntica_em_HTML)
* [X] Uso de seletores de CSS.

### DOM

* [X] Uso de seletores do DOM.
* [X] Manipular eventos do DOM.
* [X] [Manipulação dinâmica do DOM.](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [X] Manipulação de strings.
* [X] Uso de condicionais (if-else | switch | operador ternário)
* [X] Uso de laços _(loops)_ (for | for..in | for..of | while)
* [X] Uso de funções (parâmetros | argumentos | valor de retorno)
* [X] Declaração correta de variáveis (const & let)

### Testing

* [X] [Teste unitário.](https://jestjs.io/docs/pt-BR/getting-started)

### Estrutura do código e guia de estilo

* [X] Organizar e dividir o código em módulos (Modularização)
* [X] Uso de identificadores descritivos (Nomenclatura | Semântica)
* [X] Uso de linter (ESLINT)

### Git e GitHub

* [X] Uso de comandos de git (add | commit | pull | status | push)
* [X] Gerenciamento de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [X] Desenhar a aplicação pensando e entendendo o usuário.
* [X] Criar protótipos para obter feedback e iterar.



