let loginButton = getElement('bank-login');

//Add event listener for button
loginButton.addEventListener('click',function() {
   let passwordField = getInputFieldValue('password');
   let usernameField = getInputFieldValue('username');
   
  (passwordField === 'secret' && usernameField === 'koti@gmail.com') ? window.location.href = 'home.html': document.getElementById('login-error').innerText = 'Please enter valid email or password';
});

document.addEventListener('keydown',function(event) {
  if(event.key === 'Enter') {
    let passwordField = getInputFieldValue('password');
    let usernameField = getInputFieldValue('username');
    if(passwordField === 'secret' && usernameField === 'koti@gmail.com') {
      window.location.href = 'home.html';
    }

    else {
      document.getElementById('login-error').innerText = 'Please enter valid email or password'
    }
  }
  
});

