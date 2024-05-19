document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'user@gmail.com' && password === '1234') {
      window.location.href = 'Dashboard/index.html'; // Replace with the actual target page URL
    } else {
      alert('Invalid username or password');
    }
  });
  