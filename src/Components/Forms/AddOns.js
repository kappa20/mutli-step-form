import addOns from "./add-ons.json"
import Add from "./Add.js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function AddOns(){
    const userInfo = useSelector((state) => state.userInfo.value)
    const [isMonth,setIsmonth] = useState(false);
    useEffect(()=>{
        if(userInfo.planType === 'month'){
            setIsmonth(true)
        }else if(userInfo.planType === 'year'){
            setIsmonth(false)

        }
    
    },[userInfo])
    const Adds = addOns.map((ad)=>{
        return <Add data={ad} key={ad.title} isMonth={isMonth}/>
    })
    return (
        <div class="AddOnsContainer">
        {Adds}
        </div>
    );
}