import "./App.css";
import {useRef, useState } from "react";
import data from "./steps.json";
import SideBar from "./Components/Sidebar.js";
import Forms from "./Components/Forms.js";
import Header from "./Components/Header";
import { useSelector } from "react-redux";

export default function App() {
  const userInfo = useSelector((state) => state.userInfo.value)
  const [stepIndex,setStepIndex] = useState(2);

  const infoFormRef = useRef(null);

  const goNext = ()=>{
   
    if(stepIndex === 0 ){
      console.log(infoFormRef.current.click());
    }
    else if(stepIndex === 1){
      (userInfo.plan === '') ? alert('Choose A plan') :setStepIndex(2);
     
    }
    else if(stepIndex === 3){
      return 
    }
    
  }
  return (
    <div className="app">
      
      <div className="formContainer">
        
          <SideBar stepIndex={stepIndex}  steps={data}/>
        <section >
            <Header data={data[stepIndex]}/>
            <main>
              <Forms  handleStep={setStepIndex}  infoFormRef={infoFormRef} index={stepIndex}/>
            </main>

            <div id='btnsContainer'>
               {stepIndex !== 0 &&<button onClick={()=> {if(stepIndex === 0){return}setStepIndex(stepIndex - 1)}} id='goBackBtn'>Go Back</button>} 
                <button onClick={goNext} id='nextBtn'>Next step</button>
            </div>
        </section>
      </div>
    </div>
  );
}
