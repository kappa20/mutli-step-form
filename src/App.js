import "./App.css";
// import { useState } from "react";
import data from "./steps.json";
import SideBar from "./Components/Sidebar.js";
export default function App() {
  
  return (
    <div className="app">
      <div className="formContainer">
        
          <SideBar steps={data}/>
        <main>

        </main>
      </div>
    </div>
  );
}
