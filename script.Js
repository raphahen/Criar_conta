const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const date = document.getElementById('date')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if(usernameValue === '') {
        errorInput(username, 'Preencha um campo válido');
    }
    else {
        const formItem = username.parentElement;
        formItem.className = 'form-control';
    }
    
}

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

function checkInputPassword2() {    
    const password2Value = password2.value;
    const confirmationPasswordValue = password2.value;
    if(password2Value === '') {
        errorInput(password2, 'Preencha uma senha válida');
    }else if(confirmationPasswordValue !== password.value) {
        errorInput(password2, 'As senhas não coincidem');
    }
    else {
        const formItem = password2.parentElement;
        formItem.className = 'form-control';
    }
}

function checkInputdate () {
    const dateValue = date.value;

    if(dateValue === '') {
        errorInput(date, 'Preencha uma data')
    }

    else {
        const formItem = date.parentElement;
        formItem.className = 'form-control';
    }
}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPassword2();
    checkInputdate();

    const formItens = form.querySelectorAll('.form-control');

    const isValid = [...formItens].every(item => {return item.className === 'form-control'});

    if(isValid) {
        history.back()
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('small');

    textMessage.innerText = message;

    formItem.className = 'form-control error';

}