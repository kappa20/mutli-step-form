
export default function Offer({plan,isMonth,selectPlanHandle,isSelected}){
    function handleSelection(pla){
        if(isSelected === true){

            selectPlanHandle('')
        }else{
            selectPlanHandle(pla)
        }
    }

    
    return (
        <div onClick={()=>handleSelection(plan)} className={`offerContainer ${isSelected && 'activeOffer'}`}>
            <img src={plan.iconPath} alt={plan.title}/>
            <div>
                <p className='offerTitle'>{plan.title}</p>
                <p className='offerPlan'>
                    ${isMonth ? plan.monthPlan + '/mo' : plan.yearPlan +'/yr'}
                </p>
                <label className={`${isMonth ? 'hide':''}`}>
                    { plan.yearOffer}
                </label>
            </div>
        </div>
    );
}