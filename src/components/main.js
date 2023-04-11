import React, { useState, useEffect } from "react";
import Api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("123");
  const [userDescription, setUserDescription] = useState("321");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => console.log(error));
    Api.getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="page__main">
      <section className="profile">
        <div
          className="profile__avatar"
          style={{
            backgroundImage: `url(${userAvatar})`,
            backgroundSize: "cover",
            borderRadius: "50%",
            backgroundPosition: "center",
          }}
        >
          <button
            type="button"
            className="profile__avatar-edit-button"
            title="Редактировать профиль"
            aria-label="Редактировать профиль"
            onClick={() => {
              props.onEditAvatar();
            }}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={() => {
              props.onEditProfile();
            }}
          ></button>
          <p className="profile__about">{userDescription}</p>
        </div>

        <button
          type="button"
          className="profile__add-button"
          onClick={() => {
            props.onAddPlace();
          }}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__card">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
