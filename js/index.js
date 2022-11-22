//remove hash
window.addEventListener("hashchange", () => {
  history.replaceState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
});

// jump to main content
const contactLink = document.querySelector("#contact--link");
const gallery = document.querySelector(".gallery");
const contact = document.querySelector(".contact");
const galleryLink = document.querySelector("#gallery--link");

contactLink.addEventListener("click", () => {
  gallery.style.display = "none";
  contact.style.display = "flex";
});

galleryLink.addEventListener("click", () => {
  gallery.style.display = "flex";
  contact.style.display = "none";
});
