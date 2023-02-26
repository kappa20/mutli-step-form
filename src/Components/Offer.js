export default function Offer({plan,isMonth,selectPlanHandle,isSelected}){
    
    return (
        <div onClick={()=>selectPlanHandle(plan)} className={`offerContainer ${isSelected && 'activeOffer'}`}>
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