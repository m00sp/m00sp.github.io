+++
title = "Javascript Test"
description = "JS test and others."
date = 2024-09-03
updated = 2023-09-03
draft = false

[taxonomies]
tags = ["Javascript"]
[extra]
toc = true
series = "Javascript"
+++

<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Linking to CSS and JavaScript</title>
    <link rel='stylesheet' href='style.css'>
  </head>
  <body>
        <h1>If this text is red, then you successfully linked your CSS file!</h1>


<!-- Utilizaremos este formulário para selecionar um planeta -->
<fieldset>
  <legend>Informação do Hardware e Software</legend>
  <label for="planetasSelect">Palavra Chave:</label>

  <!--
    O atributo aria-controls aponta para o ID do elemento da página este formulário controla
  -->
  <select id="planetasSelect" aria-controls="planetaInformacoes">
    <option value="">Selecione uma palavra chave:</option>
    <option value="rust">Rust</option>
    <option value="lua">Lua</option>
    <option value="html5">HTML5</option>
    <option value="css">CSS</option>
    <option value="javascript">JavaScript</option>
    <option value="markdown">Markdown</option>
  </select>
</fieldset>

<!--
  O atributo role="region" define que a div a seguir é um ponto de destaque na
  página, facilitando o acesso à região através do teclado.

  Observe que o ID da div a seguir é o mesmo definido no atributo aria-controls
  do select acima.

  Definimos o aria-live como igual a polite. Desse modo, os leitores de
  tela não interromperam a leitura da página quando o conteúdo dessa div for alterado.

  Por fim, definimos o aria-busy para informar aos leitores de tela ou outras
  tecnologias assistivas quando a região está aguardando um novo conteúdo.
-->
<div role="region" id="planetaInformacoes" aria-live="polite" aria-busy="false">
  <h2 id="planetaNome">Nenhuma palavra chave selecionada</h2>
  <p id="planetaDescricao">Selecione um palavra chave para ver sua descrição</p>
</div>

<p>
  <small>
    Com informações da
    <a href="https://en.wikipedia.org/wiki/Solar_System#Inner_Solar_System">Wikipedia</a>
  </small>
</p>
  </body>
    <script src='script.js'></script>
</html>

## Markdown
