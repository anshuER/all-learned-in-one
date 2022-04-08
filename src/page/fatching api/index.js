import React, { useEffect, useState } from "react";

const FetchinApi = () => {
  const [items, setItems] = useState([]);
  const [search, Setsearch] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  console.log("hello", items);
  
  const filter=items.filter((filterData)=>filterData.title.toLowerCase().includes(search.toLocaleLowerCase()));
  return (
    <div>
      <input
        placeholder="search here"
        onChange={(e)=>Setsearch(e.target.value)}
      />
      {filter.map((data) => (
        <div key={data.id}>
          <text>{data.title}</text>
        </div>
      ))}
    </div>
  );
};
export default FetchinApi;
