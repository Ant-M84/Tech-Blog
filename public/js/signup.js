const registerForm = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#username-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();
 
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username, password
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Unable to register, please try again!');
  }
};

document.querySelector('.register');
document.addEventListener('submit', registerForm);