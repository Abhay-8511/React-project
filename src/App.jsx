import React from "react";
import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://picsum.photos/v2/list?page=2&limit=100"
  );

  if (loading) {
    return (
      <div className="app-container">
        <h1 className="title">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <h1 className="title">Error loading photos 😞</h1>
        <p style={{ color: "#f55", textAlign: "center" }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1 className="title">Photo Gallery</h1>
      <div className="grid">
        {data &&
          data.map((photo) => (
            <div className="card" key={photo.id}>
              <div className="color-box">
                <img
                  src={photo.download_url}
                  alt={photo.author}
                  loading="lazy"
                />
              </div>
              <p>{photo.author}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
