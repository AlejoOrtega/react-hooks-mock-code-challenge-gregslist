import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({data, onDelete}) {
  return (
    <main>
      <ul className="cards">
        {data.map((aData)=> <ListingCard key={aData.id} data={aData} onDelete={onDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
