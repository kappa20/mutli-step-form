import "./App.css";
import { useState } from "react";
import data from "./steps.json";
import SideBar from "./Components/Sidebar.js";

export default function App() {
  const [stepIndex,setStepIndex] = useState(0);
  
  return (
    <div className="app">
      
      <div className="formContainer">
        
          <SideBar stepIndex={stepIndex}  steps={data}/>
        <section >
            <div id='stepDesc'>
                <h1 >
                {data[stepIndex].title}
                </h1>
                <p>
                  {data[stepIndex].description}
                </p>
            </div>

            <main>
              
            </main>

            <div id='btnsContainer'>
                <button onClick={()=> {if(stepIndex === 0){return}setStepIndex((stepIndex - 1) % 4)}} id='goBackBtn'>Go Back</button>
                <button onClick={()=> {if(stepIndex === 3){return}setStepIndex((stepIndex + 1) % 4)}} id='nextBtn'>Next step</button>
            </div>
        </section>
      </div>
    </div>
  );
}
