import articles from './data.js';
import { toggleDarkMode }  from './themes.js';

// light/dark mode function
document.addEventListener('DOMContentLoaded', () =>{
    toggleDarkMode() ;
})


  //map the article
  const articleContainer = document.querySelector('.section-centre');

   const Allarticles = articles.map((article) => {
const formattedDate = article.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
   });
    return`
    <article class="news-article">
    <h3 class="title">${article.title}</h3>
        <div class="time">
            <p class="date">${formattedDate}</p>
            <p class="time-to-read">${article.length} min read</p>
        </div>
        <p>${article.snippet}</p>
  
</article>
    `;
   })
   articleContainer.innerHTML = Allarticles.join('');