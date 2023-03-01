import plans from "./plans.json";
import Offer from "../Offer";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateInfo } from "../../features/userSlice";
export default function Plan() {
  const userInfo = useSelector((state) => state.userInfo.value);
  const dispatch = useDispatch();
  const [isMonth, setIsMonth] = useState(true);
  const [selectedPlan,setSelectedPlan] = useState(null);

  function handleSelectPlan(pla){
        setSelectedPlan(pla)
        dispatch(updateInfo({
          plan:pla,
          planType:isMonth ? 'month':'year'}))
  }
  useEffect(()=>{
    setSelectedPlan(userInfo.plan);
    if(userInfo.planType === '')return;
    else if(userInfo.planType === 'month') setIsMonth(true);
    else setIsMonth(false);

  },[userInfo]);
  useEffect(()=>{
    console.log(userInfo)
    dispatch(updateInfo({
      planType:isMonth ? 'month':'year'}))
  },[isMonth,dispatch,userInfo])
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
