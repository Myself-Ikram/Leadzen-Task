import React from "react";
import Header from "./Header";
import Pagination from "./Pagination";
function App() {
  return (
    <div
      style={{
        backgroundColor: "#dfe6e9",
        fontFamily: "Monospace",
      }}
    >
      <Header />
      <Pagination />
    </div>
  );
}

export default App;
