import React, { useState } from "react";
import axios from "axios";
import "./imgform.css"
import Form from "../Header/Navbar";

const ImageUploadform = () => {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleImage = (event) => {
        console.log(event.target.files);
      setSelectedFile(event.target.files[0]);
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
  
    return (
      <form onSubmit={handleImageSubmit}>
        <input className="imginp" type="file" size="40" onChange={handleImage} />
        <button className="submit-button subbtn" type="submit">
          Search
        </button>
      </form>
    );
  };
  
  export default ImageUploadform;