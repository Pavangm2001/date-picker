// components/RecurrenceOptions.js
import {useRecurrenceStore} from '../store/useRecurrenceStore';

const RecurrenceOptions = () => {
  const { recurrenceType, setRecurrenceType } = useRecurrenceStore();
  
  return (
    <div className="space-y-2">
      <label>Recurrence Pattern</label>
      <select
        className="border p-2 w-full"
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
