const PLANETAS = {
  mercurio: {
    nome: 'Mercúrio',
    descricao: 'Mercúrio é o menor e mais interno planeta do Sistema Solar. Tem o nome da divindade romana Mercúrio, o mensageiro dos deuses.'
  },
  venus: {
    nome: 'Vênus',
    descricao: 'Vênus é o segundo planeta depois do Sol. Foi nomeado em homenamgem à deusa romana do amor e da beleza.'
  },
  terra: {
    nome: 'Terra',
    descricao: 'A Terra é o terceiro planeta depois do Sol e o único planeta conhecido capaz de suportar a vida.'
  },
  marte: {
    nome: 'Marte',
    descricao: 'Marte é o quarto planeta depois do Sol e o segundo menor planeta do Sistema Solar. Seu nome é uma homenagem ao deus romano da Guerra. Também é conhecido com o "Planeta Vermelho".'
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
      planetaNome.textContent = 'Nenhum planeta selecionado';
      planetaDescricao.textContent = 'Selecione um planeta para ver sua descrição';
    }

    planetaInformacoes.setAttribute('aria-busy', 'false');
  }, 1100);
}

document.getElementById('planetasSelect')
  .addEventListener('change', event => {
    renderizaInformacoesDoPlaneta(event.target.value);
  });
alert('You successfully linked your JavaScript file!');
