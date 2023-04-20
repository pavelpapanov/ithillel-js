const modalButton = document.querySelector('.js--show-more');
const modalWindow = document.querySelector('.js--more-info');

export function showModal() {
  modalButton.addEventListener('click', function () {
    this.classList.add('hide');
    modalWindow.classList.add('show');
  });
}