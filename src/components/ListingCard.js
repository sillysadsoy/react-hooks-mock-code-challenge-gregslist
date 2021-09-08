import React, { useState } from "react";

function ListingCard({ description, id, location, image="https://via.placeholder.com/300x300", persistDelete }){
  const [liked, setLike] = useState(false);
  const [isDeleted, setDelete] = useState(false);

  function handleLike(e) {
    console.log(e.target.id)
    setLike(!liked)
  }

  function handleDelete(e) {
    console.log(e.target.id)
    setDelete(!isDeleted)
    persistDelete(e.target.id);
  }

  return (
    !isDeleted ?
(    <li id={id} className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button onClick={e => handleLike(e)} id ={id} className="emoji-button favorite active">
          {liked ? '★' : '☆'}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={id} onClick={e => handleDelete(e)} className="emoji-button delete">🗑</button>
      </div>
    </li>)
    :
    null
  );
}

export default ListingCard;
