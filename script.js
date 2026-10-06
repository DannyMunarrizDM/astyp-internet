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
const closeLightboxButton = document.querySelector(".lightbox-close");

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt || "Trabajo Grupo Astyp";

  lightbox.classList.add("open");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
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

closeLightboxButton.addEventListener("click", closeLightbox);

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

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
