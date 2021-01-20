import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => setListings(data));
  }, [])
  // console.log(listings)

  function handleDeletedListings(id) {
    const updatedArr = listings.filter(
      (listing) => listing.id !== id
      );
    setListings(updatedArr)
  };
  
  const filteredArr = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  });

  const listingCards = filteredArr.map((listObj) => {
    return (
    <ListingCard 
    onDelete={handleDeletedListings}
    key={listObj.id} 
    listing={listObj} />
  );
});

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
