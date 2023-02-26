
import Step from "./Step.js";

export default function SideBar({steps,stepIndex}) {
  const items = steps.map((step,index) => {
    let isActive = index === stepIndex;
    return <Step step={step} isActive={isActive} />;
  });
  return (
    <aside>
      <img src="/assets/images/bg-sidebar-desktop.svg" alt="sidebar" />
      <ul id="stepsContainer">{items}</ul>
    </aside>
  );
}
