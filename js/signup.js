document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(
      "https://blog-post-production-b61c.up.railway.app/api/v1/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, email, password }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Registration successful!");
          window.location.href = "login.html"; // Redirect to login page
        } else {
          alert("Registration failed: " + data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  });
