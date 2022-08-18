function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  boxes: document.querySelector('#boxes'),
}

ref.create.addEventListener('click', createBoxes);

function createBoxes() {
  const amount = Number(ref.input.value); 
  const total = [];

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.classList.add('box') //delete
    divEl.style.width = '20px';
    divEl.style.height = '20px';
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    divEl.style.width = `${parseInt(divEl.style.width, 10) + 10 * i}px`;
    divEl.style.height = `${parseInt(divEl.style.height, 10) + 10 * i}px`;
    total.push(divEl);
  }

  boxes.append(...total);
}

ref.destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  ref.boxes.innerHTML = '';
}