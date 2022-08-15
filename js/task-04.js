let counterValue = 0;
const counterEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

function onDecrementClick() {
    counterValue -= 1;
    return counterEl.textContent = counterValue;
};

function onIncrementClick() {
    counterValue += 1;
    return counterEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);