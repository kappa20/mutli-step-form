import Info from "./Forms/Info";
import Plan from "./Forms/Plan";
import AddOns from "./Forms/AddOns";
import Summary from "./Forms/Summary";

export default function Forms({index,infoFormRef,addOnsFormRef,handleStep}){
    
    let forms = [<Info infoFormRef={infoFormRef} handleStep={handleStep}/>,
    <Plan />,<AddOns addOnsFormRef={addOnsFormRef} handleStep={handleStep}  />,<Summary />];
    
    return (
        <div id='formsContainer'>
        {forms[index]}
        </div>
    );
}
