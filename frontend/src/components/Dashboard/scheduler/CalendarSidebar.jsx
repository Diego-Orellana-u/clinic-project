import CreateEventButton from "./CreateEventButton";
import Labels from "./Labels.jsx";
import SmallCalendar from "./SmallCalendar.jsx";

export default function CalendarSideBar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
