import React, {useState} from "react";

function ListingCard( { listing, onDelete } ) {
  const {id, image, description, location} = listing;
  const [favorited, setFavorited] = useState(false);
  
  function handleDel() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      console.log("Deleted")
      onDelete(id)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
      {favorited ? (
          <button
            onClick={() => setFavorited(false)}
            className="emoji-button favorite active">★</button>
        ) : (
          <button
            onClick={() => setFavorited(true)}
            className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDel} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
