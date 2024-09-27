// store/useRecurrenceStore.js
import {create,createStore,useStore} from 'zustand';

export const useRecurrenceStore = create((set) => ({
  recurrenceType: 'daily',
  recurrenceCustomization: {
    every: 1,
    specificDays: [],
    nthDay: null,
  },
  dateRange: {
    startDate: null,
    endDate: null,
  },
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setRecurrenceCustomization: (customization) => set({ recurrenceCustomization: customization }),
  setDateRange: (range) => set({ dateRange: range }),
}));



