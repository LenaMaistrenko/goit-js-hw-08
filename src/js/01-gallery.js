import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createMarkup(arr) {
  const markup = arr
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
  return markup;
}

const imagesMarkup = createMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
// gallery.on('show.simplelightbox', function () {
//   gallery.options.captionsData = 'alt';
//   gallery.options.captionsDelay = 250;
//   console.log(gallery.options);
// });

//console.log(galleryItems);
console.log('hello');
console.log('galleryItems', galleryItems);
