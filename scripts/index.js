const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__button');
const popupCloseBtn = popup.querySelector('.popup__close');
const leadName = document.querySelector('.profile__title');
const leadJob = document.querySelector('.profile__text');
let formElement = popup.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()
let nameInput = formElement.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()


function popupToggle() {
	popup.classList.toggle('popup_opened');
}




popupOpenBtn.addEventListener('click', setPopupInputValue);
popupCloseBtn.addEventListener('click', popupToggle);





function setPopupInputValue() {
	nameInput.value = leadName.textContent.trim();
	jobInput.value = leadJob.textContent.trim();
	popupToggle();
}
function setTextInputValue() {
	leadName.textContent = nameInput.value;
	leadJob.textContent = jobInput.value;
	popupToggle();
}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
	evt.preventDefault();
	setTextInputValue();

}


formElement.addEventListener('submit', formSubmitHandler);