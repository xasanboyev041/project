document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(
      "https://blog-post-production-b61c.up.railway.app/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Login successful!");
          window.location.href = "home.html"; // Redirect to home page
        } else {
          alert("Login failed: " + data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  });
