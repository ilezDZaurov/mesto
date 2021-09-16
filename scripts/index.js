const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__button');
const popupCloseBtn = popup.querySelector('.popup__close');
const leadName = document.querySelector('.profile__title');
const leadJob = document.querySelector('.profile__text');
let formElement = popup.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()
let nameInput = formElement.querySelector('.popup__nameInput'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__jobInput'); // Воспользуйтесь инструментом .querySelector()


function popupToggle() {
	popup.classList.toggle('popup__opened');
}

function popupClose() {
	popup.classList.toggle('popup__opened' ,setPopupInputValue());
}


popupOpenBtn.addEventListener('click', popupToggle, setPopupInputValue());
popupCloseBtn.addEventListener('click' , popupClose);





function setPopupInputValue() {
	nameInput.value = leadName.textContent.trim();
	jobInput.value = leadJob.textContent.trim();
}
function setTextInputValue() {
	leadName.textContent = nameInput.value;
	leadJob.textContent = jobInput.value;
}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
	evt.preventDefault();
	setTextInputValue();
	popupToggle();

}


formElement.addEventListener('submit', formSubmitHandler);