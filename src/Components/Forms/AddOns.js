import addOns from "./add-ons.json"
import Add from "./Add.js";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addAddOnsTitles } from "../../features/userSlice";

export default function AddOns({addOnsFormRef,handleStep}){
    const userInfo = useSelector((state) => state.userInfo.value)
    const dispatch = useDispatch()
    const [isMonth,setIsmonth] = useState(false);
    const [titles,setTitles] = useState(userInfo.addOnsTitles);



    useEffect(()=>{
        // console.log('titles',titles)
        if(userInfo.planType === 'month'){
            setIsmonth(true)
        }else if(userInfo.planType === 'year'){
            setIsmonth(false)

        }

        if(userInfo.addAddOnsTitles){
            // setTitles(userInfo.addAddOnsTitles)
        }
        console.log(titles);
    },[userInfo,titles])
    
    const Adds = addOns.map((ad)=>{
       

        return <Add titles={titles} setTitles={setTitles} title data={ad} key={ad.title} isMonth={isMonth}/>
    })
    function addTitles(){
        dispatch(addAddOnsTitles(titles))
        handleStep(3)
    }
    
    return (
        <>
        <div className="AddOnsContainer">
        {Adds}
        </div>
        {titles}
        <button ref={addOnsFormRef} className="hideNone" style={{cursor:"pointer"}}
        onClick={()=> addTitles()}
        >Add titles to </button>
        </>
    );
}