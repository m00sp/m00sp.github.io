const PLANETAS = {
  rust: {
    nome: 'Rust',
    descricao: 'Rust is a general-purpose programming language emphasizing performance, type safety, and concurrency. It enforces memory safety, meaning that all references point to valid memory. It does so without a traditional garbage collector; instead, both memory safety errors and data races are prevented by the "borrow checker", which tracks the object lifetime of references at compile time. '
  },
  lua: {
    nome: 'Lua',
    descricao: 'Lua (/ˈluːə/ LOO-ə; from Portuguese: lua [ˈlu(w)ɐ] meaning moon) is a lightweight, high-level, multi-paradigm programming language designed mainly for embedded use in applications. Lua is cross-platform software, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C application programming interface (API) to embed it into applications.'
  },
  html5: {
    nome: 'HTML5',
    descricao: 'HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web. It was the fifth and final[4] major HTML version that is now a retired World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).'
  },
  css: {
    nome: 'CSS',
    descricao: 'Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  javascript: {
    nome: 'JavaScript',
    descricao: 'JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.'
  },
  markdown: {
    nome: 'Markdown',
    descricao: 'Markdown is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as an easy-to-read markup language. Markdown is widely used for blogging and instant messaging, and also used elsewhere in online forums, collaborative software, documentation pages, and readme files.'
  }
}

function renderizaInformacoesDoPlaneta(planeta) {
  const planetaInformacoes = document.getElementById('planetaInformacoes');
  const planetaNome = document.getElementById('planetaNome');
  const planetaDescricao = document.getElementById('planetaDescricao');

  planetaInformacoes.setAttribute('aria-busy', 'true');

  setTimeout(() => {
    if (planeta in PLANETAS) {
      planetaNome.textContent = PLANETAS[planeta].nome;
      planetaDescricao.textContent = PLANETAS[planeta].descricao;
    } else {
      planetaNome.textContent = 'Nenhum palavra chave';
      planetaDescricao.textContent = 'Selecione um palavra chave para ver sua descrição';
    }

    planetaInformacoes.setAttribute('aria-busy', 'false');
  }, 1100);
}

document.getElementById('planetasSelect')
  .addEventListener('change', event => {
    renderizaInformacoesDoPlaneta(event.target.value);
  });
alert('You successfully linked your JavaScript file!');
