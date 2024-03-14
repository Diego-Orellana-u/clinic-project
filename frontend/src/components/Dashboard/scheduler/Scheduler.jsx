import { useState, useContext, useEffect } from "react";
import CalendarHeader from "./CalendarHeader.jsx";
import CalendarMonth from "./CalendarMonth.jsx";
import CalendarSideBar from "./CalendarSidebar.jsx";
import { getMonth } from "../../../data/arrayDays.js";
import GlobalContext from "../../../context/GlobalContext.jsx";
import EventModal from "./EventModal.jsx";

export default function Scheduler() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  console.log(currentMonth);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <div className="h-[calc(100vh-55px)] flex flex-col flex-1 ">
        <CalendarHeader />
        <div className="flex flex-1">
          <CalendarSideBar />
          <CalendarMonth month={currentMonth} />
        </div>
      </div>
    </>
  );
}
