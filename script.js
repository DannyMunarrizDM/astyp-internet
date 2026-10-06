const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");


function closeMenu() {
  menu.classList.remove("open");
  menuToggle.classList.remove("active");

  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.classList.remove(
    "menu-open"
  );
}


menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");

  menuToggle.classList.toggle(
    "active",
    isOpen
  );

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  document.body.classList.toggle(
    "menu-open",
    isOpen
  );
});


menuLinks.forEach((link) => {
  link.addEventListener(
    "click",
    closeMenu
  );
});


// Galería

const galleryItems =
  document.querySelectorAll(
    ".gallery-item"
  );

const lightbox =
  document.querySelector(
    ".lightbox"
  );

const lightboxImage =
  lightbox.querySelector("img");

const lightboxClose =
  document.querySelector(
    ".lightbox-close"
  );


function openLightbox(src, alt) {
  lightboxImage.src = src;

  lightboxImage.alt =
    alt || "Grupo Astyp";

  lightbox.classList.add("open");

  document.body.classList.add(
    "lightbox-open"
  );
}


function closeLightbox() {
  lightbox.classList.remove("open");

  document.body.classList.remove(
    "lightbox-open"
  );

  lightboxImage.src = "";
}


galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const image =
      item.querySelector("img");

    openLightbox(
      item.dataset.image,
      image.alt
    );
  });
});


lightboxClose.addEventListener(
  "click",
  closeLightbox
);


lightbox.addEventListener(
  "click",
  (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  }
);


document.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Escape") {
      closeLightbox();
      closeMenu();
    }
  }
);


// Aparición de contenido

const revealItems =
  document.querySelectorAll(
    ".reveal"
  );


const revealObserver =
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );
        }
      });
    },
    {
      threshold: 0.1
    }
  );


revealItems.forEach((item) => {
  revealObserver.observe(item);
});


// Año

const year =
  document.getElementById("year");


if (year) {
  year.textContent =
    new Date().getFullYear();
}
