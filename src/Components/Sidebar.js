
import Step from "./Step.js";

export default function SideBar({steps}) {
  const items = steps.map((step) => {
    return <Step step={step} />;
  });
  return (
    <aside>
      <img src="/assets/images/bg-sidebar-desktop.svg" alt="sidebar" />
      <ul id="stepsContainer">{items}</ul>
    </aside>
  );
}
