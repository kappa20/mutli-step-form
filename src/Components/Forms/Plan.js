import plans from "./plans.json";
import Offer from "../Offer";
import { useState } from "react";

export default function Plan() {
  const [isMonth, setIsMonth] = useState(true);
  const [selectedPlan,setSelectedPlan] = useState(null);

  function handleSelectPlan(pla){
        setSelectedPlan(pla)
  }
  
  let offers = plans.map((plan) => {
    let selected = false;
    if(selectedPlan != null && plan.title === selectedPlan.title){
        selected = true;
    }
    return <Offer key={plan.title} isSelected={selected}  selectPlanHandle={handleSelectPlan}  
    plan={plan} isMonth={isMonth} />;
  });

  return (
    <>
      <div id="offers">{offers}</div>
      <div id="planSwitcher">
        <div>
          <button  className={isMonth ? 'isActive':'isNotActive'} 
          onClick={() => setIsMonth(true)}>Monthly</button>
          <button onClick={() => setIsMonth(!isMonth)}>
            <div id='switch'>
                <div id='switch-dot' className={!isMonth ? 'flotRight':''}>

                </div>
            </div>
          </button>
          <button className={`${!isMonth ? 'isActive':'isNotActive'}`}  onClick={() => setIsMonth(false)}>Yearly</button>
        </div>
      </div>
    </>
  );
}
