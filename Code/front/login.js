document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      fetch("http://localhost:5000/api/v1/userLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response.json().then((err) => {
            throw new Error(err.error);
          });
        })
        .then((data) => {
          alert(data.message);
          window.location.href = "index.html";
        })
        .catch((error) => {
          alert("Erro no login: " + error.message);
        });
    });
  }
});
