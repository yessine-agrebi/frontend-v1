import React, { useState } from "react";
import { Availability } from "@/types";

const Calendar = ({ availabilities }: { availabilities: Availability[] }) => {
  console.log(availabilities);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

  const goToNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  // Filter availabilities for the current week
  const firstDayOfWeek = new Date(currentDate);
  const lastDayOfWeek = new Date(
    currentDate.setDate(currentDate.getDate() + 6)
  );
  const availabilitiesThisWeek = availabilities.filter((availability) => {
    const availabilityDate = new Date(availability.startDate);
    return (
      availabilityDate >= firstDayOfWeek && availabilityDate <= lastDayOfWeek
    );
  });

  // Generate an array of 7 dates representing the days of the current week
  const daysOfMonth = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(firstDayOfWeek);
    day.setDate(day.getDate() + i);
    return day;
  });

  // Function to generate time slots between start and end times
  const generateTimeSlots = (startTime: string, endTime: string) => {
    const start = new Date(`01/01/2023 ${startTime}`);
    const end = new Date(`01/01/2023 ${endTime}`);
    const timeSlots = [];
    let currentTime = start;

    while (currentTime <= end) {
      timeSlots.push(
        currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }

    return timeSlots;
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between mb-4">
        <button onClick={goToPreviousWeek}>Previous</button>
        <button onClick={goToNextWeek}>Next</button>
      </div>
      <div className="grid grid-cols-7 border-b-2 border-yellow-300">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="p-2 text-center text-gray-400">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfMonth.map((day, index) => (
          <div key={index} className="p-2 text-center">
            <div className="text-gray-400">{day.getDate()}</div>
            {availabilitiesThisWeek.map((availability, i) => {
              const timeSlots = generateTimeSlots(
                availability.startTime,
                availability.endTime
              );
              console.log(timeSlots);
              return (
                <React.Fragment key={i}>
                  {timeSlots.map((time, j) => (
                    <div key={j} className="py-2 font-semibold">
                      {time}
                    </div>
                  ))}
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
