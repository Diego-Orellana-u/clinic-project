import { useContext } from "react";
import LeftIcon from "../../icons/LeftIcon";
import RightIcon from "../../icons/RightIcon";
import GlobalContext from "../../../context/GlobalContext";
import dayjs from "dayjs";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <span className="mr-10 text-xl font-normal">Calendar</span>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>

      <div className="flex gap-x-6">
        <button
          onClick={handlePrevMonth}
          className="cursor-pointer text-gray-600"
        >
          <LeftIcon fill={"black"} />
        </button>
        <button
          onClick={handleNextMonth}
          className="cursor-pointer text-gray-600"
        >
          <RightIcon fill={"black"} />
        </button>
      </div>

      <h2 className="ml-4 text-xl font-normal">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
