
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const renderContent = () => {
    switch (page) {
      case "home":
        return <h2 style={{ color: "green" }}>Welcome to Home</h2>;
      case "about":
        return <h2 style={{ color: "blue" }}>About Us</h2>;
      case "contact":
        return <h2 style={{ color: "orange" }}>Contact Us</h2>;
      default:
        return <h2>Page Not Found</h2>;
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </nav>
      <div>{renderContent()}</div>
    </div>
  );
}

export default App;
