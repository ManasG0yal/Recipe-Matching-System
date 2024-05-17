import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Card/card";
import Heading from "./heading";
import "./Form.css";
import "../ImageUpload/imgform.css"

const Form = () => {
  const [tagvalue, settagvalue] = useState("Random Recipes");
  const [data, setData] = useState({});
  const [searchType, setSearchType] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleImage = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const indata = { type: searchType, value: inputValue };
    try {
      const response = await axios.post(
        "http://localhost:2000/recommendations",
        indata
      );
      settagvalue("Searched Recipes");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("http://localhost:2000/imagesearch", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      settagvalue("Searched Recipes");
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:2000/");
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
        <div className="formdiv flex-row-reverse">
          <div className="image-upload-form">
            <form onSubmit={handleImageSubmit}>
              <input className="imginp" type="file" size="40" onChange={handleImage} />
              <button className="submit-button subbtn" type="submit">
                Search
              </button>
            </form>
          </div>
          <div>
            <p className="text-4xl p-9 text-white"> or </p>
          </div>
          <div className="w-3/4">
            <form className="form" onSubmit={handleSubmit}>
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
              <button className="submit-button" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="ptag text-4xl">{tagvalue}</p>
      <div className="flex justify-center">
        <hr className="hrval w-5/6  bg-gray-500 my-4 border-red-500 border-t-4"/>
      </div>
      {data.length > 0  ? <Cards sdata={data} /> : console.log("")}
    </div>
  );
};

export default Form;
