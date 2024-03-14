import React from "react";
import DaySquare from "./DaySquare";

export default function CalendarMonth({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((rowArr, index) => (
        <React.Fragment key={index}>
          {rowArr.map((dayObj, i) => {
            return <DaySquare day={dayObj} key={i} rowIndex={index} />;
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
