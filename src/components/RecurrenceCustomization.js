// components/RecurrenceCustomization.js
import {useRecurrenceStore} from '../store/useRecurrenceStore';
import { useState } from 'react';

const RecurrenceCustomization = () => {
  const { recurrenceType, recurrenceCustomization, setRecurrenceCustomization } = useRecurrenceStore();
  const [every, setEvery] = useState(recurrenceCustomization.every);
  
  const handleEveryChange = (e) => {
    setEvery(e.target.value);
    setRecurrenceCustomization({ ...recurrenceCustomization, every: e.target.value });
  };

  return (
    <div className="mt-4">
      <label>Recurrence Customization</label>
      {recurrenceType !== 'daily' && (
        <div>
          <label>Every</label>
          <input
            type="number"
            value={every}
            onChange={handleEveryChange}
            className="border p-2 w-full"
            min="1"
          />
          <span>{recurrenceType === 'weekly' ? 'weeks' : recurrenceType === 'monthly' ? 'months' : 'years'}</span>
        </div>
      )}
    </div>
  );
};

export default RecurrenceCustomization;
