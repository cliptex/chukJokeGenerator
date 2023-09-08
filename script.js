const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#joke-btn');

const getJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      }
    }
  };
  xhr.send();
};

jokeBtn.addEventListener('click', getJoke);
