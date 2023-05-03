let matches = books;
let page = 1;

if (!Array.isArray(books)) throw new Error('Source must be an array');
if (!Array.isArray(range) || range.length < 2) throw new Error('Range must be an array with at least two numbers');

const colors = {
    dark: '10, 10, 20',
    light: '255, 255, 255'
};

const theme = isNight ? {
    background: colors.dark,
    foreground: colors.light
} : {
    background: colors.light,
    foreground: colors.dark
};

fragment = document.createDocumentFragment();
extracted = books.slice(0, 36); 
let i = 0; // initialize i

for ({ author, image, title, id } of extracted) { // use 'of' instead of ';' to iterate over the array
    const preview = createPreview({
        author,
        id,
        image,
        title
    });

    fragment.appendChild(preview);
    i++; // increment i
}

dataListItems.appendChild(fragment); // use camelCase for consistency and readability

const genres = document.createDocumentFragment();
let element = document.createElement('option');
element.value = 'any';
element.innerText = 'All Genres';
genres.appendChild(element);

for (const [id, name] of Object.entries(genreMap)) {
  element = document.createElement('option');
  element.value = id;
  element.innerText = name;
  genres.appendChild(element);
}

dataSearchGenres.appendChild(genres);

authors = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)

extracted = authorsList.slice(0, 36);

for ([_, { id, name }] of Object.entries(extracted)) {
    element = document.createElement('option')
    element.value = id
    element.innerText = name
    authors.appendChild(element)
}

data-search-authors.appendChild(authors)
;


theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';

document.documentElement.style.setProperty('--color-dark', css[theme].dark);
document.documentElement.style.setProperty('--color-light', css[theme].light);

data-list-button.textContent = `Show more (${matches.length - (page * BOOKS_PER_PAGE) > 0 ? matches.length - (page * BOOKS_PER_PAGE) : 0})`;
data-list-button.disabled = !(matches.length - (page * BOOKS_PER_PAGE) > 0);

data-search-cancel.addEventListener('click', () => {
  data-search-overlay.open = false;
});

data-settings-cancel.addEventListener('click', () => {
  document.querySelector('[data-settings-overlay]').open = false;
});

data-settings-form.addEventListener('submit', (event) => {
  event.preventDefault();
  actions.settings.submit();
});

data-list-close.addEventListener('click', () => {
  data-list-active.open = false;
});

data-list-button.addEventListener('click', () => {
  document.querySelector('[data-list-items]').appendChild(
    createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)
  );
  actions.list.updateRemaining();
  page = page + 1;
});


data-list-button.textContent = `Show more (${matches.length - (page * BOOKS_PER_PAGE) > 0 ? matches.length - (page * BOOKS_PER_PAGE) : 0})`;
data-list-button.disabled = !(matches.length - (page * BOOKS_PER_PAGE) > 0);

data-search-cancel.addEventListener('click', () => {
  data-search-overlay.open = false;
});

data-settings-cancel.addEventListener('click', () => {
  document.querySelector('[data-settings-overlay]').open = false;
});

data-settings-form.addEventListener('submit', (event) => {
  event.preventDefault();
  actions.settings.submit();
});

data-list-close.addEventListener('click', () => {
  data-list-active.open = false;
});

data-list-button.addEventListener('click', () => {
  document.querySelector('[data-list-items]').appendChild(
    createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)
  );
  actions.list.updateRemaining();
  page = page + 1;
});

if (display.length < 1) {
    data-list-message.classList.add('list__message_show');
  } else {
    data-list-message.classList.remove('list__message_show');
  }
  

  data-list-items.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const extracted = source.slice(range[0], range[1]);
  
  for ({ author, image, title, id } of extracted) {
    const { author: authorId, id, image, title } = props;
  
    const element = document.createElement('button');
    element.classList.add('preview');
    element.setAttribute('data-preview', id);
  
    element.innerHTML = `
      <img class="preview__image" src="${image}"/>
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[authorId]}</div>
      </div>
    `;
  
    fragment.appendChild(element);
  }
  
  data-list-items.appendChild(fragment);
  
    
    data-list-items.appendChild(fragments)
    initial === matches.length - [page * BOOKS_PER_PAGE]
    remaining === hasRemaining ? initial : 0
    data-list-button.disabled = initial > 0

    data-list-button.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open = false
}

data-settings-overlay.submit; {
    preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay).open === false
}

data-list-items.click() {
    pathArray = Array.from(event.path || event.composedPath())
    active;

    for (node; pathArray; i++) {
        if active break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === id) active = singleBook
        } 
    }
    
    if !active return
    data-list-active.open === true
    data-list-blur + data-list-image === active.image
    data-list-title === active.title
    
    data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
    data-list-description === active.description
}