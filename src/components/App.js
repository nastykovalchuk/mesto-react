import { useState } from "react";
import Footer from "./footer";
import Header from "./Header";
import Main from "./main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState();
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState();
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleDeliteClick() {
    setIsDeletePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onEditDelite={handleDeliteClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name={"avatarPopup"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__field">
              <input
                type="url"
                id="profile-avatar-field"
                className="popup__input"
                name="valueProfileAvatar"
                placeholder="Ссылка на аватар"
                title="Ссылка на аватар"
                required="required"
              />
              <span className="popup__input-error profile-avatar-field-error"></span>
            </label>
          </>
        }
      />
      <PopupWithForm
        name={"profilePopup"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label>
              <input
                className="popup__input"
                id="name-input"
                name="name"
                type="text"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="popup__input-error name-input-error"> </span>
            </label>
            <label className="popup__field">
              <input
                className="popup__input"
                id="aboutMe-input"
                name="aboutMe"
                type="text"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="popup__input-error aboutMe-input-error"> </span>
            </label>
          </>
        }
      />
      <PopupWithForm
        name={"placePopup"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label>
              <input
                className="popup__input"
                id="placeName-input"
                name="name"
                type="text"
                placeholder="Название"
                required
              />
              <span className="popup__input-error placeName-input-error"></span>
            </label>
            <label className="popup__field">
              <input
                className="popup__input"
                id="link-input"
                name="name"
                type="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error link-input-error"></span>
            </label>
          </>
        }
      />

      <PopupWithForm
        name={"popup_delite_place"}
        title={"Вы уверены?"}
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
      card = {selectedCard}
      onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
