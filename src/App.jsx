import React from "react";
import useFetch from "./useFetch";
import "./App.css";

function App() {
  // fetch LOTS of products (limit=50 for example)
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=50"
  );

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (error) return <h2 className="error">Error: {error}</h2>;

  return (
    <div className="app-container">
      <h1>Products</h1>
      <div className="products-grid">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="price">Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
