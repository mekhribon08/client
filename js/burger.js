document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector("[data-burger]")
      .addEventListener("click", function () {
          document.querySelector('header').classList.toggle("open")
      });
  });
  