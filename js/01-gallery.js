import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();

  const originalImgUrl = event.target.dataset.source;

  const imgModal = basicLightbox.create(`<img src="${originalImgUrl}">`, {
    onShow: (imgModal) => {
      document.onkeydown = function (event) {
        const isEscape = event.code === "Escape";

        if (isEscape) {
          imgModal.close();
        }
      };
    },
  });

  imgModal.show();
});
