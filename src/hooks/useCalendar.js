import { useState } from "react";

const useCalendar = () => {
  const [calendar, setCalendar] = useState({
    year: null,
    month: null,
    day: null,
  });
  const formatedDate = `${calendar.year}-${calendar.month}-${calendar.day}`;
  return { calendar, formatedDate, setCalendar };
};

export default useCalendar;
