import React, { useState } from 'react';
import { Availability } from '@/types';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { Button } from './ui/button';
import { useSession } from 'next-auth/react';
import Api from '@/API/Api';
import { useQuery } from '@tanstack/react-query';
import BookMeeting from './BookMeeting';

const Calendar = ({ availabilities }: { availabilities: Availability[] }) => {
  const { data: session, status } = useSession();
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [displayCount, setDisplayCount] = useState(6);
  const [currentDate, setCurrentDate] = useState(new Date());

  const getTimeSlots = async () => {
    const allTimeSlots: { [key: string]: any[] } = {};

    for (let index = 0; index < daysOfMonth.length; index++) {
      const day = daysOfMonth[index];
      const dayAvailabilities = availabilities.filter(
        (availability) =>
          availability.day.slice(0, 3).toLowerCase() ===
          daysOfWeek[index].toLowerCase()
      );

      for (const availability of dayAvailabilities) {
        try {
          const response = await Api.get(
            `/timeslots/${availability.availabilityId}`,
            {
              headers: {
                Authorization: `Bearer ${session?.backendTokens.accessToken}`,
              },
            }
          );

          if (response.data) {
            // Organize time slots by day
            if (!allTimeSlots[day.toDateString()]) {
              allTimeSlots[day.toDateString()] = [];
            }
            allTimeSlots[day.toDateString()].push(...response.data);
          }
        } catch (error) {
          console.error(
            `Failed to fetch timeslots for availability ${availability.availabilityId}:`,
            error
          );
        }
      }
    }

    console.log(allTimeSlots);

    return allTimeSlots;
  };

  const { data: timeslotsByDay, isLoading, isError } = useQuery({
    queryKey: ['timeslots'],
    queryFn: getTimeSlots,
    enabled: status === 'authenticated',
  });

  const goToPreviousWeek = () => {
    if (currentDate <= new Date()) return;
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

  const goToNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  const daysOfMonth = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(currentDate);
    day.setDate(day.getDate() + i);
    return day;
  });

  const handleDisplayCount = () => {
    setDisplayCount(displayCount + 6);
  };

  return (
    <div className='w-3/4'>
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
            {timeslotsByDay && timeslotsByDay[day.toDateString()] && (
              <div className='flex flex-col items-center justify-center gap-1 overflow-hidden'>
                {timeslotsByDay[day.toDateString()].map((timeslot: any, index) => index <= displayCount && (
                  <BookMeeting key={timeslot.id} timeSlot={timeslot} />
                ))}
              </div>
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
