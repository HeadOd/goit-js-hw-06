const ref = {
    form: document.querySelector('.login-form')
};

ref.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const { elements: { email, password }
    } = event.currentTarget;

    if (!email.value || !password.value) {
        alert('Все поля должны быть заполнены!');
    };

    const formObj = {
        [email.type]: email.value,
        [password.type]: password.value,
    };

    console.log(formObj);
    event.currentTarget.reset();
};

