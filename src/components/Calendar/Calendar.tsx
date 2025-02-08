import React from "react";
import Card from "../ui/Card";

const Calendar = () => {
  // Get the current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  // Get the first day of the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const firstDayIndex = firstDayOfMonth.getDay(); // Day of the week for the 1st of the month

  // Get the number of days in the current month
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  // Generate an array of days to display in the calendar
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Add empty slots before the first day of the month to align the calendar
  const emptySlots = Array(firstDayIndex).fill(null);

  // Combine empty slots and days of the month
  const calendarDays = [...emptySlots, ...days];

  const title = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentYear}`;

  return (
    <Card grid_item_class="third_item" title={title}>
      <div className="w-full grid grid-cols-7 gap-1 mt-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="p-2 text-center font-semibold text-secondary"
          >
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`${
              day === currentDay
                ? "bg-background border-primary"
                : "bg-transparent border-transparent"
            } border rounded-md p-2 text-center`}
          >
            {day}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Calendar;
