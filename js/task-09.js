function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const ref = {
  button: document.querySelector('.change-color'),
  colorName: document.querySelector('.color'),
  body: document.body,
};

ref.button.addEventListener('click', onChangeColorBody);

function onChangeColorBody() {
  ref.body.style.backgroundColor = `${getRandomHexColor()}`;
  ref.colorName.textContent = `${getRandomHexColor()}`;
};