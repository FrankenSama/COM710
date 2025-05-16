document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const darkModePref = document.getElementById('dark-mode-pref').checked;

  // Simple Validation
  if (!username || !email || !password) {
    document.getElementById('form-message').textContent = "Please fill all fields!";
    return;
  }

  // Mock Submission (Replace with backend later)
  fetch('http://localhost:3000/api/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    darkMode: document.getElementById('dark-mode-pref').checked
  })
})
.then(response => response.json())
.then(data => alert(`Success! ${data.message}`));
})