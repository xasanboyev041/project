document.addEventListener("DOMContentLoaded", () => {
  function showPage(pageId) {
    document
      .querySelectorAll(".page")
      .forEach((page) => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
  }

  document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      fetch(
        "https://blog-post-production-b61c.up.railway.app/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          alert("Registered successfully!");
        })
        .catch((error) => {
          alert("Registration failed!");
        });
    });

  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("emailLogin").value;
      const password = document.getElementById("passwordLogin").value;
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
          alert("Logged in successfully!");
        })
        .catch((error) => {
          alert("Login failed!");
        });
    });

  document.getElementById("viewBlog").addEventListener("click", function () {
    const blogId = document.getElementById("blogId").value;
    fetch(
      `https://blog-post-production-b61c.up.railway.app/api/v1/blogs/${blogId}`
    )
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "singleBlog"
        ).innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`;
      })
      .catch((error) => {
        alert("Blog not found!");
      });
  });

  document
    .getElementById("createPostForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;
      fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Post created successfully!");
        })
        .catch((error) => {
          alert("Failed to create post!");
        });
    });
});
