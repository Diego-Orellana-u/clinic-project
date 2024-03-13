import { useContext, useState } from "react";
import TwoLines from "../../icons/TwoLines";
import X from "../../icons/X";
import Clock from "../../icons/Clock";
import GlobalContext from "../../../context/GlobalContext";
import DeepMenu from "../../icons/DeepMenu";
import Bookmark from "../../icons/Bookmark";
import Check from "../../icons/Check";

const labelClasses = [
  "bg-indigo-500",
  "bg-gray-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-red-500",
  "bg-purple-500",
];

export default function EventModal() {
  const { setShowEventModal, daySelected } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelClasses[0]);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">
            <TwoLines />
          </span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="text-gray-400">
              <X />
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="pt-3 border-0 text-gray-600 text-lg font-normal border-b-2 outline-none pl-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="text-gray-400">
              <Clock />
            </span>

            <p>{daySelected.format("dddd, MMMM DD")}</p>

            <span className="text-gray-400">
              <DeepMenu />
            </span>

            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="pt-3 border-0 text-gray-600 text-sm font-normal border-b-2 outline-none pl-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />

            <span className="text-gray-400">
              <Bookmark />
            </span>
            <div className="flex gap-x-2">
              {labelClasses.map((label, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(label)}
                  className={`${label} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === label && (
                    <span className="text-white text-sm">
                      <Check />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
