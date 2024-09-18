import React, { useState } from "react";
import { useCalendar } from "./useCalendar";
import DayCell from "./DayCell";
import TotalSection from "./TotalSection";
import { format, subMonths } from "date-fns"; // Use subMonths to calculate previous month safely

const CalendarPage: React.FC = () => {
  const {
    currentMonth,
    days,
    inputData,
    handleInputChange,
    nextMonth,
    prevMonth,
    saveDataToFirestore,
    totalPLThisMonth,
    totalPLPreviousMonth,
  } = useCalendar();

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveDataToFirestore();
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    } finally {
      setIsSaving(false);
    }
  };

  // Safely calculate the previous month
  const previousMonth = subMonths(currentMonth, 1);

  return (
    <div>
      <div className="flex justify-between">
        <button onClick={prevMonth}>Previous</button>
        <h2>{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {days.map((day) => (
          <DayCell
            key={day.toString()}
            day={day}
            value={inputData[format(day, "yyyy-MM-dd")] || ""}
            onChange={handleInputChange}
            currentMonth={currentMonth}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <div>
          <TotalSection
            totalPLThisMonth={totalPLThisMonth}
            totalPLPreviousMonth={totalPLPreviousMonth}
            currentMonth={currentMonth}
            previousMonth={previousMonth}
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="rounded bg-secondary-100 px-4 py-2 text-white"
          >
            {isSaving ? "Saving..." : "Save P&L"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
