const inputEl = document.querySelector('[data-length="6"]');
const validLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', (event) => {
    const currentLength = event.currentTarget.value.length
    const elemClass = inputEl.classList;

    elemClass.contains('valid') ?
        elemClass.remove('valid') :
        elemClass.remove('invalid');
    
    return validLength === currentLength ?
        elemClass.add('valid') :
        elemClass.add('invalid');
});
