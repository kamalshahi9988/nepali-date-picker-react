import { days, months, years } from "../data";
import Dropdown from "./dropdown";
import useCalendar from "../hooks/useCalendar";

export default function InputWrapper() {
  const { calendar, setCalendar } = useCalendar();

  const setCals = (args) => {
    setCalendar(args);
  };
  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <Dropdown
          val={calendar.year}
          setCal={(val) => setCals({ ...calendar, year: val })}
          title={"Year"}
          options={years}
        />
        <Dropdown
          val={calendar?.month}
          setCal={(val) => setCals({ ...calendar, month: val })}
          type="border"
          title={"Month"}
          options={months}
        />
        <Dropdown
          val={calendar?.day}
          setCal={(val) => setCals({ ...calendar, day: val })}
          title={"Day"}
          options={days}
        />
      </div>
    </div>
  );
}
