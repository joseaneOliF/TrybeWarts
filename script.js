const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const buttonLogin = document.getElementById('button-login');

function login() {
  if (inputEmail.value === "tryber@teste.com" || inputSenha.value === "123456") {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', login);