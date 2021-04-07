const button = document.querySelector('#switch');
const button2 = document.querySelector('#switch2');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  handleClick();
});

button2.addEventListener('click', () => {
  handleClick();
});

function handleClick() {
  if(body.classList.contains('switched')) {
    body.classList = [];
    button.textContent = 'Haal extra info van sprekers weg';
    button2.textContent = 'Haal extra info van sprekers weg';
  } else {
    body.classList.add('switched');
    button.textContent = 'Voeg meer informatie van sprekers toe';
    button2.textContent = 'Voeg meer informatie van sprekers toe';
  }
}