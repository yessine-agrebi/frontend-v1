import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import React from 'react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type Props = {
  timeSlot: any;
};

const BookMeeting: React.FC<Props> = ({ timeSlot }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Badge
          className={`${timeSlot.booked ? 'bg-red-500 hover:bg-red-400' : 'bg-green-600 hover:bg-green-400'}`}
        >
          {timeSlot.startTime.slice(0, 5)}
        </Badge>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {timeSlot.startTime} - {timeSlot.endTime}
          </DialogTitle>
          <p>{timeSlot.availability.availabilityId}</p>
        </DialogHeader>
        <div>
          <form>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Duration' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='0.5'>30 min</SelectItem>
                <SelectItem value='1'>1 hour</SelectItem>
                <SelectItem value='1.5'>1 hour 30 min</SelectItem>
                <SelectItem value='2'>2 hours</SelectItem>
              </SelectContent>
            </Select>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookMeeting;
