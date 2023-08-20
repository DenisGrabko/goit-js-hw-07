import { galleryItems } from './gallery-items.js';
// Change code below this line

 const gallery = document.querySelector('.gallery');


 const galleryHtml = galleryItems.map(item => `
   <li class="gallery__item"></li></li>
     <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
     </a>
   </li>
 `).join('');
 
 gallery.insertAdjacentHTML('beforeend', galleryHtml);
 
 // Ініціалізація бібліотеки SimpleLightbox
 const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionPosition: 'bottom',
   captionDelay: 250,
 });
 
console.log(lightbox);
