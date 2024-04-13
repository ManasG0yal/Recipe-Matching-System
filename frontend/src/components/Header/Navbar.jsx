import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Card/card";
import Heading from "./heading";
import "./Form.css";


const Form = () => {
  const [tagvalue, settagvalue] = useState("Random Recipes");
  const [data, setData] = useState({});
  const [searchType, setSearchType] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleInputChange = async(e) => {
    setInputValue( e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const indata = { type: searchType, value: inputValue };
    try {
      const response = await axios.post(
        "http://localhost:1212/recommendations",
        indata
      );
      settagvalue("Searched Recipes");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:1212/");
        setData(response.data);
      } catch (error) {
        console.log("Error While fetching data on page load");
        console.log(error);
      }
    };

    getData();
  }, []); 


  return (
    <div className="main">
      <div className="head">
        <Heading />
        <div className="formdiv">
          <form className="form" onSubmit={handleSubmit}>
            <select
              className="select"
              value={searchType}
              onChange={handleSearchTypeChange}
              defaultValue="recipe"
            >
              <option value="">Choose from below</option>
              <option value="recipe">Recipe</option>
              <option value="ingredients">Ingredients</option>
            </select>
            <input
              className="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={
                searchType === "recipe"
                  ? "e.g. pasta or cakes etc"
                  : searchType ==="" 
                  ? "write in small letter for best result 100%" 
                  : "e.g. chicken, chilli , carrot"
              }
              required
            />
            <button className="submit-button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      {/* <h1>{tagvalue}</h1> */}
      <p className="ptag text-4xl">{tagvalue}</p>
      <div className="flex justify-center">
      <hr className="hrval w-5/6  bg-gray-500 my-4 border-red-500 border-t-4"/>
      </div>

      {data.length > 0  ? <Cards sdata={data} /> : console.log("")}
    </div>
  );
};

export default Form;