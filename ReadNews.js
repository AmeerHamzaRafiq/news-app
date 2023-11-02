const ReadMeNews = document.querySelector('.ReadNews');


const news = localStorage.getItem('news');
const singleNews = JSON.parse(news);
console.log(singleNews);

const lorem = ('Tasla car ipsum dolor sit amet consectetur adipisicing elit. Provident vitae vero reiciendis fuga expedita odit recusandae necessitatibus neque harum esse aperiam sequi excepturi vel asperiores officiis quisquam soluta quas modi dicta ducimus, consectetur quibusdam nemo. Eaque itaque aliquid sequi officia id in inventore voluptas molestiae debitis, hic dicta. Totam eaque ab sunt dolorum explicabo sit illum velit cumque nihil architecto cum voluptatibus voluptatum asperiores, quod quam dolorem animi doloribus omnis necessitatibus ad facilis perferendis? Aut illo voluptatibus harum? Eveniet cupiditate rerum odit hic corporis, ipsum autem officia veniam maxime libero temporibus omnis ipsa quaerat laborum iste dicta perferendis est exercitationem id maiores repudiandae? Cumque accusamus doloribus amet sequi porro, recusandae, deleniti laudantium reprehenderit temporibus aut corporis ex voluptas molestiae, quod illum quis facilis incidunt rerum modi tempore inventore. Illum, labore mollitia quaerat consequuntur nisi culpa officiis non, molestiae ipsa explicabo, minus placeat laborum repellendus! Sunt aut dicta ea odio laborum nobis non quia, quas voluptates iure rem enim? Delectus fuga laudantium, odit perferendis esse aliquam nostrum nemo rerum eaque? Perferendis amet quo porro facere nulla, laboriosam dolores debitis omnis nisi vel, accusamus mollitia repudiandae voluptatum, minus sequi veritatis non repellendus! Eaque itaque libero dolore nihil, maiores, nemo voluptates dolorem assumenda sapiente recusandae iure. Sequi eius dolore aliquam inventore quibusdam mollitia id incidunt libero perferendis at voluptas alias, quidem placeat? Maxime nobis quis et iure ut nulla, numquam voluptatum cum nostrum vitae sapiente autem sit. Magnam adipisci atque accusantium eligendi obcaecati. Voluptates quibusdam temporibus reprehenderit neque, dolorum nam earum. Illo ut aliquam voluptates reprehenderit necessitatibus eos reiciendis eaque vel similique odio fugit nobis modi aliquid in nostrum non labore, eum voluptatem quasi minus iusto');




ReadMeNews.innerHTML = `
    <div >
        <img  id="taslaPosrer" src="${singleNews.urlToImage}" alt="">
        <h1 class="TitleHeading"> ${singleNews.title} </h1>
        <p  class="publish-date"> Published at: ${singleNews.publishedAt}</p>
        <p class="singleNews"> ${singleNews.content}</p>
        <h4 class="singleNews">  ${lorem} </h4>
        <a  class="ReadKnowe" href="${singleNews.url}">Read knowe</a>
    </div>

`