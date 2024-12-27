



document.getElementById('email-div').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  
  const emailInput = document.getElementById('email').value;
  const result = document.getElementById('result');

  // Regular expression for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    result.textContent = 'Valid email address!';
    result.style.color = 'green';

    // Redirect to another HTML file
    window.location.href = 'success.html'; // Replace with your target HTML file
  } else {
    result.textContent = 'Invalid email address!';
    result.style.color = 'red';
  }
});
