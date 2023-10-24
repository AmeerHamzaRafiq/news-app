const div = document.querySelector(".main-div");

async function gettingNews() {
  try {
    const latestNews = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=e5684ed868c6486cba12dd3b631e5edf"
    );
    const response = await latestNews.json();
    const articles = response.articles;
    Nawses = articles;

    render();
  } catch (error) {
    console.log(error);
  }
}

async function render() {
  if (Nawses) {
    div.innerHTML = "";

    Nawses.forEach((items) => {
      div.innerHTML += `<div class="title-div"> 
        <div>
        <img  src="${
          items.urlToImage
            ? items.urlToImage
            : "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp"
        }" class="cardImg" alt="...">
          <h3 class="title">${items.title.slice(0, 60)}...</h3>
          <p class="para">${items.description.slice(0, 70)}...</p>
          <a href="#" class="btn">Go somewhere</a>
        </div>
      </div>`;
    });
  }
}

gettingNews();
