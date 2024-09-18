import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";

type CalendarHeaderProps = {
  currentMonth: Date;
  nextMonth: () => void;
  prevMonth: () => void;
};
console.log("CalendarHeader component loaded");

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  nextMonth,
  prevMonth,
}) => {
  return (
    <header className="mb-4 flex w-full max-w-md justify-between">
      {/* Previous Month Button */}
      <button
        onClick={prevMonth}
        className="flex items-center gap-2 rounded-md bg-gray-300 px-3 py-1 hover:bg-gray-400"
      >
        <ChevronLeftIcon className="h-5 w-5 text-white" />
        <span>Previou</span>
      </button>

      {/* Current Month Display */}
      <h2 className="text-xl font-bold">{format(currentMonth, "MMMM yyyy")}</h2>

      {/* Next Month Button */}
      <button
        onClick={nextMonth}
        className="flex items-center gap-2 rounded-md bg-gray-300 px-3 py-1 hover:bg-gray-400"
      >
        <span>Next</span>
        <ChevronRightIcon className="h-5 w-5 text-white" />
      </button>
    </header>
  );
};

export default CalendarHeader;
