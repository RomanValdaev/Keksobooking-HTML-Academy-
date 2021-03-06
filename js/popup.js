const main = document.querySelector('main');

const successAlert = document.querySelector('#success').content.cloneNode(true).querySelector('.success');
successAlert.classList.add('hidden');
main.appendChild(successAlert);

const errorAlert = document.querySelector('#error').content.cloneNode(true).querySelector('.error');
errorAlert.classList.add('hidden');
main.appendChild(errorAlert);

const errorButton = document.querySelector('.error__button');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const isEnterEvent = (evt) => evt.key === 'Enter';

const onSuccessPopupEscKeydown = (evt) => {
  if (isEscEvent(evt) || evt.currentTarget === document) {
    evt.preventDefault();
    successAlert.classList.add('hidden');
    document.removeEventListener('keydown', onSuccessPopupEscKeydown);
    document.removeEventListener('click', onSuccessPopupEscKeydown);
  }
};
const onErrorPopupEscKeydown = (evt) => {
  if (isEscEvent(evt) || evt.currentTarget === document) {
    evt.preventDefault();
    errorAlert.classList.add('hidden');
    document.removeEventListener('keydown', onErrorPopupEscKeydown);
    document.removeEventListener('click', onErrorPopupEscKeydown);
  }
};
const openSuccessModal = () => {
  successAlert.classList.remove('hidden');
  document.addEventListener('keydown', onSuccessPopupEscKeydown);
  document.addEventListener('click', onSuccessPopupEscKeydown);
};
const openErrorModal = () => {
  errorAlert.classList.remove('hidden');
  document.addEventListener('keydown', onErrorPopupEscKeydown);
  document.addEventListener('click', onErrorPopupEscKeydown);
};
const closeErrorModal = () => {
  errorAlert.classList.add('hidden');
  document.removeEventListener('keydown', onErrorPopupEscKeydown);
  document.removeEventListener('click', onErrorPopupEscKeydown);
};
errorButton.addEventListener('click', () => {
  closeErrorModal();
});
errorButton.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    closeErrorModal();
  }
});

export {openSuccessModal, openErrorModal, successAlert, errorAlert, isEscEvent, isEnterEvent};
