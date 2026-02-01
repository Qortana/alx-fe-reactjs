import React from "react";
import Search from "./components/Search";

function App() {
  return (
   <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-red-500 text-5xl font-bold">
        GitHub User Search
      </h1>
      <p>Project setup complete 🚀</p>
      <Search/>
    </div>
  );
}

export default App;
