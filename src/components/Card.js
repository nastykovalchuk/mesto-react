import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__item">
      <button className="elements__delete" type="button"></button>
      <img className="elements__photo" src={props.card.link} alt="" onClick={() => handleClick()} />

      <div className="elements__caption">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-cover">
          <button className="elements__like" type="button"></button>
          <span className="elements__like-counter">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;
