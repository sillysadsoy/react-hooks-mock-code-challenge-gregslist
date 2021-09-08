import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  const listingItems = listings.map(listing => listing.map(list => { 
    return <ListingCard id={list.id} 
                        key={list.id}
                        image={list.image} 
                        description={list.description} 
                        location={list.location}
                        persistDelete={persistDelete}/>})) 

  function persistDelete(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    });
  console.log(`id: ${id} has been deleted!`)
  };

  return (
    <main>
      <ul className="cards">
        {listingItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
