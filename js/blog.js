document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
  }

  // Create New Post
  document
    .getElementById("post-form")
    ?.addEventListener("submit", function (event) {
      event.preventDefault();
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const content = document.getElementById("content").value;

      fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, author, content }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Post created:", data);
          alert("Post created successfully!");
          window.location.reload();
        })
        .catch((error) => console.error("Error creating post:", error));
    });

  // Logout
  document.getElementById("logout")?.addEventListener("click", function () {
    localStorage.removeItem("token");
    window.location.href = "login.html";
  });
});
