import { ContextWrapper } from "../../context/ContextWrapper.jsx";
import DashLayout from "./DashLayout.jsx";

export default function Dashboard() {
  return (
    <ContextWrapper>
      <div className="w-full bg-[#203442]">
        <DashLayout />
      </div>
    </ContextWrapper>
  );
}
