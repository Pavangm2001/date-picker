import CalendarPreview from "./components/CalendarPreview";
import DateRangePicker from "./components/DatePicker";
import RecurrenceCustomization from "./components/RecurrenceCustomization";
import RecurrenceOptions from "./components/RecurrenceOptions";
import './styles/globals.css'


export default function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4" id="mainhead"><marquee scrollamount="20" behavior="alternate" direction="right">Recurring Date Picker</marquee></h1>
      <DateRangePicker/>
      <RecurrenceOptions />
      <RecurrenceCustomization />
      <CalendarPreview />
    </div>
  );
}
