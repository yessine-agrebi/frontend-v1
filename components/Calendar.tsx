import React, { useState } from 'react';
import { Availability } from '@/types';
import { Badge } from './ui/badge';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { Button } from './ui/button';

const Calendar = ({ availabilities }: { availabilities: Availability[] }) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [displayCount, setDisplayCount] = useState(6);

  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousWeek = () => {
    //to ensure not going back before the current date
    if (currentDate <= new Date()) return;
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

  const goToNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  // Generate an array of 7 dates representing the days of the current week
  const daysOfMonth = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(currentDate);
    day.setDate(day.getDate() + i);
    return day;
  });

  //convert '09:00 am' to '09:00'
  const convertTime = (time: string) => {
    const t = time.toLowerCase();
    const newTime = t.replace(' am', '').replace(' pm', '');
    const [hour, minute] = newTime.split(':');
    return `${hour}:${minute}`;
  };
  //generate time slots between start and end time
  const generateTimeSlots = (startTime: string, endTime: string) => {
    const start = convertTime(startTime);
    const end = convertTime(endTime);
    const startOfDay = new Date(
      0,
      0,
      0,
      parseInt(start.split(':')[0]),
      parseInt(start.split(':')[1])
    );
    const endOfDay = new Date(
      0,
      0,
      0,
      parseInt(end.split(':')[0]),
      parseInt(end.split(':')[1])
    );
    const timeSlots = [];
    let currentTime = start;
    while (startOfDay.getTime() <= endOfDay.getTime()) {
      const [hour, minute] = currentTime.split(':');
      const formattedHour = hour.padStart(2, '0'); // Ensure hours have leading zero
      const formattedMinute = minute.padStart(2, '0'); // Ensure minutes have leading zero
      timeSlots.push(`${formattedHour}:${formattedMinute}`);
      const date = new Date(0, 0, 0, parseInt(hour), parseInt(minute));
      date.setMinutes(date.getMinutes() + 30);
      currentTime = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
      startOfDay.setHours(date.getHours());
      startOfDay.setMinutes(date.getMinutes());
    }
    return timeSlots;
  };
  //generate time slots for a specific day
  const generateTimeSlotsForDay = (day: string) => {
    const dayAvailabilities = availabilities.filter(
      (availability) =>
        availability.day.slice(0, 3).toLowerCase() === day.toLowerCase()
    );
    const timeSlots = dayAvailabilities.map((availability) =>
      generateTimeSlots(availability.startTime, availability.endTime)
    );
    return timeSlots;
  };

  const handleDisplayCount = () => {
    setDisplayCount(displayCount + 6);
  };

  return (
    <div className='container mx-auto mt-4'>
      <div className='flex items-center justify-start gap-2'>
        <button onClick={goToPreviousWeek}>
          <FcPrevious size={25} />
        </button>
        <button onClick={goToNextWeek}>
          <FcNext size={25} />
        </button>
      </div>
      <div className='grid grid-cols-7 border-b-2 border-blue-500'>
        {daysOfWeek.map((day, index) => (
          <div key={index} className='p-2 text-center '>
            {day}
          </div>
        ))}
      </div>
      <div className='grid grid-flow-row grid-cols-7 gap-2'>
        {daysOfMonth.map((day, index) => (
          <div key={index} className='p-2 text-center'>
            <div className='text-gray-400'>{day.getDate()}</div>
          </div>
        ))}
      </div>
      <div className='grid grid-flow-row grid-cols-7 gap-2'>
        {daysOfMonth.map((day, index) => (
          <div key={index}>
            {generateTimeSlotsForDay(daysOfWeek[index]).map(
              (timeSlots, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center gap-1 overflow-hidden'
                >
                  {timeSlots.map(
                    (timeSlot, index) =>
                      index <= displayCount && (
                        <Badge key={index} className=''>
                          {timeSlot}
                        </Badge>
                      )
                  )}
                </div>
              )
            )}
          </div>
        ))}
        <div className='col-span-4 grid grid-cols-subgrid'>
          <Button className='col-start-4' onClick={handleDisplayCount}>
            More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
