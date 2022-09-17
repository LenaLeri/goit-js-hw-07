import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGallery = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>`;
  })
  .join("");

getGallery.insertAdjacentHTML("beforeend", createGalleryMarkup);

var lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: "250",
});
