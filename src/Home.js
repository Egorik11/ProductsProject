import React from "react";
import app from "./base";
import axios from "axios"

const Home = () => {
  function getData(){
    axios.get("https://products-5d3e4.firebaseio.com/")
    .then(res => console.log(res))
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
