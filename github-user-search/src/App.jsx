import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="text-red-500 text-3xl font-bold">
        GitHub User Search
      </h1>
      <p>Project setup complete 🚀</p>
      <Search/>
    </div>
  );
}

export default App;
