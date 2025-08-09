const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const items = document.querySelectorAll('.item');
let active = 0;
const total = items.length;

let timer = setInterval(() => {
  update(1);
}, 5000);

function update(direction) {
  items[active].classList.remove('active');

  active += direction;
  if (active >= total) active = 0;
  if (active < 0) active = total - 1;

  items[active].classList.add('active');

  clearInterval(timer);
  timer = setInterval(() => {
    update(1);
  }, 3000);
}

prevButton.addEventListener('click', () => update(-1));
nextButton.addEventListener('click', () => update(1));
