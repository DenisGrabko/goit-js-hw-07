import { galleryItems } from './gallery-items.js';


// Change code below this line


const galleryTotal = document.querySelector(".gallery");

const createEl = galleryItems.map((element) => `<li class="gallery__item">
<a class="gallery__link" href="${element.original}">
<img
  class="gallery__image"
  src="${element.preview}"
  data-source="${element.original}"
  alt="Image description"
/>
</a></li>`).join('');
galleryTotal.insertAdjacentHTML('beforeend', createEl);


const modalWindow = (event) => {
    event.preventDefault();

     if(event.currentTarget === event.target) {
        return;
    }
    const currentItem = event.target.closest(".gallery__image");
    const clickedImage = event.target.dataset.source;      

const modal = basicLightbox.create(`<img src="${clickedImage}" width="800" height="600">`);
modal.show();

const handleClickEscape = (event) => {
    if(event.key === 'Escape') {        
            modal.close();
            document.removeEventListener('keydown', handleClickEscape);
        } 
    };  
    
document.addEventListener('keydown', handleClickEscape);
};

galleryTotal.addEventListener('click', modalWindow);




