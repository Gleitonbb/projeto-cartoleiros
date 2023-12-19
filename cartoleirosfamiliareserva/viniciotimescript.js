let res = document.getElementById('res');
let TimeGanhador = 'Palmeiras';
let dataEncerramento = new Date('2024-07-31'); // Substitua com sua data de encerramento desejada

function verificar() {
  let tim = document.getElementsByName('radtim');
  let time = '';
  let marcacaoForm = document.getElementById('marcacaoForm');

  if (tim[0].checked) {
    time = 'Flamengo';
  } else if (tim[1].checked) {
    time = 'Palmeiras';
  }

  let dataAtual = new Date();

  // Salvar a marcação no localStorage
  let marcacao = {
    time: time,
    resultado: '',
    data: dataAtual.toString()
  };

  localStorage.setItem('marcacao', JSON.stringify(marcacao));

  if (dataAtual <= dataEncerramento) {
    if (time === TimeGanhador) {
      res.innerHTML = `O <strong>${time}</strong> ganhou`;
      marcacao.resultado = 'ganhou';
    } else {
      res.innerHTML = `O <strong>${time}</strong> perdeu`;
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
/*Segundo confronto -------------------------------------------------------------------*/

let res1 = document.getElementById('res1');
let TimeGanhador1 = 'A.Mineiro';
let dataEncerramento1 = new Date('2023-08-31'); // Substitua com sua data de encerramento desejada

function verificar1() {
  let tim1 = document.getElementsByName('radtim1');
  let time1 = '';
  let marcacaoForm1 = document.getElementById('marcacaoForm1');

  if (tim1[0].checked) {
    time1 = 'Santos';
  } else if (tim1[1].checked) {
    time1 = 'A.Mineiro';
  }

  let dataAtual1 = new Date();

  // Salvar a marcação no localStorage
  let marcacao1 = {
    time1: time1,
    resultado1: '',
    data: dataAtual1.toString()
  };

  localStorage.setItem('marcacao1', JSON.stringify(marcacao1));

  if (dataAtual1 <= dataEncerramento) {
    if (time1 === TimeGanhador1) {
      res1.innerHTML = `O ${time1} ganhou`;
      marcacao1.resultado1 = 'ganhou';
    } else {
      res1.innerHTML = `O ${time1} perdeu`;
      marcacao1.resultado1 = 'perdeu';
    }

    // Desabilitar o formulário após a data de encerramento
    if (dataAtual1 > dataEncerramento) {
      marcacaoForm1.style.pointerEvents = 'none';
      res1.innerHTML += '<br>Marcação encerrada para esta data.';
    }
  } else {
    res1.innerHTML = `A marcação está encerrada.`;
  }
}

/* terceiro confronto--------------------------------------------------------------*/

let res2 = document.getElementById('res2');
let TimeGanhador2 = 'Inter';
let dataEncerramento2 = new Date('2023-08-31'); // Substitua com sua data de encerramento desejada

function verificar2() {
  let tim2 = document.getElementsByName('radtim2');
  let time2 = '';
  let marcacaoForm2 = document.getElementById('marcacaoForm2');

  if (tim2[0].checked) {
    time2 = 'Inter';
  } else if (tim2[1].checked) {
    time2 = 'Vasco';
  }

  let dataAtual2 = new Date();

  // Salvar a marcação no localStorage
  let marcacao2 = {
    time2: time2,
    resultado2: '',
    data: dataAtual2.toString()
  };

  localStorage.setItem('marcacao1', JSON.stringify(marcacao2));

  if (dataAtual2 <= dataEncerramento) {
    if (time2 === TimeGanhador2) {
      res2.innerHTML = `O ${time2} ganhou`;
      marcacao2.resultado2 = 'ganhou';
    } else {
      res2.innerHTML = `O ${time2} perdeu`;
      marcacao2.resultado2 = 'perdeu';
    }

    // Desabilitar o formulário após a data de encerramento
    if (dataAtual2 > dataEncerramento) {
      marcacaoForm2.style.pointerEvents = 'none';
      res2.innerHTML += '<br>Marcação encerrada para esta data.';
    }
  } else {
    res2.innerHTML = `A marcação está encerrada.`;
  }
}