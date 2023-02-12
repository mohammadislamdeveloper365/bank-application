let loginButton = document.getElementById('bank-login');

loginButton.addEventListener('click',function() {
   let passwordField = getInputFieldValue('password');
   let usernameField = getInputFieldValue('username');
   
  (passwordField === 'secret' && usernameField === 'mohammadislam@gmail.com') ? window.location.href = 'index.html': document.getElementById('login-error').innerText = 'Please enter valid email or password';
});