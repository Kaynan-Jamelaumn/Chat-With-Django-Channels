
  function createErrorMessage(input, message) {
    const createSpanMarginTop = document.createElement('div')
    const error = document.createElement('span');
    createSpanMarginTop.appendChild(error)
    createSpanMarginTop.style.fontSize = '16px';
    createSpanMarginTop.style.marginTop = '10px';
    error.classList.add('error');
    error.style.color = 'var(--white)';
    error.textContent = message;
    const fieldDiv = input.closest('.field'); // find the closest div with class 'field'
    fieldDiv.appendChild(createSpanMarginTop);
    return error;
  }
  
  const passwordInput = document.getElementById('password');
  const passwordError = createErrorMessage(passwordInput, 'Password must contain at least 7 characters');
  
  const regexNumber = /\d/;
  const regexLower = /[a-z]/; // regular expression that matches any upper or lower case letter
  const regexUpper = /[A-Z]/;
  
  passwordInput.addEventListener('input', () => {
    const containsNumber = regexNumber.test(passwordInput.value);
    const containsLower = regexLower.test(passwordInput.value); // test if the password input contains letters;
    const containsUpper = regexUpper.test(passwordInput.value);
  
    if (passwordInput.value.length < 7) {
      passwordError.style.color = 'var(--white)';
      passwordError.textContent = 'Password must contain at least 7 characters';
    } else if (!containsNumber) {
      passwordError.style.color = 'var(--white)';
      passwordError.textContent = 'Must contain a number';
    } else if (containsUpper && containsLower) {
      passwordError.style.color = '#66cc99';
      passwordError.textContent = 'Valid password';
    } else {
      passwordError.style.color = 'var(--white)';
      passwordError.textContent = 'Must contain lower and upper characters';
    }
  });
  
  // Password confirmation
  
  const passwordInputConfirmation = document.getElementById('password-confirmation');
  const passwordErrorConfirmation = createErrorMessage(passwordInputConfirmation, 'Passwords must match');
  
  passwordInputConfirmation.addEventListener('input', () => {
    if (passwordInputConfirmation.value !== passwordInput.value) {
      passwordErrorConfirmation.style.color = 'var(--white)';
      passwordErrorConfirmation.textContent = 'Passwords must match';
    } else {
      passwordErrorConfirmation.style.color = '#66cc99';
      passwordErrorConfirmation.textContent = 'Passwords match';
    }
  });
