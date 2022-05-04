import React, {useState} from "react";

function ListingCard({data, onDelete}) {
  const {image, id, description, location} = data
  const [isFav, setFav]= useState(false)

  const handleFavOnChange= () => {
    setFav(() => !isFav)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button onClick={handleFavOnChange} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavOnChange} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={()=>onDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
