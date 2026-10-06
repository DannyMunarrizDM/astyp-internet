const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

function closeMenu() {
  menuButton.classList.remove("active");
  navMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});


// Galería

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxClose = document.querySelector(".lightbox-close");

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt || "Trabajo de Grupo Astyp";

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("lightbox-open");

  lightboxImage.src = "";
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");

    openLightbox(
      item.dataset.image,
      image.alt
    );
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
    closeMenu();
  }
});


// Año

document.getElementById("year").textContent =
  new Date().getFullYear();
