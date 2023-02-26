export default function Step({step,isActive}){
    return (
        <li className={isActive ? 'step active' : 'step'}>
        <div className="stepNum"> {step.id} </div>
        <div className="stepInfo">
          <span>step {step.id}</span>
          <p>{step.sideTitle}</p>
        </div>
      </li>
    );
}