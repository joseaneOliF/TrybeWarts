const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const buttonLogin = document.getElementById('button-login');

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

const tagMain = document.createElement('main');
const tagForm = document.createElement('form');

function createMain() {
  document.body.appendChild(tagMain);
  tagForm.id = 'evaluation-form';
  tagMain.appendChild(tagForm);
}

createMain();

const tagImg = document.createElement('img');

function createImg() {
  tagImg.id = 'trybewarts-forms-logo';
  tagImg.src = 'images/trybewarts-colored.svg';
  tagMain.appendChild(tagImg);
}
createImg();
