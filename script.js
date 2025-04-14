const visor = document.getElementById("visor")

window.addEventListener("DOMContentLoaded", visor.focus())

document.addEventListener('keydown', function(event) {
    const tecla = event.key;
  
    // Verifica se a tecla pressionada é um número ou operação
    const teclasPermitidas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '-', '+', '%', 'Enter', 'Backspace', 'c', 'C'];
  
    if (teclasPermitidas.includes(tecla)) {
      let botao;
      // Verificação para números (0-9)
      if (tecla >= '0' && tecla <= '9') {
        botao = document.getElementById(`btn${tecla}`);
      }
      // Verificação para operações (usando switch)
      else {
        switch (tecla) {
          case '/':
            botao = document.getElementById('btnDividir');
            break;
          case '*':
            botao = document.getElementById('btnMultiplicar');
            break;
          case '-':
            botao = document.getElementById('btnSubtrair');
            break;
          case '+':
            botao = document.getElementById('btnSomar');
            break;
          case '%':
            botao = document.getElementById('btnPorcentagem');
            break;
          case 'Enter':
            botao = document.getElementById('btnIgual');
            break;
          case 'Backspace':
            botao = document.getElementById('btnLimpar');
            break;
          case 'c':
          case 'C':
            botao = document.getElementById('btnLimparTudo');
            break;
          case '.':
            botao = document.getElementById('btnPonto');
            break;
          default:
            break;
        }
      }
  
      // Se o botão foi encontrado, adiciona a classe de pressionamento
      if (botao) {
        botao.classList.add('pressionada');
      }
    }
  });
  
  document.addEventListener('keyup', function(event) {
    const tecla = event.key;
  
    // Verifica se a tecla liberada corresponde a uma tecla válida
    const teclasPermitidas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '-', '+', '%', 'Enter', 'Backspace', 'c', 'C'];
  
    if (teclasPermitidas.includes(tecla)) {
      let botao;
      // Verificação para números (0-9)
      if (tecla >= '0' && tecla <= '9') {
        botao = document.getElementById(`btn${tecla}`);
      }
      // Verificação para operações (usando switch)
      else {
        switch (tecla) {
          case '/':
            botao = document.getElementById('btnDividir');
            break;
          case '*':
            botao = document.getElementById('btnMultiplicar');
            break;
          case '-':
            botao = document.getElementById('btnSubtrair');
            break;
          case '+':
            botao = document.getElementById('btnSomar');
            break;
          case '%':
            botao = document.getElementById('btnPorcentagem');
            break;
          case 'Enter':
            botao = document.getElementById('btnIgual');
            break;
          case 'Backspace':
            botao = document.getElementById('btnLimpar');
            break;
          case 'c':
          case 'C':
            botao = document.getElementById('btnLimparTudo');
            break;
          case '.':
            botao = document.getElementById('btnPonto');
            break;
          default:
            break;
        }
      }
  
      // Se o botão foi encontrado, remove a classe de pressionamento
      if (botao) {
        botao.classList.remove('pressionada');
      }
    }
  });
  