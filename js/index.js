import { createElement, getElementById, getFieldValue } from './utility.js'

let loginButton = getElementById('bank-login');

//Add event listener for login button
loginButton.addEventListener('click',loginFormHandler);

document.addEventListener('keydown',function(event) {
  if(event.key === 'Enter') {
    loginFormHandler();
}
});


function loginFormHandler() {
  let passwordField = getFieldValue('password', true);
   let usernameField = getFieldValue('username', true);
   let errorField = getElementById('error-message');
   
   if(errorField) {
     errorField.parentNode.removeChild(errorField);
   }
   if(passwordField === 'secret' && usernameField === 'koti@gmail.com') {
    window.location.href = 'home.html'
   } else {
      const errorField = createElement('p', "Please enter valid email or password");
      const btn = getElementById('bank-login');
      const form = getElementById('bank-login-form');
      errorField.style.fontSize = '1.5rem';
      errorField.style.color = '#E21717';
      errorField.style.textAlign = 'left';
      errorField.style.paddingBottom = '8px';
      errorField.id = 'error-message';

      form.insertBefore(errorField, btn );
   }
}
