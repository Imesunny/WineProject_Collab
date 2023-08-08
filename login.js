const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Signup
var signupForm = document.querySelector("#container .sign-up-container form");
signupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = signupForm.querySelector("#signup-name").value;
  var email = signupForm.querySelector("#signup-email").value;
  var password = signupForm.querySelector("#signup-org").value;

  var user = {
    fullname: name,
    email: email,
    password: password
  };

  localStorage.setItem("userInfo", JSON.stringify(user));
  container.classList.remove("right-panel-active");


  var welcomeMessage = document.querySelector("#container .sign-in-container h1");
  welcomeMessage.textContent = "Welcome to MineWine Online Store, " + name + "!";
});

// Login
var loginForm = document.querySelector("#container .sign-in-container form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var email = loginForm.querySelector("#login-email").value;
  var password = loginForm.querySelector("#login-password").value;

  var storedUser = JSON.parse(localStorage.getItem("userInfo"));

  if (email === "admin@minewine.com" && password === "admin") {
    window.location.href = "#";
  } else {
    if (storedUser && email === storedUser.email) {
      if (password === storedUser.password) {
        window.location.href = "index.html";
      } else {
        alert("Wrong Credentials");
      }
    } else {
      alert("Email Not registered");
    }
  }
});
