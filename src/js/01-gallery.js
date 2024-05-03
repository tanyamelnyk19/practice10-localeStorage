import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

//Создание и рендер разметки по массиву данных galleryItems
const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

// Инициализация библиотеки
const gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
