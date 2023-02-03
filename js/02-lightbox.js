import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href="${image.original}">
        <img class="gallery__image"
        src="${image.preview}"
        alt="${image.description}"/>
      </a>`
  )
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

const galleryLightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
