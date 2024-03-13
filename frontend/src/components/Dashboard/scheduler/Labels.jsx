import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

const lblColors = {
  "bg-indigo-500": "text-indigo-400",
  "bg-gray-500": "text-gray-400",
  "bg-green-500": "text-green-400",
  "bg-blue-500": "text-blue-400",
  "bg-red-500": "text-red-400",
  "bg-purple-500": "text-purple-400",
};

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <>
      <p className="text-gray-500 font-normal mt-10">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 ${lblColors[lbl]} rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">
            {lbl.split("bg-").join("").split("-500")}
          </span>
        </label>
      ))}
    </>
  );
}
