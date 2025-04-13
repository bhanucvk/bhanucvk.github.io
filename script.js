document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const feedback = document.getElementById('feedback').value.trim();

  if (name && feedback) {
    document.getElementById('message').innerText = `Thank you for your feedback, ${name}!`;
    this.reset();
  } else {
    document.getElementById('message').innerText = 'Please fill out both fields.';
  }
});
