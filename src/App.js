import "./App.css";
// import { useState } from "react";
import data from "./steps.json";
import SideBar from "./Components/Sidebar.js";

export default function App() {
  
  return (
    <div className="app">
      <div className="formContainer">
        
          <SideBar steps={data}/>
        <section >
            <div id='stepDesc'>
                <h1 >
                {data[0].title}
                </h1>
                <p>
                  {data[0].description}
                </p>
            </div>

            <main>
              form
            </main>

            <div id='btnsContainer'>
                <button id='goBackBtn'>Go Back</button>
                <button id='nextBtn'>Next step</button>
            </div>
        </section>
      </div>
    </div>
  );
}
