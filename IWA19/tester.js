// import { books,authors,BOOKS_PER_PAGE, genres } from "./data.js";

// const matches = books
// let page = 1;

// let range = books.length;

// //View mode
// const day = {
//   dark: '10, 10, 20',
//   light: '255, 255, 255',
// };
// const night = {
//   dark: '255, 255, 255',
//   light: '10, 10, 20',
// };

// //preview
// function createPreview({ author, id, image, title }) {
//     const preview = document.createElement('div');
//     preview.classList.add('preview');
//     const kat = /*html*/
//     `<div class= "preview__info">
//     <img class= "preview__image" src="${image}">
//     <h1 class="preview__title">"${title}"</h1>
//     <h2 class="preview__author">"${authors[author]}"</h2>
//     </div>`
//     preview.innerHTML = kat
//     return preview
// }
// let fragment = document.createDocumentFragment()

// // 36 Books shown
// // const extracted = books.slice(0 , 36);
// // for (const {author ,title ,image , id} of extracted) {
// //     //const { author, image, title, id } = extracted[i];
// //     const preview = createPreview({
// //       author,
// //       id,
// //       image,
// //       title,
// //     });
// //     fragment.appendChild(preview);
// //   }

// const extracted = books.slice(0 , 36);
// for (const)

//   const dataListItems = document.querySelector('[data-list-items]');
//     dataListItems.appendChild(fragment);

// const moreBooks = document.querySelector('[data-list-button]'); // created a variable and called data-list-button from the DOM



// const showMore = page * BOOKS_PER_PAGE; /*  Show more */   //moved it to the line below and removed the = before. removed books and replaced with matches so that it can get total number of books
 
// // show more books button
//   moreBooks.addEventListener('click', () => {
//     const dataListItems = document.querySelector('[data-list-items]');
//     const remaining = matches.slice(showMore, matches.length);
//     const fragment = document.createDocumentFragment();
    
//     for (const { author, title, image, id } of remaining) {
//       const preview = createPreview({ author, id, image, title });
//       fragment.appendChild(preview);
//     }
    
//     dataListItems.appendChild(fragment);
//     showMore += remaining.length;
//     moreBooks.disabled = !(matches.length - showMore > 0);
//     moreBooks.innerHTML = /* html */ `
//     <span>Show more ${matches.length - showMore > 0 ? matches.length - showMore : 0}</span>
//     <span class="list__remaining">${matches.length - showMore > 0 ? matches.length - showMore : 0}</span>
//     `;
//     
//   });

// // search button overlay
// const searchForm = document.createElement('form');
// searchForm.classList.add('search-form');


// const headerButton = document.querySelector('.header__button');

// headerButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   const searchOverlay = document.querySelector('[data-search-overlay]');
//   searchOverlay.showModal();
// });

// const genreOverlay = document.querySelector('')






import { books,authors,BOOKS_PER_PAGE,genres } from "./data.js";
let page = 1;
let range = books.length

const matches = books

function createPreview({ author, id, image, title }) {
    const preview = document.createElement('div');
    preview.classList.add('preview');
    const kat=/*html/
    `<div class= "preview__info">
    <img class= "preview__image" src="${image}">
    <h1 class="preview__title">"${title}"</h1>
    <h2 class="preview__author">"${authors[author]}"</h2>
    </div>`
    preview.innerHTML=kat
    return preview
}
let fragment = document.createDocumentFragment()


const extracted = books.slice(0,36)
for (const {author ,title ,image , id} of extracted) {
    //const { author, image, title, id } = extracted[i];
    const preview = createPreview({
      author,
      id,
      image,
      title,
    });
    fragment.appendChild(preview);
  }
  const dataListItems = document.querySelector('[data-list-items]');
    dataListItems.appendChild(fragment);
const moreBooks = document.querySelector('[data-list-button]') // created a variable and called data-list-button from the DOM
  const showMore = page * BOOKS_PER_PAGE; /*  Show more */   //moved it to the line below and removed the = before. removed books and replaced with matches so that it can get total number of books
 
// show more books button
moreBooks.addEventListener('click', () => {
    const dataListItems = document.querySelector('[data-list-items]');
    const remaining = matches.slice(showMore, matches.length);
    const fragment = document.createDocumentFragment();
  
    for (const { author, title, image, id } of remaining) {
      const preview = createPreview({ author, id, image, title });
      fragment.appendChild(preview);
    }
  
    dataListItems.appendChild(fragment);
    showMore += remaining.length;
    moreBooks.disabled = !(matches.length - showMore > 0);
    moreBooks.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining">${matches.length - showMore > 0 ? matches.length - showMore : 0}</span>
`;

});


const searchForm = document.createElement('form');
searchForm.classList.add('search-form');

const headerButton = document.querySelector('.header__button');

headerButton.addEventListener('click', (event) => {
  event.preventDefault();
  const searchOverlay = document.querySelector('[data-search-overlay]');
  searchOverlay.showModal();

  const cancelButton = document.querySelector('[data-search-cancel]');

  cancelButton.addEventListener('click', () => {
    const searchOverlay = document.querySelector('[data-search-overlay]');
    searchOverlay.open = false;
  });

  
//data search drop down

const dataSearchGenres = document.querySelector("[data-search-genres]");
const allGenresOption = document.createElement("option"); 
allGenresOption.value = "any"; 
allGenresOption.innerText = "All Genres"; 
dataSearchGenres.appendChild(allGenresOption); 
for (const [id, names] of Object.entries(genres)) {
    const element = document.createElement("option"); 
    element.value = id; 
    element.innerText = names; 
    dataSearchGenres.appendChild(element); 
}

for (const [id, names] of Object.entries(genres)) {
    const element = document.createElement("option"); 
    element.value = id; 
    element.innerText = names; 
    dataSearchGenres.appendChild(element); 
}

// Drop down for authors

const dataSearchAuthors = document.querySelector("[data-search-authors]"); 
const allAuthorsOption = document.createElement("option");
allAuthorsOption.value = "any";
allAuthorsOption.innerText = "All Authors";
dataSearchAuthors.appendChild(allAuthorsOption);
for (const [id, names] of Object.entries(authors)) {
    const element = document.createElement("option");
    element.value = id;
    element.innerText = names;
    dataSearchAuthors.appendChild(element);
}
});
