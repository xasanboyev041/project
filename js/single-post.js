document.addEventListener("DOMContentLoaded", function () {
  const postTitle = document.getElementById("post-title");
  const postImage = document.getElementById("post-image");
  const postCategory = document.getElementById("post-category");
  const postContent = document.getElementById("post-content");

  const postId = "1";

  fetch(
    `https://blog-post-production-b61c.up.railway.app/api/v1/user/login/${postId}`
  )
    .then((response) => response.json())
    .then((data) => {
      postTitle.textContent = data.title;
      postImage.src = data.imageUrl;
      postCategory.textContent = `#${data.category}`;
      postContent.innerHTML = `<p>${data.content}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching post:", error);
    });
});
