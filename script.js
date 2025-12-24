
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault(); 
  const user = document.getElementById("registerUser").value.trim();
  const pass = document.getElementById("registerPass").value.trim();
  const registerMessage = document.getElementById("registerMessage");

  if (user && pass) {
    
    localStorage.setItem("user", user);
    localStorage.setItem("password", pass);
    registerMessage.textContent = "Usuário cadastrado com sucesso!";
    registerMessage.style.color = "green";
  } else {
    registerMessage.textContent = "Preencha todos os campos!";
    registerMessage.style.color = "red";
  }
});


document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();
  const loginMessage = document.getElementById("loginMessage");

  
  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("password");

  if (user === savedUser && pass === savedPass) {
    loginMessage.textContent = "Login realizado com sucesso!";
    loginMessage.style.color = "green";
    
  } else {
    loginMessage.textContent = "Usuário ou senha inválidos!";
    loginMessage.style.color = "red";
  }
});