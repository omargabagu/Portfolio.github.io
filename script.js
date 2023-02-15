const matrixCode = document.getElementById('matrix-code');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-={}[]\\|;:\'",.<>?/`';
  const codeLength = 3000; // The length of the Matrix code string

  let code = '';

  // Generate a string of random characters
  for (let i = 0; i < codeLength; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  matrixCode.setAttribute('data-text', code);