import React, { useState, useEffect } from "react";
import app from "./base";
import { db } from "../src/base";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await db.collection("Products");
      products.get().then((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(tempDoc);
      });
    }

    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.desc}</p>
                <p className="card-text">{product.price}</p>
                <a href="#" className="btn btn-primary stretched-link">
                  купить
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
