document.addEventListener("DOMContentLoaded", function () {
  fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs")
    .then((response) => response.json())
    .then((data) => {
      const articles = document.getElementById("articles");
      data.forEach((blog) => {
        const article = document.createElement("div");
        article.classList.add("article");
        article.innerHTML = `
                  <img src="${blog.image || "default.jpg"}" alt="${blog.title}">
                  <div class="article-content">
                      <h3>${blog.title}</h3>
                      <p>${blog.content.substring(0, 100)}...</p>
                  </div>
                  <div class="article-footer">
                      <span>
                          <img src="author.png" alt="Author">
                          ${blog.author}
                      </span>
                      <a href="single.html?id=${blog._id}">Read More</a>
                  </div>
              `;
        articles.appendChild(article);
      });
    })
    .catch((error) => console.error("Error fetching blogs:", error));
});
