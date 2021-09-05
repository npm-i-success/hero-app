import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Search = () => {
  const [searchName, setSearchName] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [toggleTrue, setToggleTrue] = useState(false);

  const changeHandler = (e) => {
    setSearchName(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setToggleTrue(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setToggleTrue(true);
  };

  useEffect(() => {
    if (toggleTrue)
      axios
        .get(`${BASE_URL}name/${searchName}`)
        .then((res) => {
          console.log(res.data);
          setSearchData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    setToggleTrue(false);
  }, [toggleTrue, searchName, searchData]);

  return (
    <div className="App">
      <form id="name-form" onSubmit={submitHandler}>
        <input
          type="text"
          id="name-input"
          onChange={changeHandler}
          onKeyDown={onKeyPress}
          placeholder="Enter a search term here"
        />
        <button type="submit" id="submit">
          Search
        </button>
      </form>
      <Results searchData={searchData} />
    </div>
  );
};

export default Search;
