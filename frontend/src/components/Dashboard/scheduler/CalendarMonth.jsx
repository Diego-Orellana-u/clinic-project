import React from "react";
import DaySquare from "./DaySquare";

export default function CalendarMonth({ month }){
  return(
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {
        month.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, i) => (
              <DaySquare day={day} key={i} rowIndex={index}/>
            ))}
          </React.Fragment>
        ))
      }
    </div>
  )
}