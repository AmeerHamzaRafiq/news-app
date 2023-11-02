const div = document.querySelector(".main-div");
let Newses = [];

async function gettingNews() {
  try {
    const latestNews = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=publishedAt&apiKey=e5684ed868c6486cba12dd3b631e5edf"
    );

    const response = await latestNews.json();
    Newses = response.articles;
   console.log(response);
    render();
  } catch (error) {
    console.log(error);
  }
}

async function render() {
  if (Newses) {
    div.innerHTML = "";

    Newses.forEach((items, index) => {
      div.innerHTML += `<div class="mainDiv"> 
        <div onclick="goToPage(${index})">
        <img src="${items.urlToImage ? items.urlToImage :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5r6DPIwnYxiEFGgsN_GOgFRs9mkjipz5AaA&usqp=CAU"}" class="cardImg" alt="...">
        <h1 class="cardHeading">${items.author}</h1>
          <h3 class="title">${items.title.slice(0, 60)}...</h3> 
          <p class="para">${items.description.slice(0, 70)}...</p>
        </div>
      </div>`;
    });
  }
}

gettingNews();

function goToPage(index) {
  const oneNews = Newses[index];
  const newsData = JSON.stringify(oneNews);
  localStorage.setItem("news", newsData);
  window.location = "ReadNews.html";
}










