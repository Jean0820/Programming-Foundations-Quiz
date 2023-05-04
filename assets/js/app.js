const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

nameInput.addEventListener("input", function (event) { 
  const name = event.target.value;
  if (name == " " || name.length == 0) {
    document.getElementById("nameError").textContent =
      "Username is required";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  } else {
    document.getElementById("nameError").textContent = "";
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  }
});

emailInput.addEventListener("input", function (event) {
  const email = event.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email == " " || email.length == 0) {
    document.getElementById("emailError").textContent =
      "Email is required";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  } 
  else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
  } else {
    document.getElementById("emailError").textContent = "";
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
  }
});

passwordInput.addEventListener("input", function (event) {
  const password = event.target.value;
  if (password == " " || password.length == 0) {
    document.getElementById("passwordError").textContent =
      "Password is required";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  } 
  else if (password.length < 7) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 7 characters long.";
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
  } else {
    document.getElementById("passwordError").textContent = "";
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
  }
});
