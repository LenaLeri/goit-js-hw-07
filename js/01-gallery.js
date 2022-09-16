import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGallery = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
          </div>`;
  })
  .join("");

getGallery.insertAdjacentHTML("beforeend", createGalleryMarkup);

getGallery.addEventListener("click", onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
		<img src = '${e.target.dataset.source}' width="800" height="600"/>
	`);

  instance.show();

  document.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
