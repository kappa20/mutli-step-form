import "./App.css";
import { useState } from "react";
import data from "./steps.json";
import SideBar from "./Components/Sidebar.js";
import Forms from "./Components/Forms.js";

export default function App() {
  const [stepIndex,setStepIndex] = useState(1);
  
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
              <Forms index={stepIndex}/>
            </main>

            <div id='btnsContainer'>
               {stepIndex !== 0 &&<button onClick={()=> {if(stepIndex === 0){return}setStepIndex((stepIndex - 1) % 4)}} id='goBackBtn'>Go Back</button>} 
                <button onClick={()=> {if(stepIndex === 3){return}setStepIndex((stepIndex + 1) % 4)}} id='nextBtn'>Next step</button>
            </div>
        </section>
      </div>
    </div>
  );
}
