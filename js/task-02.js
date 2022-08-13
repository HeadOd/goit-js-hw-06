const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeList = (array = []) => {
  return array.map(i => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = i;
    return liEl;
  });
};

const ulEl = document.querySelector('#ingredients');
const elements = makeList(ingredients);

ulEl.append(...elements);
