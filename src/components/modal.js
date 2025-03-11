
const popup = document.querySelector('.popup');
export const dialogClose = popup.querySelector('.closeDialogBtn');

function popupOpen() {
    popup.classList.add('popup_active');
}

function popupClose() {
    popup.classList.remove('popup_active');
}

export { popupOpen, popupClose }