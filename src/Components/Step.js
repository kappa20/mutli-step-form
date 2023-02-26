export default function Step({step}){
    return (
        <li className="step">
        <div className="stepNum"> {step.id} </div>
        <div className="stepInfo">
          <span>step {step.id}</span>
          <p>{step.sideTitle}</p>
        </div>
      </li>
    );
}