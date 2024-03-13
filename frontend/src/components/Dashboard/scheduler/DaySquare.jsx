import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";

const eventBg = {
  "bg-indigo-500": "bg-indigo-200",
  "bg-gray-500": "bg-gray-200",
  "bg-green-500": "bg-green-200",
  "bg-blue-500": "bg-blue-200",
  "bg-red-500": "bg-red-200",
  "bg-purple-500": "bg-purple-200",
};

export default function DaySquare({ day, rowIndex }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (event) => dayjs(event.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") == dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((event, index) => (
          <div
            key={index}
            onClick={() => setSelectedEvent(event)}
            className={`${
              eventBg[event.label]
            } p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}
