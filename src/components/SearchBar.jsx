import React, { useState } from "react";
import Data from "./../mock-data";

function SearchBar() {
  // **-- search bar implemented using regex --**
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <div className="App">
        <h1>Auto-Complete Search</h1>
        <div className="main">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <ul className="list">
            {Data.filter((city) =>
              city.name.match(new RegExp(searchValue, "i"))
            ).map((city) => {
              return (
                <li>
                  {city.name}
                  {" (state: "}
                  {city.state}
                  {")"}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
  // **-- search bar implemented using includes method  --**
  // const [query, setQuery] = useState("");
  // <div className="App">
  //   <input
  //     placeholder="Search your city..."
  //     onChange={(event) => setQuery(event.target.value)}
  //   />
  //   <div className="list">
  //     {Data.filter((city) => {
  //       if (query === "") {
  //         return city;
  //       } else if (city.name.toLowerCase().includes(query.toLowerCase())) {
  //         return city;
  //       }
  //     }).map((city) => (
  //       <div key={city.id}>
  //         <p>
  //           {city.name} ({city.state})
  //         </p>
  //       </div>
  //     ))}
  //   </div>
  // </div>
}

export default SearchBar;
