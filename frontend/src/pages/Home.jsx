import React from "react";
import "./home.css";
// import { Form } from "react-router-dom";
// import Header from "../components/Header";
import Cards from "../components/Card/card";
import Form from "../components/Header/Navbar";
import CardList from "../components/Meal/Meal";
function Home() {
  return (
    <div className="main">
      <Form/>
    </div>
  );
}
export default Home;
