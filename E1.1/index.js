const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const form = document.getElementById('form')

function validatePassword(password) {
  if (password.length < 6) {
    alert('Password length should be 6 or more')
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === '' || password === '') {
    alert('email and password should not be empty!')
  }

  validatePassword(password)

  alert('Login Success. Welcome!')
})