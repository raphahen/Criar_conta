const form = document.getElementById('for');
const email = document.getElementById ('email');
const password = document.getElementById('password');

form.addEventListener("submit", ( event) => {
    event.preventDefault();
    checkForm();
})

function checkInputEmail() {
    const emailValue = email.value;

    if(emailValue === '') {
        errorInput(email, 'Preencha um Email válido');
    }
    else {
        const formItem = email.parentElement;
        formItem.className = 'form-control';
    }
    
}

function checkInputPassword() {
    const passwordValue = password.value;

    if(passwordValue === '') {
        errorInput(password, 'Preencha uma senha válido');
    }
    else if(passwordValue.length < 8) {
        errorInput(password, 'A senha deve ter no mínimo 8 caracteres');
    }
    else {
        const formItem = password.parentElement;
        formItem.className = 'form-control';
    }
    
}

function checkForm() {

    checkInputEmail();
    checkInputPassword();

    const formItens = form.querySelectorAll('.form-control');

    const isValid = [...formItens].every(item => {return item.className === 'form-control'});

    if(isValid) {
        alert('Formulário enviado com sucesso');
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('small');

    textMessage.innerText = message;

    formItem.className = 'form-control error';

}