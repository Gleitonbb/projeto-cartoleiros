let res = document.getElementById('res');
let TimeGanhador = 'AT.Mineiro';
let dataEncerramento = new Date('2024-05-31'); // Substitua com sua data de encerramento desejada
let marcacaoForm = document.getElementById('marcacaoForm');

// Carregar marcação salva ao carregar a página
window.onload = function () {
  let marcacao = JSON.parse(localStorage.getItem('marcacao'));
  let marcacao1 = JSON.parse(localStorage.getItem('marcacao1'));
  let marcacao2 = JSON.parse(localStorage.getItem('marcacao2'));

  if (marcacao) {
    if (marcacao.time === 'Santos') {
      document.getElementsByName('radtim')[0].checked = true;
    } else if (marcacao.time === 'AT.Mineiro') {
      document.getElementsByName('radtim')[1].checked = true;
    }
  }

  if (marcacao1) {
    if (marcacao1.time1 === 'Santos') {
      document.getElementsByName('radtim1')[0].checked = true;
    } else if (marcacao1.time1 === 'AT.Mineiro') {
      document.getElementsByName('radtim1')[1].checked = true;
    }
  }

  if (marcacao2) {
    if (marcacao2.time2 === 'Inter') {
      document.getElementsByName('radtim2')[0].checked = true;
    } else if (marcacao2.time2 === 'Vasco') {
      document.getElementsByName('radtim2')[1].checked = true;
    }
  }
}

function verificar() {
  // Restante do código de verificar()
  let tim = document.getElementsByName('radtim');
  let time = '';

  if (tim[0].checked) {
    time = 'Santos';
  } else if (tim[1].checked) {
    time = 'AT.Mineiro';
  }

  let dataAtual = new Date();

  // Salvar a marcação no localStorage
  let marcacao = {
    time: time,
    resultado: '',
    data: dataAtual.toString()
  };

  localStorage.setItem('marcacao1', JSON.stringify(marcacao));

  if (dataAtual <= dataEncerramento) {
    if (time === TimeGanhador) {
      res.innerHTML = `O <strong>${time}</strong> ganhou`;
      marcacao.resultado = 'ganhou';
      
    } else {

      
     res1.innerHTML = `O <strong>${time}</strong> perdeu`;
      marcacao.resultado = 'perdeu';
    }

    // Desabilitar o formulário após a data de encerramento
    if (dataAtual > dataEncerramento) {
      marcacaoForm.style.pointerEvents = 'none';
      res.innerHTML += '<br>Marcação encerrada para esta data.';
    }
  } else {
    res.innerHTML = `A marcação está encerrada.`;
  }
  

}

function verificar1() {
  // Restante do código de verificar1()
}

function verificar2() {
  // Restante do código de verificar2()
}



