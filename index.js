const baseUrl = "https://63930d2bab513e12c50169ad.mockapi.io";

const registerForm = document.getElementById('registerForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

registerForm.addEventListener('submit', event => {
    event.preventDefault();

    const gundul = new URLSearchParams();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    gundul.append("name",name)
    gundul.append("email",email)
    gundul.append("password",password)

    fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: gundul
    })
    .then(response => console.log(response))
    .catch(error=>console.log(error))
});