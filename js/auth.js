// Sign Up
document
  .getElementById("signup-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(
      "https://blog-post-production-b61c.up.railway.app/api/v1/user/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration successful:", data);
        window.location.href = "login.html";
      })
      .catch((error) => console.error("Error during registration:", error));
  });

// Login
document
  .getElementById("login-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(
      "https://blog-post-production-b61c.up.railway.app/api/v1/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html";
      })
      .catch((error) => console.error("Error during login:", error));
  });
