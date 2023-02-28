import Info from "./Forms/Info";
import Plan from "./Forms/Plan";
import AddOns from "./Forms/AddOns";
import Summary from "./Forms/Summary";

export default function Forms({index,ref}){
    
    let forms = [<Info />,<Plan />,<AddOns />,<Summary />];
    
    return (
        <div id='formsContainer'>
        {forms[index]}
        </div>
    );
}
