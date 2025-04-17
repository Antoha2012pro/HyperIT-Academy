// Модальне вікно header (menu.html)

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-header-open]"),
        closeModalBtn: document.querySelector("[data-modal-header-close]"),
        modal: document.querySelector("[data-modal-header]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();

// Модальне вікно rent (thank.html)

(() => {
    const openBtns  = document.querySelectorAll("[data-modal-open]");
    const closeBtns = document.querySelectorAll("[data-modal-close]");
    const modal     = document.querySelector("[data-modal]");
  
    openBtns.forEach(btn  => btn.addEventListener("click", toggleModal));
    closeBtns.forEach(btn => btn.addEventListener("click", toggleModal));
  
    function toggleModal() {
      modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
  