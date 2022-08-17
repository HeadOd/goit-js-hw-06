const ref = {
    control: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}
const average = ref.control.min / 2 + ref.control.max / 2

text.style.fontSize = `${average}px`;

ref.control.addEventListener('input', (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
});