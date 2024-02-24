import React, { useState } from 'react';

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const customTimes = ['8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00'];

  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

  const goToNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  // Generate an array of 7 dates representing the days of the current week
  const firstDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
  const daysOfMonth = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(firstDayOfWeek);
    day.setDate(day.getDate() + i);
    return day;
  });

  return (
    <div className="container mx-auto">
      <div className="flex justify-between mb-4">
        <button onClick={goToPreviousWeek}>Previous</button>
        <button onClick={goToNextWeek}>Next</button>
      </div>
      <div className="grid grid-cols-7 border-b-2 border-yellow-300">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="p-2 text-center text-gray-400">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfMonth.map((day, index) => (
          <div key={index} className="p-2 text-center">
            <div className='text-gray-400'>{day.getDate()}</div> 
            {customTimes.map((time, i) => (
              <div key={i} className="py-2 font-semibold">{time}</div> 
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
