document.addEventListener("DOMContentLoaded", function () {
  const articlesContainer = document.getElementById("articles-container");

  fetch("https://blog-post-production-b61c.up.railway.app/api/v1/user/register")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((article) => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("article-card");

        const articleImage = document.createElement("img");
        articleImage.src = article.imageUrl;
        articleCard.appendChild(articleImage);

        const articleTitle = document.createElement("h3");
        articleTitle.textContent = article.title;
        articleCard.appendChild(articleTitle);

        const articleDescription = document.createElement("p");
        articleDescription.textContent = article.description;
        articleCard.appendChild(articleDescription);

        articlesContainer.appendChild(articleCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
    });
});
