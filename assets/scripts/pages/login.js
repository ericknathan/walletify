const emailTabButton = document.getElementById('tab-email');
const phoneTabButton = document.getElementById('tab-phone');

const loginInput = document.getElementById('login-input');
const passwordInput = document.getElementById('password-input');

const clearInputButton = document.getElementById('clear-login-button')
const togglePasswordVisibilityButton = document.getElementById('toggle-password-button');

/* Login tab selectors */
emailTabButton.addEventListener('click', () => {
  emailTabButton.classList.add('bg-white');
  phoneTabButton.classList.remove('bg-white');

  loginInput.type = 'email';
  loginInput.placeholder = 'alan.turing@email.com';
  loginInput.ariaLabel = 'Endereço de email';
});

phoneTabButton.addEventListener('click', () => {
  phoneTabButton.classList.add('bg-white');
  emailTabButton.classList.remove('bg-white');

  loginInput.type = 'tel';
  loginInput.placeholder = '(11) 94002-8922';
  loginInput.ariaLabel = 'Número de telefone';
});

/* Input actions */
clearInputButton.addEventListener('click', () => {
  loginInput.value = '';
});

togglePasswordVisibilityButton.addEventListener('click', () => {
  const image = togglePasswordVisibilityButton.querySelector('img');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    image.src = './assets/images/icon-hide.svg';
  } else {
    passwordInput.type = 'password';
    image.src = './assets/images/icon-show.svg';
  }
});
