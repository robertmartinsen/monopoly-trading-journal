import React from "react";
import { useCalendar } from "./useCalendar";
import CalendarHeader from "./CalendarHeader"
import DayCell from "./DayCell";

import { format } from "date-fns";

const Calendar: React.FC = () => {
  const {
    currentMonth,
    days,
    handleInputChange,
    inputData,
    nextMonth,
    prevMonth,
  } = useCalendar();

  const renderDays = () => {
    return days.map((day) => (
      <DayCell
        key={day.toString()}
        day={day}
        value={inputData[format(day, "yyyy-MM-dd")] || ""}
        onChange={handleInputChange}
        currentMonth={currentMonth}
      />
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <CalendarHeader
        currentMonth={currentMonth}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
      />
      <div className="grid w-full max-w-md grid-cols-7 gap-2">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
