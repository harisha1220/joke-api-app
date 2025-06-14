const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(data => {
      setup.textContent = data.setup;
      punchline.textContent = data.punchline;
      punchline.classList.remove('hidden');
    })
    .catch(error => {
      setup.textContent = "Oops! Couldn't fetch a joke.";
      punchline.textContent = "";
      punchline.classList.add('hidden');
      console.error('Fetch error:', error);
    });
}
