const days = [];
for (let index = 0; index < 31; index++) {
  const val = index + 1;
  const formatedVal = val.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  days.push({ value: formatedVal, label: formatedVal });
}

const months = [];
for (let index = 0; index < 11; index++) {
  const val = index + 1;
  const formatedVal = val.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  months.push({ value: formatedVal, label: formatedVal });
}

const years = [];
for (let index = 2000; index < 2090; index++) {
  years.push({ value: index + 1, label: index + 1 });
}

export { days, months, years };
