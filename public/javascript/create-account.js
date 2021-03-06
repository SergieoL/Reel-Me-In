async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log(username, password);
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check status of response
      if (response.ok) {
        console.log('nice');
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

  