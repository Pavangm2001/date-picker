// components/DatePicker.js
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useRecurrenceStore} from '../store/useRecurrenceStore';

const DateRangePicker = () => {
  const { dateRange, setDateRange } = useRecurrenceStore();
  
  return (
    <div className="flex space-x-4" id='datepicker'>
      <div>
        <label>Start Date</label>
        <DatePicker
          selected={dateRange.startDate}
          onChange={(date) => setDateRange({ ...dateRange, startDate: date })}
          dateFormat="yyyy/MM/dd"
          className="border p-2"
        />
      </div>
      <div>
        <label>End Date (Optional)</label>
        <DatePicker
          selected={dateRange.endDate}
          onChange={(date) => setDateRange({ ...dateRange, endDate: date })}
          dateFormat="yyyy/MM/dd"
          className="border p-2"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
