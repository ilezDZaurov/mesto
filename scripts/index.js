const popup = document.querySelector('.popup__form');
const popupOpenBtn = document.querySelector('.profile__button');
const popupCloseBtn = popup.querySelector('.popup__close-form');
const leadName = document.querySelector('.profile__title');
const leadJob = document.querySelector('.profile__text');
const formElement = popup.querySelector('.popup__container-profile'); 
const nameInput = formElement.querySelector('.popup__input_type_name'); 
const jobInput = formElement.querySelector('.popup__input_type_job'); 

const popupAdd = document.querySelector('.popup__add');
const popupFormAdd = document.querySelector('.popup__container-add');
const popupOpenAdd = document.querySelector('.profile__add');
const popupCloseAdd = popupAdd.querySelector('.popup__close-add');
const cardItems = document.querySelector('.card__items');
const cardItem = document.querySelector('.card__item');
const addButton = document.querySelector('.popup__button-add');
const addTemplate = document.querySelector('.card-template');



const popupImgs = document.querySelector('.popup__images');
const popupImg = document.querySelector('.popup__image');
const popupImgName = document.querySelector('.popup__image-title');
const popupCloseImg = document.querySelector('.popup__close-img');




	

function popupToggleAdd() {
	popupAdd.classList.toggle('popup_opened');


}

function popupToggle() {
	popup.classList.toggle('popup_opened');


}
popupOpenAdd.addEventListener('click', popupToggleAdd);
popupCloseAdd.addEventListener('click', popupToggleAdd);

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


function formSubmitHandler(evt) {
	evt.preventDefault();
	setTextInputValue();

}

formElement.addEventListener('submit', formSubmitHandler);




const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
		
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];


function cardAdd(item) {
	const addElement = addTemplate.content.cloneNode(true);
	addElement.querySelector('.card__name').textContent = item.name;
	addElement.querySelector('.card__image').src = item.link;
	addElement.querySelector('.card__image').alt = item.name;
	addElement.querySelector('.card__like').addEventListener('click', like);
	addElement.querySelector('.card__image ').addEventListener('click', openImg);
    addElement.querySelector('.card__delete').addEventListener('click', cardDel);
	return addElement;
  }
  
initialCards.map(renderElements); 

function renderElements(item) { 
  const addElement = cardAdd(item);
  cardItems.prepend(addElement); 
}

function newCard(evt) {
	evt.preventDefault();
	const inputPlace = evt.currentTarget.querySelector('.popup__input_type_place').value; 
	const inputlink = evt.currentTarget.querySelector('.popup__input_type_link').value;
	const newInitialCards = cardAdd ({name: inputPlace, link: inputlink});
	cardItems.prepend(newInitialCards);
	popupToggleAdd(popupAdd);
	evt.currentTarget.reset();
  }


  function like(evt) {
	evt.target.classList.toggle('card__like_active'); 
  }


function cardDel(evt) {
	const deleteFoto = evt.currentTarget.closest('.card__item');
	deleteFoto.remove();

	
  }

  function popupToggleImg() {
	popupImgs.classList.toggle('popup_opened');

}

popupCloseImg.addEventListener('click', popupToggleImg);
popupImg.addEventListener('click',  popupToggleImg);

  
  
  function openImg (evt) {
	popupToggleImg(popupImgs);
	popupImg.src = evt.target.src;
	popupImg.alt = evt.currentTarget.alt;
	popupImgName.textContent = evt.currentTarget.alt;
	
	
  }

  popupFormAdd.addEventListener('submit', newCard); 
  