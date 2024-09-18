import React from "react";
import { format, isSameDay, isWeekend, isSameMonth } from "date-fns";

type DayCellProps = {
  day: Date;
  value: string;
  onChange: (date: Date, value: string) => void;
  currentMonth: Date;
};

const DayCell: React.FC<DayCellProps> = ({
  day,
  value,
  onChange,
  currentMonth,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const regex = /^-?\d*$/;

    if (regex.test(inputValue)) {
      onChange(day, inputValue);
    }
  };

  const getBackgroundColor = () => {
    if (!value) return "bg-transparent";
    return parseFloat(value) >= 0
      ? "bg-gradient-to-t from-green-500 to-60%"
      : "bg-gradient-to-t from-red-500 to-60%"; 
  };

  const isDisabled = isWeekend(day) || !isSameMonth(day, currentMonth); 
  const textColor = isDisabled ? "text-gray-600" : "text-white";

  return (
    <div
      className={`flex flex-col items-center rounded-md border p-2 ${getBackgroundColor()}`}
    >
      <div className="flex w-full justify-between">
        <span
          className={`font-bold ${isSameDay(day, new Date()) ? "text-white" : textColor}`}
        >
          {format(day, "EEE")}
        </span>
        <span
          className={`font-bold ${isSameDay(day, new Date()) ? "text-secondary-300" : textColor}`}
        >
          {format(day, "d.")}
        </span>
      </div>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className={`mt-1 w-full rounded-md bg-transparent p-1 text-center focus:outline-none ${textColor}`}
        disabled={isDisabled} 
      />
    </div>
  );
};

export default DayCell;
