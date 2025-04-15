const visor = document.getElementById("visor")
const operetor = ["+", "-", "*", "/" , "%"]

visor.addEventListener("input", () => {
  visor.value = visor.value.replace(/[^0-9+\-*/.]/g, "");
});

document.addEventListener('keydown', function(event) {
    const tecla = event.key;
  
    const teclasPermitidas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '-', '+', '%', 'Enter', 'Backspace', 'c', 'C'];


    if (teclasPermitidas.includes(tecla)) {
      let botao;
      if (tecla >= '0' && tecla <= '9') {
        botao = document.getElementById(`btn${tecla}`);
      }
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
            document.getElementById('btnLimpar').classList.add('pressionada');
            deleteValueOfIndex()
            break;
          case 'c':
          case 'C':
            document.getElementById('btnLimparTudo').classList.add('pressionada');
            clearInput()
            break;
          case '.':
            botao = document.getElementById('btnPonto');
            break;
          default:
            break;
        }
      }
  
      if (botao) {
        botao.classList.add('pressionada');
        addingValueInInput(botao.innerText)
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
            result()
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

      if (botao) {
        botao.classList.remove('pressionada');
      }
    }
  });

function getClick(element){
  addingValueInInput(element.innerText)  
}

function deleteValueOfIndex(){
  let valor = visor.value.slice(0, -1)
  visor.value = valor
}

function clearInput(){
  visor.value = ""
}

function addingValueInInput(value){

  if(visor.value == 0){
    if(!operetor.includes(value)){
      visor.value += value;
    }
  } else {
    
    if(!isNaN(value)){
      visor.value += value;
    } else if(operetor.includes(value) && canAddFirstOperator(visor.value)){
      visor.value += value;

    } else {

      if (value === ".") {
        if (canAddPoint(visor.value)) {
          visor.value += value;
        }
      }
    }
  }
}  

function canAddPoint(expressao) {
  if (expressao === "") return false;

  const ultimoChar = expressao.slice(-1);
  if (operetor.includes(ultimoChar)) {
    return false;
  }

  const partes = expressao.split(/[\+\-\*\/]/);
  const ultimoNumero = partes[partes.length - 1];

  return !ultimoNumero.includes(".");
}

function canAddFirstOperator(expressao) {
  return !/[\+\-\*\/]/.test(expressao);
}

function result(){
  let resultText = splitExpression(visor.value)

  let number1 = resultText.num1
  let operator = resultText.operator
  let number2 = resultText.num2

  let result = calculate(number1, operator, number2)
  visor.value = result
}

function splitExpression(expression) {
  const match = expression.match(/^(\d+)([\+\-\*\/])(\d+)$/);

  if (match) {
    const num1 = match[1];     
    const operator = match[2];  
    const num2 = match[3];
    return { num1, operator, num2 };
  }

  return null; 
}

function calculate(value1, operator, value2) {
  const num1 = parseFloat(value1);
  const num2 = parseFloat(value2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
    default:
      return "Operador inválido";
  }
}

function potencia(){
  let valor = visor.value
  visor.value = valor*valor;
}

function raizQuadrada(){
  visor.value = Math.sqrt(visor.value);
}

function porcentagem(){
  visor.value = visor.value/100
}
