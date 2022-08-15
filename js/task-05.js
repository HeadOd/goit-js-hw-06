const typeEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

typeEl.addEventListener('input', (event) => {
    event.currentTarget.value ?
        spanEl.textContent = event.currentTarget.value :
        spanEl.textContent = 'Anonymous';
});