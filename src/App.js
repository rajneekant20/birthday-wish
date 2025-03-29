import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🎉 Happy Birthday Devesh Ji! 🎂</h1>
      <p>Wishing you a fantastic year ahead! 🥳</p>
      <img src="https://source.unsplash.com/400x300/?birthday" alt="Birthday" />
      <button onClick={() => alert("🎁 Surprise! Have a great day!")}>
        Click for a Surprise!
      </button>
    </div>
  );
}

export default App;
