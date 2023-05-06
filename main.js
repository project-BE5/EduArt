const baseUrl = "https://63930d2bab513e12c50169ad.mockapi.io";

// REGISTER

  function registerUser() {
    const registerForm = document.getElementById('registerForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
  
    registerForm.addEventListener('submit', event => {
      event.preventDefault();
  
      const name = nameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;

      const formData = new URLSearchParams();
  
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
  
      fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData
      })
      .then(response => {
        if (response.ok) {
          window.location.href = '/login.html';
        } else {
          errorText.style.display = 'block';
          errorText.innerText = 'Error Register';
        }
      })
      .catch(error => console.log(error));
  
    });

  }


function loginUser() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    // event.preventDefault();
  
    loginForm.addEventListener('submit', event => {
        event.preventDefault();
  
        const email = emailInput.value;
        const password = passwordInput.value;
  
        fetch(`${baseUrl}/users`)
        .then((result) => result.json())
        .then((response) => {
            response.forEach(item => {
              if (item.email == email && item.password == password) {
                history.pushState(null, null, "home.html");
                 window.location.href = `home.html?email=${encodeURIComponent(email)}`;
                
                alert('Login successful!');
                search(email);
              }
            })
        })
        .catch(error=>console.log(error))

    });
  }

function logout() {
  sessionStorage.clear();
  window.location.href = 'login.html';
}



  
  
  
  