// Add imports above this line
import SimpleLightbox from 'simplelightbox';
console.log(galleryItems);
console.log(SimpleLightbox);
import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryList = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  )
  .join('');
galleryList.insertAdjacentHTML('beforeend', markup);
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
console.log(galleryList);
