const form = document.getElementById("test-form")
const emailInput = document.getElementById("email-input")
const emailErrorSpan = document.getElementById("email-error")
const passwordInput = document.getElementById("password-input")
const passwordErrorSpan = document.getElementById("password-error")
const submit = document.getElementById('submit')

const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

let emailError = null
let passwordError = null

const addEmailError = (err => {
    emailErrorSpan.textContent = err
    emailInput.className = 'error'
})

const addPasswordError = (err => {
    passwordErrorSpan.textContent = err
    passwordInput.className = 'error'
})

const removeEmailError = () => {
    emailErrorSpan.textContent = ''
    emailInput.className = ''
    emailError = null
}

const removePasswordError = () => {
    passwordErrorSpan.textContent = ''
    passwordInput.className = ''
    passwordError = null
}

const emailHandler = () => {
    removeEmailError()
}

const passwordHandler = () => {
    removePasswordError()
}

emailInput.addEventListener('input', emailHandler)
passwordInput.addEventListener('input', passwordHandler)
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value
    const password = passwordInput.value

    if (!email || email.length === 0) {
        emailError = 'Renseignes une adresse e-mail!'
        addEmailError(emailError)
    } else if (!emailRegEx.test(email)) {
        emailError = 'Renseignes une adresse e-mail valide!'
        addEmailError(emailError)
    } else if (email !== 'adrian@trusk.com') {
        emailError = 'Renseignes la bonne adresse e-mail!'
        addEmailError(emailError)
    }

    if (!password || password.length === 0) {
        passwordError = 'Renseignes un mot de passe!'
        addPasswordError(passwordError)
    } else if (password !== 'adrian@trusk.com') {
        passwordError = 'Renseignes le bon mot de passe!'
        addPasswordError(passwordError)
    }

    if (email === 'adrian@trusk.com' && password === 'adrian@trusk.com') window.location.href = '/ok.html'
})
