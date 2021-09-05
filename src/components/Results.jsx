import React from "react";

const Results = ({ searchData }) => {
  return (
    <div>
      {searchData &&
        searchData.map((res) => {
          return (
            <div key={res.id}>
              <h2>{res.name}</h2>
              <img src={res.image.url} alt={res.name} />
            </div>
          );
        })}
    </div>
  );
};

export default Results;
