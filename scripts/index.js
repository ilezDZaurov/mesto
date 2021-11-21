
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

const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.form-profile');
const openProfileButton = document.querySelector('.profile__button');
const closeProfileButton = profilePopup.querySelector('.popup__close-form');
const leadName = document.querySelector('.profile__title');
const leadJob = document.querySelector('.profile__text');
const profileFormElement = profilePopup.querySelector('.popup__container-profile'); 
const nameInput = profileFormElement.querySelector('.popup__input_type_name'); 
const jobInput = profileFormElement.querySelector('.popup__input_type_job'); 

const popupAdd = document.querySelector('.add-image');
const popupFormAdd = document.querySelector('.popup__container-add');
const popupOpenAdd = document.querySelector('.profile__add');
const popupCloseAdd = popupAdd.querySelector('.popup__close-add');
const cardItems = document.querySelector('.card__items');
const cardItem = document.querySelector('.card__item');
const addButton = document.querySelector('.popup__button-add');
const addTemplate = document.querySelector('.card-template');

const popupImgs = document.querySelector('.images-expand');
const popupImg = document.querySelector('.popup__image');
const popupImgName = document.querySelector('.popup__image-title');
const popupCloseImg = document.querySelector('.popup__close-img');



function openPopup(popups) {
	popups.classList.add('popup_opened');
	document.addEventListener('keydown', closeEscPopup);
	
	
  }
  
  function closePopup(popups) {
	popups.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeEscPopup);
	
  }

  function closeEscPopup(evt) {
	if (evt.key === 'Escape') {
	  const currentPopup = document.querySelector('.popup_opened');
	  closePopup(currentPopup);
	  }
  }

  popups.forEach((popup) => {
	popup.addEventListener('click', (evt) => {
		if (evt.target.classList.contains('popup_opened')) {
			closePopup(popup);
		}
	});
  });
  
  
  function openPopupProfile() {
	nameInput.value = leadName.textContent.trim();
	jobInput.value = leadJob.textContent.trim();
	openPopup(profilePopup);
  }

function submitProfileForm(evt) {
	evt.preventDefault();
	leadName.textContent = nameInput.value;
	leadJob.textContent = jobInput.value;
	closePopup(profilePopup);
}

function createCard(item) {
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
  const addElement = createCard(item);
  cardItems.prepend(addElement); 
 
  
}

function newCard(evt) {
	evt.preventDefault();
	const inputPlace = evt.currentTarget.querySelector('.popup__input_type_place').value; 
	const inputlink = evt.currentTarget.querySelector('.popup__input_type_link').value;
 	renderElements ({name: inputPlace, link: inputlink});
	closePopup(popupAdd);
	evt.currentTarget.reset();
	disableSubmitButton();
	
	
	
  }


  function like(evt) {
	evt.target.classList.toggle('card__like_active'); 
  }


function cardDel(evt) {
	const deleteFoto = evt.currentTarget.closest('.card__item');
	deleteFoto.remove();

	
  }


function disableSubmitButton (){
	addButton.classList.add('popup__button_invalid');
	addButton.disabled = true;
}
  
  function openImg (evt) {
	openPopup(popupImgs);
	popupImg.src = evt.target.src;
	popupImg.alt = evt.currentTarget.alt;
	popupImgName.textContent = evt.currentTarget.alt;
	
	
  }

popupFormAdd.addEventListener('submit', newCard); 
profileFormElement.addEventListener('submit', submitProfileForm);
popupOpenAdd.addEventListener('click', () => openPopup(popupAdd) );
popupCloseAdd.addEventListener('click', () => closePopup(popupAdd));

openProfileButton.addEventListener('click', () => openPopupProfile(profilePopup));
closeProfileButton.addEventListener('click', () => closePopup(profilePopup));

popupCloseImg.addEventListener('click', () => closePopup(popupImgs));

