const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const buttonLogin = document.getElementById('button-login');
const checkBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function login() {
  if (inputEmail.value === 'tryber@teste.com' || inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', login);

const imagem = document.getElementById('imagem1');
const creatH1 = document.createElement('h1');

function h1FilhoHeader() {
  creatH1.innerHTML = 'Trybewarts';
  creatH1.id = 'trybewarts-header-title';
  imagem.after(creatH1);
}

h1FilhoHeader();

function submitButton() {
  if (checkBox.value === 'off') {
    submitBtn.setAttribute('disabled', 'disabled');
  } else {
    submitBtn.removeAttribute('disabled');
  }
}

function checkBoxOn(event) {
  if (event.target.value === 'off') {
    event.target.value = 'on';
  } else {
    event.target.value = 'off';
  }
  submitButton();
}

checkBox.addEventListener('click', checkBoxOn);
