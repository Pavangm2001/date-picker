// components/CalendarPreview.js
import { addDays, eachDayOfInterval } from 'date-fns';
import {useRecurrenceStore} from '../store/useRecurrenceStore';
import { useMemo } from 'react';

const CalendarPreview = () => {
  const { dateRange, recurrenceCustomization, recurrenceType } = useRecurrenceStore();
  
  const recurringDates = useMemo(() => {
    if (!dateRange.startDate) return [];

    let dates = [];
    let interval = { start: dateRange.startDate, end: dateRange.endDate || addDays(dateRange.startDate, 30) };

    if (recurrenceType === 'daily') {
      dates = eachDayOfInterval(interval);
    }

    return dates;
  }, [dateRange, recurrenceCustomization, recurrenceType]);

  return (
    <div className="mt-4">
      <label>Recurring Dates Preview</label>
      <div className="grid grid-cols-7 gap-1" id='datepreviewbox'>
        {recurringDates.map((date, index) => (
          <div key={index} className="border p-2" id='minidatebox'>
            {date.toDateString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPreview;
