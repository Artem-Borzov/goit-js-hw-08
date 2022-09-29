// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const galleryHTML = galleryItems.map(galleryItemRender);

function galleryItemRender({ preview, original, description }) {
  return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
}

galleryEl.insertAdjacentHTML('afterbegin', [...galleryHTML].join(''));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  animationSpeed: 250,
});
