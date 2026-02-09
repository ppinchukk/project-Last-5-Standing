(() => {
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-menu-close на кнопку закриття
    closeModalBtn1: document.querySelector("[data-modal-close1]"),

    closeModalBtn2: document.querySelector("[data-modal-close2]"),
    // Додати атрибут data-menu на бекдроп меню
    modal: document.querySelector("[data-modal]"), 
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn1.addEventListener("click", toggleModal);
  refs.closeModalBtn2.addEventListener("click", toggleModal);

  const form = document.getElementById('subscribe-form');

  function toggleModal() {
    if (!form.checkValidity()) {
      return;
    }
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }


  form.addEventListener('submit', e => {
    e.preventDefault();
  });
})();

