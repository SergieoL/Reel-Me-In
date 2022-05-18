async function newFormHandler(event) {
    event.preventDefault();
  
    const movieTitle = document.querySelector('input[name="movie-title"]').value;
    const reviewTitle = document.querySelector('input[name="review-title"]').value;
    const content = document.getElementById("review-content").value;
  
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        movieTitle,
        reviewTitle,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);