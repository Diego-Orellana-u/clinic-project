import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { getMonth } from "../../../data/arrayDays.js";
import GlobalContext from "../../../context/GlobalContext";
import ChevronBtns from "./ChevronBtns.jsx";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [monthArray, setMonthArray] = useState(getMonth());

  const { monthIndex, setMonthIndex, daySelected, setDaySelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  useEffect(() => {
    setMonthArray(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function handleClick() {
    if (currentMonthIdx !== monthIndex) {
      setMonthIndex(currentMonthIdx);
    }
  }

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);

    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-normal";
    } else {
      return "";
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="font-normal">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>

        <ChevronBtns
          onSmallPrev={handlePrevMonth}
          onSmallNext={handleNextMonth}
        />
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {monthArray[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {monthArray.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  handleClick();
                  setDaySelected(day);
                }}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
