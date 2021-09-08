import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(resp => resp.json())
    .then(data => setListings([...listings, data]))
  }, []);

  function filterListings(query) {
    const newList = listings.filter(listing => listing.filter(list => {if(list.description.includes(query)){return {...list}}}))
    setListings(newList);
    // console.log(newList)
      // listing.description.includes(query));
    // setListings(newList)
  }

console.log(listings)
  return (
    <div className="app">
      <Header filterListings={filterListings} />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
